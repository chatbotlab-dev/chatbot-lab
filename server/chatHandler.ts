
import { GoogleGenAI } from '@google/genai';

export interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

export interface ChatRequestBody {
  message?: string;
  history?: Array<{
    role?: string;
    sender?: string;
    text?: string;
  }>;
}

export interface ChatSuccessResponse {
  reply: string;
  codeSnippet?: string;
  suggestions: string[];
}

export interface ChatErrorResponse {
  error: string;
  message: string;
}

const SYSTEM_INSTRUCTION = `คุณคือ "CHATBOT LAB Assistant" ผู้ช่วย AI ประจำแพลตฟอร์มการเรียนรู้ CHATBOT LAB

[บริบทของโครงงาน]
- CHATBOT LAB เป็นเว็บไซต์เพื่อการเรียนรู้ที่สอนบริษัทและนักพัฒนาสร้าง AI Chatbot สำหรับตอบคำถามลูกค้า และสอนวิธีนำ Chatbot ที่บริษัทสร้างไปติดตั้งบนเว็บไซต์ของตนเอง
- หน้าต่างแชทนี้ (ChatWidget) มีไว้เป็น "ตัวอย่างสาธิตการทำงาน" (Demo Example) บนเว็บไซต์ CHATBOT LAB เท่านั้น ไม่ใช่บริการ Chatbot กลางสำหรับให้บริษัทอื่นนำไปฝังเว็บไซต์

[หน้าที่และขอบเขตความรู้ของคุณ]
1. ให้คำแนะนำเกี่ยวกับการสร้าง AI Chatbot ด้วย Google AI Studio
2. อธิบาย 4 เสาหลักของ System Instructions (Persona/Role, Scope/Knowledge, Guardrails/Safety, Fallback)
3. อธิบายการตั้งค่าพารามิเตอร์ เช่น Temperature (แนะนำ 0.2 สำหรับงานข้อมูลลูกค้าที่ต้องการความแม่นยำสูง), Top-P (0.95)
4. อธิบายสถาปัตยกรรมความปลอดภัย 3 ระดับ (Frontend -> Backend Proxy -> Google AI) และย้ำเตือนว่าห้ามใส่ Gemini API Key ในโค้ด Frontend เด็ดขาด โดยต้องเก็บเป็นความลับในเซิร์ฟเวอร์ Backend Proxy เท่านั้น
5. แนะนำวิธีนำ Chatbot ไปติดตั้งบนหน้าเว็บจริง (React Component, Standalone Script Tag, iFrame)
6. หากผู้ใช้ถามเรื่องที่อยู่นอกเหนือการสร้างแชทบอทหรือการเชื่อมต่อเว็บไซต์ ให้ตอบปฏิเสธอย่างสุภาพแล้วแนะนำกลับมาที่หัวข้อการเรียนรู้ของ CHATBOT LAB

[แนวทางการตอบ]
- ใช้ภาษาไทยที่สุภาพ อบอุ่น กระชับ และตรงประเด็น
- หากมีการยกตัวอย่างโค้ด ให้เขียนในบล็อก markdown code (เช่น \`\`\`typescript หรือ \`\`\`javascript) เสมอ เพื่อให้ผู้เรียนอ่านและคัดลอกได้ง่าย`;

/**
 * Extracts the first code block from Markdown text if present.
 */
function extractFirstCodeSnippet(text: string): string | undefined {
  const match = text.match(/```(?:[a-zA-Z0-9_-]+)?\n([\s\S]*?)```/);
  return match && match[1] ? match[1].trim() : undefined;
}

/**
 * Generates relevant follow-up suggestions based on the topic discussed.
 */
