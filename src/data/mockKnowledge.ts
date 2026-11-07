import { PromptTemplate, IntegrationCodeExample } from '../types';

export interface CourseChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  topics: string[];
}

export const COURSE_CHAPTERS: CourseChapter[] = [
  {
    id: 'ch1',
    chapterNumber: 'บทที่ 1',
    title: 'ทำความเข้าใจ Chatbot และเริ่มต้นใช้ Google AI Studio',
    subtitle: 'พื้นฐานเพื่อการสร้างแชทบอทและการเข้าสู่พื้นที่ทดลองจริง',
    duration: '10 นาที',
    description: 'เปรียบเทียบความแตกต่างระหว่าง Rule-based กับ AI Chatbot, เข้าใจวิธีที่ AI ตอบตามบริบท และเรียนรู้หน้าตา Google AI Studio เพื่อพร้อมลงมือสร้างทันที',
    topics: [
      'Chatbot คืออะไร: เปรียบเทียบ Rule-based vs AI Chatbot',
      'ขั้นตอนที่ 1: เข้าใช้งาน Google AI Studio (aistudio.google.com)',
      'ขั้นตอนที่ 2: สร้างโปรเจกต์ใหม่ (เลือกเมนู + New app บนแถบซ้าย)',
      'ขั้นตอนที่ 3: ป้อน Prompt เพื่อสร้าง Chatbot พร้อมตัวอย่างคัดลอกได้',
      'ขั้นตอนที่ 4-5: รอ AI สร้างผลงาน ตรวจสอบคำตอบ และปรับแก้ Prompt',
    ],
  },
  {
    id: 'ch2',
    chapterNumber: 'บทที่ 2',
    title: 'การสร้าง Prompt และกำหนด System Instructions',
    subtitle: 'กำหนดบทบาท ขอบเขตคำตอบ และกฎเหล็กของ Chatbot',
    duration: '20 นาที',
    description: 'เรียนรู้วิธีสั่งการ AI ด้วย System Instructions กำหนดขอบเขตข้อมูลที่ตอบได้ กฎป้องกันการตอบนอกเรื่อง และใส่ตัวอย่างเพื่อควบคุมผลลัพธ์',
    topics: [
      'การเลือกโมเดล Gemini สำหรับ Chatbot เว็บไซต์',
      '4 ส่วนประกอบของ System Instructions (บทบาท, ขอบเขต, กฎข้อห้าม, ทางออก)',
      'ตัวอย่างคำสั่งระบบสำหรับร้านค้า, ติวเตอร์โค้ด และองค์กร',
      'การใส่ตัวอย่างคำถาม-คำตอบเพื่อคุมรูปแบบ',
    ],
  },
  {
    id: 'ch3',
    chapterNumber: 'บทที่ 3',
    title: 'การปรับแต่งการตอบ และการขอรับ Gemini API Key',
    subtitle: 'ปรับระดับความแม่นยำ และสร้างกุญแจเชื่อมต่อระบบ',
    duration: '15 นาที',
    description: 'ปรับตั้งค่า Temperature ให้ตอบแม่นยำตรงตามข้อมูล, ตรวจสอบตัวกรองความปลอดภัย, สร้าง API Key และใช้ปุ่ม Get Code เพื่อนำไปพัฒนาต่อ',
    topics: [
      'การตั้งค่า Temperature (0.2 สำหรับความแม่นยำสูง)',
      'การเปิดใช้ตัวกรองความปลอดภัยของระบบ',
      'ขั้นตอนการสร้าง Gemini API Key สำหรับโปรเจกต์',
      'การใช้งานปุ่ม Get Code เพื่อส่งออกโค้ดเชื่อมต่อ',
    ],
  },
  {
    id: 'ch4',
    chapterNumber: 'บทที่ 4',
    title: 'การเชื่อมต่อ Backend Proxy และความปลอดภัย API Key',
    subtitle: 'สถาปัตยกรรมปลอดภัยสำหรับเรียกใช้ Gemini API จากเว็บไซต์',
    duration: '25 นาที',
    description: 'เหตุผลที่ห้ามใส่ API Key ในเบราว์เซอร์, สร้างเซิร์ฟเวอร์ Backend Proxy ด้วย Express และ @google/genai SDK เพื่อรับคำขอจากหน้าเว็บอย่างปลอดภัย',
    topics: [
      'ทำไมต้องมีเซิร์ฟเวอร์คนกลาง (Backend Proxy)',
      'สถาปัตยกรรม 3 ระดับ: หน้าเว็บ -> เซิร์ฟเวอร์ -> Gemini API',
      'การเขียนโค้ด Backend ด้วย Node.js / Express',
      'การเก็บรักษา API Key ในไฟล์ .env อย่างปลอดภัย',
    ],
  },
  {
    id: 'ch5',
    chapterNumber: 'บทที่ 5',
    title: 'การติดตั้ง Chatbot บนหน้าเว็บ และการ Deploy ขึ้นระบบจริง',
    subtitle: 'นำกล่องแชทไปแสดงผลบนเว็บไซต์และเผยแพร่ออนไลน์',
    duration: '20 นาที',
    description: 'ออกแบบหน้าต่างแชทลอย (Floating Widget), วิธีติดตั้งบนเว็บไซต์จริง 3 รูปแบบ และขั้นตอนนำเว็บขึ้นระบบออนไลน์ (Deploy)',
    topics: [
      'ส่วนประกอบของปุ่มแชทและหน้าต่างสนทนาที่ดี',
      '3 วิธีการติดตั้ง: React Component, Script Tag และ iFrame',
      'การทดสอบการใช้งานบนมือถือ (Touch & Responsive)',
      'ขั้นตอนการ Deploy และรายการตรวจเช็กก่อนใช้งานจริง',
    ],
  },
];