function generateFollowUpSuggestions(
  userMessage: string,
  replyText: string
): string[] {
  const combined = (userMessage + ' ' + replyText).toLowerCase();

  if (
    combined.includes('system instruction') ||
    combined.includes('คำสั่งระบบ') ||
    combined.includes('เสาหลัก')
  ) {
    return [
      'การตั้งค่า Temperature ควรใช้เท่าไหร่?',
      'ทำไมต้องมี Backend Proxy?',
      'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
    ];
  }

  if (
    combined.includes('api key') ||
    combined.includes('backend') ||
    combined.includes('proxy') ||
    combined.includes('ปลอดภัย')
  ) {
    return [
      'ขอตัวอย่างโค้ด Express Proxy',
      'วิธีซ่อน Key ในไฟล์ .env',
      '3 วิธีติดตั้ง Chatbot บนหน้าเว็บ',
    ];
  }

  if (
    combined.includes('temperature') ||
    combined.includes('parameter') ||
    combined.includes('top-p')
  ) {
    return [
      '4 เสาหลักของ System Instructions',
      'ทำไมต้องซ่อน API Key ใน Frontend?',
      'ขั้นตอนการสร้างใน Google AI Studio',
    ];
  }

  if (
    combined.includes('ติดตั้ง') ||
    combined.includes('widget') ||
    combined.includes('script') ||
    combined.includes('react')
  ) {
    return [
      'เปรียบเทียบ React vs Script Tag',
      'ทำไมต้องมี Backend Proxy?',
      'Checklist ก่อนขึ้น Production',
    ];
  }

  return [
    'ขั้นตอนสร้างใน Google AI Studio',
    '4 เสาหลัก System Instructions',
    'ทำไมห้ามเปิดเผย API Key ใน Frontend?',
  ];
}

/**
 * Validates request body and executes Gemini generation.
 */