export const SYSTEM_INSTRUCTION_TEMPLATES: PromptTemplate[] = [
  {
    id: 'customer-support',
    title: '1. ผู้ช่วยร้านค้าออนไลน์ (Customer Support)',
    role: 'ผู้ช่วยตอบคำถามลูกค้าประจำร้านค้าออนไลน์ ShopHub',
    category: 'E-Commerce',
    systemInstruction: `คุณคือผู้ช่วย AI ประจำร้านค้าออนไลน์ "ShopHub" ที่มีน้ำเสียงสุภาพ อบอุ่น และเป็นมิตร

[หน้าที่หลัก]
1. ตอบคำถามเกี่ยวกับสินค้า นโยบายจัดส่ง และการรับประกัน
2. ให้ข้อมูลตรงตามข้อเท็จจริง ห้ามคาดเดาข้อมูลนอกเหนือจากที่กำหนด
3. ใช้ภาษาไทยสุภาพ มีหางเสียง (ครับ/ค่ะ) ตามความเหมาะสม

[ข้อมูลอ้างอิงของร้าน]
- ระยะเวลาจัดส่ง: ใน กทม. 1-2 วันทำการ, ต่างจังหวัด 2-4 วันทำการ
- ค่าจัดส่ง: ส่งฟรีเมื่อมียอดสั่งซื้อครบ 500 บาทขึ้นไป (ต่ำกว่า 500 บาท มีค่าส่ง 45 บาท)
- การรับประกัน: เปลี่ยนคืนสินค้าได้ภายใน 14 วัน หากสินค้าชำรุดจากโรงงาน
- เวลาทำการฝ่ายบริการมนุษย์: จันทร์ - ศุกร์ 09:00 - 18:00 น.

[กฎข้อห้าม (Guardrails)]
- หากลูกค้าขอส่วนลดนอกเหนือจากโปรโมชั่นหน้าเว็บ ให้ตอบว่า "ทางร้านมีโค้ดส่วนลดอัปเดตที่หน้าแรกของเว็บไซต์ครับ"
- หากมีปัญหาซับซ้อน หรือลูกค้าไม่พึงพอใจ ให้แนะนำให้ส่งอีเมลมาที่ support@shophub.com พร้อมขอเลขออเดอร์อย่างสุภาพ`,
    sampleUserMessage: 'สั่งของไปเมื่อวาน ยอด 650 บาท ไม่ทราบว่าจะได้รับของเมื่อไหร่ และมีค่าจัดส่งไหมครับ?',
    sampleAiResponse: 'สวัสดีครับคุณลูกค้า! ขอบพระคุณที่อุดหนุน ShopHub นะครับ 😊\n\n• สำหรับยอดสั่งซื้อ 650 บาท ได้รับสิทธิ์ **"จัดส่งฟรี"** ทันทีครับ\n• สินค้าจะใช้เวลาจัดส่งประมาณ 1 - 2 วันทำการ (สำหรับพื้นที่ กทม.) หรือ 2 - 4 วันทำการ (สำหรับต่างจังหวัด) ครับ\n\nทันทีที่พัสดุถูกส่งออก ทางร้านจะส่ง SMS แจ้งเลขพัสดุ (Tracking No.) ให้ทราบ สามารถแจ้งเลขออเดอร์ให้ผมช่วยเช็กสถานะเพิ่มเติมได้ตลอดเลยนะครับ ยินดีให้บริการครับ!',
    recommendedTemp: 0.2,
  },
  {
    id: 'coding-tutor',
    title: '2. ติวเตอร์เขียนโค้ด (IT & Web Mentor)',
    role: 'ผู้ช่วยสอนทักษะ Web Development & Gemini API',
    category: 'Education / Tech',
    systemInstruction: `คุณคือผู้ช่วยสอน (Code Mentor) ผู้เชี่ยวชาญด้าน Modern Web Development และ Google Gemini API

[บทบาทและน้ำเสียง]
- อธิบายอย่างเข้าใจง่าย ชัดเจน มีเหตุมีผล สไตล์ Senior Engineer อธิบายให้ Junior ฟัง
- ให้ความสำคัญสูงสุดกับความปลอดภัยของระบบ (Security First) และ Clean Code

[ระเบียบวิธีตอบ]
1. อธิบายเชิงแนวคิด (Concept) และเหตุผลที่ต้องทำแบบนั้นสั้นๆ
2. แสดงตัวอย่างโค้ด TypeScript / JavaScript ที่สะอาด มี Type ชัดเจน และมีคอมเมนต์อธิบายบรรทัดสำคัญ
3. เน้นย้ำข้อควรระวังหรือ Best Practice เสมอ เช่น การป้องกันการรั่วไหลของ API Key

[ข้อห้ามเด็ดขาด]
- ห้ามแนะนำให้ใส่ API Key ฝั่ง Client-side / Browser เด็ดขาด
- ห้ามเขียนโค้ดที่ไม่มี Error Handling หรือขาด Type safety`,
    sampleUserMessage: 'ทำไมเราถึงห้ามใส่ Gemini API Key ในโค้ด React ฝั่งหน้าบ้าน (Client-side)?',
    sampleAiResponse: `เรื่องนี้เป็นกฎความปลอดภัยสำคัญอันดับ 1 ของการทำ Web Application ครับ! ⚠️

**เหตุผลสำคัญ:**
1. **โค้ด Frontend ทำงานบน Browser ของผู้ใช้:** ใครก็ตามสามารถกดคลิกขวา > Inspect (F12) แล้วดูแท็บ Sources หรือ Network เพื่อดึง API Key ของคุณไปใช้งานได้ทันที
2. **ความเสียหายที่อาจเกิดขึ้น:** คนที่ขโมย Key ไปสามารถนำไปยิง request มหาศาลจนทำให้เกิดค่าบริการ หรือโควต้าหมดการทำงาน

**สถาปัตยกรรมที่ถูกต้อง:**
• **Frontend (React/Vue/HTML):** มีหน้าที่แสดงผลและรับข้อความ แล้วยิง \`fetch('/api/chat')\` ไปยัง Backend ของคุณ
• **Backend Proxy (Node.js/Express):** เก็บ \`GEMINI_API_KEY\` ไว้ในไฟล์ \`.env\` บนเซิร์ฟเวอร์ แล้วใช้ \`@google/genai\` ยิงไปหา Google อีกทอดหนึ่งครับ!`,
    recommendedTemp: 0.3,
  },
  {
    id: 'qa-knowledge-base',
    title: '3. ผู้ช่วยระเบียบองค์กร (Internal HR FAQ)',
    role: 'ผู้ช่วยตอบคำถามจากฐานข้อมูลระเบียบพนักงาน',
    category: 'Corporate / HR',
    systemInstruction: `คุณคือผู้ช่วยดิจิทัลประจำฝ่ายทรัพยากรบุคคล (HR Assistant) ตอบคำถามพนักงานโดยอิงจาก "ระเบียบปฏิบัติพนักงาน 2026" เท่านั้น

[ขอบเขตข้อมูลที่ตอบได้]
1. วันลาพักร้อน: 10 วัน/ปี (สะสมไปปีถัดไปได้สูงสุด 5 วัน ต้องใช้ภายใน 31 มี.ค.)
2. วันลาป่วย: ลาได้ตามจริงที่มีใบรับรองแพทย์ (เกิน 3 วันติดต่อกันต้องมีใบรับรองแพทย์)
3. สวัสดิการค่ารักษาพยาบาล: วงเงิน 20,000 บาทต่อปีปฏิทิน ยื่นเบิกได้ผ่านระบบ HR Portal
4. เวลาทำงาน: ยืดหยุ่น (Flexible Hours) 08:00 - 17:00 หรือ 09:00 - 18:00 น.

[เงื่อนไขการตอบ]
- ตอบอย่างกระชับ สุภาพ เป็นทางการ มีโครงสร้างแบบหัวข้อชัดเจน
- หากคำถามไม่อยู่ในข้อมูลข้างต้น ห้ามเดาหรือแต่งเรื่อง ให้ตอบว่า:
  "ขออภัยครับ ข้อมูลส่วนนี้ไม่ได้ระบุไว้ในระเบียบที่มี กรุณาติดต่อฝ่ายทรัพยากรบุคคลโดยตรงที่ hr@company.com เพื่อรับคำแนะนำที่ถูกต้องครับ"`,
    sampleUserMessage: 'สิทธิ์ค่ารักษาพยาบาลต่อปีได้เท่าไหร่ และยื่นเบิกทางไหนครับ?',
    sampleAiResponse: 'สวัสดีครับ สำหรับสิทธิ์และขั้นตอนการเบิกค่ารักษาพยาบาลประจำปี มีรายละเอียดดังนี้ครับ:\n\n1. **วงเงินสิทธิ์:** 20,000 บาท ต่อปีปฏิทิน\n2. **เอกสารที่ใช้:** ใบเสร็จรับเงินฉบับจริง และใบรับรองแพทย์จากสถานพยาบาล\n3. **ช่องทางการยื่นเบิก:** สามารถสแกนเอกสารและยื่นผ่านระบบ **HR Portal** ภายใน 30 วันนับจากวันที่เข้ารับการรักษาครับ\n\nหากต้องการสอบถามการอนุมัติ สามารถแจ้งเรื่องทาง HR Portal หรืออีเมล hr@company.com ได้เลยครับ',
    recommendedTemp: 0.1,
  },
];

export const INTEGRATION_CODE_EXAMPLES: IntegrationCodeExample[] = [
  {
    title: '1. Backend Proxy (Express + @google/genai)',
    language: 'typescript',
    filename: 'server/routes/chat.ts',
    description: 'เซิร์ฟเวอร์คนกลางที่เก็บ GEMINI_API_KEY ไว้อย่างปลอดภัยใน .env และส่งคำขอไปยัง Google Gen AI SDK',
    code: `import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// 1. ดึง API Key จาก Environment Variable บนเซิร์ฟเวอร์ (ไม่เปิดเผยสู่ Browser)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// 2. สร้าง Endpoint /api/chat เพื่อรับข้อความจาก Frontend
router.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'กรุณาระบุข้อความที่ถูกต้อง' });
    }

    // 3. เรียกใช้งาน Gemini API พร้อมแนบ System Instructions
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: 'คุณคือผู้ช่วย AI ประจำร้าน ShopHub ตอบคำถามสินค้าอย่างสุภาพและกระชับ',
        temperature: 0.2, // ความแม่นยำสูง
      },
    });

    return res.json({
      success: true,
      reply: response.text ?? 'ขออภัยครับ ไม่สามารถสร้างคำตอบได้ในขณะนี้',
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'เกิดข้อผิดพลาดในการประมวลผลคำตอบ' });
  }
});

export default router;`,
  },
  {
    title: '2. Frontend React Hook (useChatbot)',
    language: 'typescript',
    filename: 'src/hooks/useChatbot.ts',
    description: 'Custom React Hook สำหรับจัดการข้อความ, ส่งคำขอไปยัง Backend Proxy และแสดงผลสถานะ Loading',
    code: `import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'สวัสดีครับ! ยินดีให้บริการ มีอะไรให้ผมช่วยเหลือเกี่ยวกับสินค้าหรือบริการไหมครับ?',
      timestamp: 'ตอนนี้',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ฟังก์ชันส่งข้อความไปยัง Backend Proxy ของเรา
  const sendMessage = useCallback(async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMsg: Message = {
      id: \`user-\${Date.now()}\`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);

    try {
      // เรียกไปยังเซิร์ฟเวอร์ของเราเอง (ปลอดภัย 100%)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) throw new Error('ไม่สามารถติดต่อเซิร์ฟเวอร์ได้');

      const data = await res.json();
      const botMsg: Message = {
        id: \`bot-\${Date.now()}\`,
        sender: 'bot',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      setError(err.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { messages, isLoading, error, sendMessage };
}`,
  },
  {
    title: '3. Web Embed Script (แปะเว็บ HTML / WordPress)',
    language: 'html',
    filename: 'index.html',
    description: 'วิธีนำ Chatbot Widget ไปติดตั้งในเว็บไซต์ทั่วไปเพียงแทรกแท็ก <script> บรรทัดเดียว',
    code: `<!-- 1. คัดลอกแท็กสคริปต์นี้ไปวางก่อนปิดแท็ก </body> ของเว็บไซต์คุณ -->
<script
  src="https://your-domain.com/chatbot-widget.js"
  data-api-endpoint="/api/chat"
  data-bot-name="Shop Assistant"
  data-theme="dark"
  defer>
</script>

<!-- สคริปต์จะสร้างปุ่มแชทลอย (Floating Button) และหน้าต่างสนทนาขึ้นมาอัตโนมัติ -->`,
  },
  {
    title: '4. การตั้งค่า .env และ .gitignore (Security)',
    language: 'bash',
    filename: '.env & .gitignore',
    description: 'วิธีเก็บรักษาความลับของ Gemini API Key ไม่ให้เผลออัปโหลดขึ้น GitHub',
    code: `# ----------------------------------------------------
# ไฟล์ .env (อยู่บนเซิร์ฟเวอร์ Backend ห้ามแชร์ให้ใคร)
# ----------------------------------------------------
PORT=3000
NODE_ENV=production
GEMINI_API_KEY="AIzaSyYourSecretKeyHereFromAIStudio"

# ----------------------------------------------------
# ไฟล์ .gitignore (ต้องมีบรรทัด .env เสมอ!)
# ----------------------------------------------------
node_modules/
dist/
.env
.env.local
*.log`,
  },
];