export async function processChatRequest(
  body: ChatRequestBody
): Promise<{
  status: number;
  data: ChatSuccessResponse | ChatErrorResponse;
}> {
  // 1. Validation: Message existence and type
  if (!body || typeof body !== 'object') {
    return {
      status: 400,
      data: {
        error: 'INVALID_REQUEST',
        message: 'รูปแบบคำขอไม่ถูกต้อง กรุณาส่งข้อมูล JSON ที่มีฟิลด์ message',
      },
    };
  }

  const rawMessage =
    typeof body.message === 'string' ? body.message.trim() : '';

  if (!rawMessage) {
    return {
      status: 400,
      data: {
        error: 'EMPTY_MESSAGE',
        message: 'ข้อความคำถามต้องไม่ว่างเปล่า กรุณาพิมพ์คำถามที่ต้องการสนทนา',
      },
    };
  }

  // 2. Validation: Message length
  if (rawMessage.length > 2000) {
    return {
      status: 400,
      data: {
        error: 'MESSAGE_TOO_LONG',
        message: `ข้อความยาวเกินไป (${rawMessage.length} ตัวอักษร) กรุณากระชับข้อความให้ไม่เกิน 2,000 ตัวอักษร`,
      },
    };
  }

  // 3. Validation: Server-side API Key availability
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return {
      status: 503,
      data: {
        error: 'MISSING_API_KEY',
        message:
          'ยังไม่ได้ตั้งค่า GEMINI_API_KEY บนเซิร์ฟเวอร์ กรุณาเพิ่ม API Key ใน Secrets หรือในไฟล์ .env ของเซิร์ฟเวอร์ก่อนใช้งาน',
      },
    };
  }

  // 4. Format conversation history
  const formattedContents: Array<{
    role: 'user' | 'model';
    parts: Array<{ text: string }>;
  }> = [];

  if (Array.isArray(body.history)) {
    const safeHistory = body.history.slice(-16);

    for (const item of safeHistory) {
      if (!item || typeof item.text !== 'string') continue;

      const text = item.text.trim();
      if (!text) continue;

      const role =
        item.role === 'model' ||
        item.role === 'bot' ||
        item.sender === 'bot'
          ? 'model'
          : 'user';

      // Avoid consecutive duplicate roles
      const last = formattedContents[formattedContents.length - 1];

      if (last && last.role === role) {
        last.parts[0].text += `\n${text}`;
      } else {
        formattedContents.push({
          role,
          parts: [{ text }],
        });
      }
    }
  }

  // Ensure history starts with user if not empty
  while (
    formattedContents.length > 0 &&
    formattedContents[0].role !== 'user'
  ) {
    formattedContents.shift();
  }

  // Append current user message
  const lastItem = formattedContents[formattedContents.length - 1];

  if (lastItem && lastItem.role === 'user') {
    lastItem.parts[0].text += `\n${rawMessage}`;
  } else {
    formattedContents.push({
      role: 'user',
      parts: [{ text: rawMessage }],
    });
  }

  // 5. Call Gemini API
  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
        timeout: 55000,
      },
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
      },
    });

    const firstCandidate = response.candidates?.[0];
    let replyText = response.text?.trim() || '';

    if (!replyText) {
      if (firstCandidate?.finishReason === 'SAFETY') {
        replyText =
          'ขออภัยครับ คำถามนี้ไม่สามารถตอบได้เนื่องจากติดเงื่อนไขความปลอดภัย (Safety Filter) กรุณาปรับเปลี่ยนคำถามใหม่ครับ';
      } else {
        replyText =
          'ขออภัยครับ ไม่สามารถสร้างคำตอบได้ในขณะนี้ กรุณาลองส่งคำถามใหม่อีกครั้งครับ';
      }
    }

    const codeSnippet = extractFirstCodeSnippet(replyText);
    const suggestions = generateFollowUpSuggestions(rawMessage, replyText);

    return {
      status: 200,
      data: {
        reply: replyText,
        codeSnippet,
        suggestions,
      },
    };
  } catch (err: unknown) {
    console.error('Gemini API call failed with error:', err);

    const errorObj = err as {
      status?: number;
      message?: string;
      name?: string;
    };

    const errorMessage = errorObj.message || String(err);
    const errorName = errorObj.name || '';

    // Timeout (504)
    if (
      errorName === 'TimeoutError' ||
      errorName === 'AbortError' ||
      errorMessage.toLowerCase().includes('timeout') ||
      errorMessage.includes('DEADLINE_EXCEEDED') ||
      errorMessage.includes('Deadline expired') ||
      errorObj.status === 504
    ) {
      return {
        status: 504,
        data: {
          error: 'GATEWAY_TIMEOUT',
          message:
            'การเชื่อมต่อกับ Gemini API ใช้เวลานานเกินกำหนด กรุณาลองใหม่อีกครั้ง',
        },
      };
    }

    // Gemini temporarily unavailable (503)
    if (
      errorObj.status === 503 ||
      errorMessage.includes('UNAVAILABLE')
    ) {
      return {
        status: 503,
        data: {
          error: 'GEMINI_UNAVAILABLE',
          message:
            'ขณะนี้เซิร์ฟเวอร์ Gemini มีผู้ใช้งานหนาแน่น กรุณาลองใหม่อีกครั้งภายหลัง',
        },
      };
    }

    // Rate limit / Quota (429)
    if (
      errorObj.status === 429 ||
      errorMessage.includes('429') ||
      errorMessage.includes('RESOURCE_EXHAUSTED') ||
      errorMessage.toLowerCase().includes('quota') ||
      errorMessage.includes('RATE_LIMIT')
    ) {
      return {
        status: 429,
        data: {
          error: 'RATE_LIMIT_EXCEEDED',
          message:
            'ขณะนี้ระบบทดลองใช้งานถึงขีดจำกัดชั่วคราวแล้ว กรุณากลับมาทดลองใหม่ภายหลัง',
        },
      };
    }

    // Invalid API Key (403)
    if (
      errorMessage.includes('403') ||
      errorMessage.includes('API_KEY_INVALID') ||
      errorMessage.includes('API key not valid') ||
      errorMessage.includes('PERMISSION_DENIED') ||
      errorMessage.includes('unregistered project')
    ) {
      return {
        status: 403,
        data: {
          error: 'INVALID_API_KEY',
          message:
            'GEMINI_API_KEY บนเซิร์ฟเวอร์ไม่ถูกต้อง หรือไม่มีสิทธิ์เข้าถึงโมเดล กรุณาตรวจสอบการตั้งค่า API Key',
        },
      };
    }

    // Model not found (404)
    if (
      errorMessage.includes('404') ||
      errorMessage.includes('NOT_FOUND')
    ) {
      return {
        status: 404,
        data: {
          error: 'MODEL_NOT_FOUND',
          message:
            'ไม่พบโมเดล AI ที่ระบุบนเซิร์ฟเวอร์ กรุณาตรวจสอบการตั้งค่าโมเดล',
        },
      };
    }

    // Generic server/network error (502)
    return {
      status: 502,
      data: {
        error: 'GEMINI_API_ERROR',
        message:
          'เกิดข้อผิดพลาดในการเชื่อมต่อกับ Gemini API กรุณาลองใหม่อีกครั้งในภายหลัง',
      },
    };
  }
}