export const EDUCATIONAL_FAQS = [
  {
    question: 'ทำไมต้องสร้าง Chatbot ด้วย Google AI Studio ก่อนลงโค้ดบนเว็บ?',
    answer: 'เพราะ Google AI Studio ช่วยให้เราทดสอบและปรับแต่ง System Instructions, ลองส่งข้อความจริง และจูนค่าความแม่นยำได้ทันทีในหน้าเว็บ เมื่อได้คำตอบที่พอใจแล้วค่อยกดปุ่ม "Get Code" เพื่อนำโค้ดไปใส่ในระบบจริง ช่วยประหยัดเวลาและไม่ต้องเขียนโค้ดตั้งแต่ศูนย์',
  },
  {
    question: 'System Instructions ต่างจากการพิมพ์คำสั่งปกติอย่างไร?',
    answer: 'System Instructions เป็น "กฎประจำตัวและบทบาทหลัก" ที่จะควบคุม AI ในทุกๆ คำถามของผู้ใช้ เช่น กำหนดว่าให้เป็นพนักงานร้านค้า ตอบเฉพาะเรื่องสินค้า ห้ามตอบเรื่องการเมือง และหากไม่รู้ให้ตอบว่าอย่างไร ต่างจากการพิมพ์คำถามปกติที่เปลี่ยนไปเรื่อยๆ ตามแต่ละข้อความ',
  },
  {
    question: 'ทำไมห้ามใส่ Gemini API Key ในโค้ดหน้าเว็บ (Frontend) เด็ดขาด?',
    answer: 'เนื่องจากโค้ดฝั่งหน้าบ้านถูกดาวน์โหลดมารันบนเครื่องของผู้เข้าชมเว็บ ทุกคนสามารถเปิดดูโค้ดผ่าน Developer Tools (F12) และดึง API Key ของคุณไปใช้ได้ การสร้าง Backend Proxy ช่วยเก็บกุญแจไว้บนเซิร์ฟเวอร์ของเราอย่างปลอดภัย',
  },
  {
    question: 'เลือกโมเดล Gemini ตัวไหนดีที่สุดสำหรับการติดตั้งบนเว็บไซต์?',
    answer: 'แนะนำโมเดลตระกูล Flash (เช่น gemini-2.5-flash) เพราะมีความเร็วในการตอบสนองสูงมาก ผู้ใช้หน้าเว็บไม่ต้องรอนาน และประหยัดทรัพยากร เหมาะสมที่สุดสำหรับการแชทบริการลูกค้าและตอบคำถามทั่วไป',
  },
];

export const PRODUCTION_CHECKLIST = [
  { id: 'sec-1', label: 'API Key ถูกเก็บใน .env บน Backend และเพิ่ม .env ใน .gitignore แล้ว', category: 'Security' },
  { id: 'sec-2', label: 'ไม่มีการเปิดเผย API Key ฝั่งเบราว์เซอร์หรือหน้าบ้าน', category: 'Security' },
  { id: 'prompt-1', label: 'กำหนด System Instructions ครบถ้วน (บทบาท, ขอบเขตข้อมูล, กฎข้อห้าม, ทางออกเมื่อไม่รู้)', category: 'Prompt' },
  { id: 'prompt-2', label: 'ตั้งค่า Temperature ให้ตอบแม่นยำตามข้อมูล (แนะนำ 0.2)', category: 'Prompt' },
  { id: 'prompt-3', label: 'ทดสอบถามคำถามนอกเรื่อง แล้วบอทตอบปฏิเสธอย่างสุภาพตามที่กำหนดไว้', category: 'Prompt' },
  { id: 'ux-1', label: 'ปุ่มแชทและปุ่มส่งข้อความมีขนาดกดง่ายบนมือถือ (ไม่เล็กกว่า 44x44px)', category: 'UX/UI' },
  { id: 'ux-2', label: 'มีข้อความหรือแอนิเมชันแสดงสถานะระหว่างรอ AI ตอบกลับ', category: 'UX/UI' },
  { id: 'ux-3', label: 'มีข้อความแจ้งเตือนที่เข้าใจง่ายหากอินเทอร์เน็ตหลุดหรือไม่สามารถเชื่อมต่อได้', category: 'Reliability' },
  { id: 'deploy-1', label: 'ตั้งค่า Environment Variables บนระบบ Hosting (เช่น Vercel หรือ Cloud Run) เรียบร้อย', category: 'Deployment' },
];
