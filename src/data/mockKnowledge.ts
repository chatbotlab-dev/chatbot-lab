import { PromptTemplate, IntegrationCodeExample } from '../types';

export const SYSTEM_INSTRUCTION_TEMPLATES: PromptTemplate[] = [
  {
    id: 'customer-support',
    title: 'ฝ่ายบริการลูกค้า (Customer Support)',
    role: 'ผู้ช่วยดูแลลูกค้าสำหรับร้านค้าออนไลน์',
    category: 'E-Commerce',
    systemInstruction: `คุณคือผู้ช่วย AI ประจำร้าน ShopHub ที่สุภาพ เป็นมิตร และตอบตรงประเด็น
หน้าที่หลัก:
1. ตอบคำถามเกี่ยวกับสินค้า เงื่อนไขการจัดส่ง (1-3 วันทำการ) และการรับประกันสินค้า (30 วัน)
2. ใช้ภาษาไทยที่สุภาพ มีหางเสียง (ครับ/ค่ะ)
3. หากลูกค้าสอบถามเรื่องนอกเหนือจากข้อมูลสินค้า ให้แนะนำให้ติดต่อทีมงาน support@shophub.com อย่างสุภาพ
4. ห้ามตอบข้อมูลเท็จหรือคาดเดาข้อมูลที่ไม่แน่ใจ`,
    sampleUserMessage: 'สั่งของไปเมื่อวาน จะได้รับของประมาณวันไหนครับ?',
    sampleAiResponse: 'สวัสดีครับ! สำหรับสินค้าที่สั่งซื้อจะใช้เวลาจัดส่งประมาณ 1 - 3 วันทำการครับ โดยจะมี SMS แจ้งเลขพัสดุ (Tracking Number) ส่งไปให้ทันทีที่พัสดุถูกจัดส่ง สามารถนำเลขไปเช็กสถานะการขนส่งได้เลยครับ หากต้องการตรวจสอบเพิ่มเติม แจ้งเลขออเดอร์ให้ผมได้เลยนะครับ ยินดีให้บริการครับ!',
    recommendedTemp: 0.2,
  },
  {
    id: 'coding-tutor',
    title: 'ติวเตอร์เขียนโค้ด (Code Mentor)',
    role: 'ผู้ช่วยสอนทักษะการเขียนโปรแกรมและการเชื่อมต่อ API',
    category: 'Education / Tech',
    systemInstruction: `คุณคือติวเตอร์ผู้เชี่ยวชาญด้าน Web Development และ Gemini API
วิธีการตอบ:
1. อธิบายเชิงแนวคิด (Concept) ให้เข้าใจง่ายก่อนลงโค้ด
2. เขียนโค้ด TypeScript / JavaScript ที่สะอาด มีคอมเมนต์อธิบายแต่ละบรรทัดสำคัญ
3. เน้นย้ำเรื่อง Security เสมอ เช่น การไม่เปิดเผย API Key ใน Frontend
4. ให้คำแนะนำสั้นๆ เกี่ยวกับ Best Practice และข้อควรระวัง`,
    sampleUserMessage: 'ทำไมเราถึงไม่ควรใส่ Gemini API Key ไว้ในโค้ด React ฝั่ง Frontend?',
    sampleAiResponse: 'ข้อนี้เป็นเรื่องสำคัญมากครับ! เพราะโค้ดฝั่ง Frontend (React, Vue, HTML) ทำงานบนเบราว์เซอร์ของผู้ใช้งาน หมายความว่าทุกคนสามารถกด Inspect > Sources หรือเปิด Network Tab เพื่อดึง API Key ของเราไปใช้งานได้ ซึ่งอาจทำให้โควต้าหมดหรือเสียค่าใช้จ่าย\n\nวิธีที่ถูกต้องคือ:\n• สร้าง Backend Proxy (เช่น Express, Next.js API Routes, หรือ Cloud Function)\n• เก็บ API Key ไว้ใน Environment Variable (.env) บนเซิร์ฟเวอร์\n• ให้ Frontend ยิง Request มาที่ Backend ของเราเท่านั้นครับ',
    recommendedTemp: 0.3,
  },
  {
    id: 'qa-knowledge-base',
    title: 'ผู้ช่วยตอบคำถามเอกสาร (Internal Q&A)',
    role: 'ผู้ช่วยสรุปและตอบคำถามจากฐานข้อมูลเอกสาร',
    category: 'Business / FAQ',
    systemInstruction: `คุณคือผู้ช่วยตอบคำถามประจำองค์กร ตอบคำถามโดยอิงจากระเบียบบริษัทเท่านั้น
กฎสำคัญ:
1. ตอบอย่างกระชับ ชัดเจน และมีโครงสร้างเป็นข้อๆ
2. หากคำถามไม่มีอยู่ในข้อมูลที่ระบุ ให้ตอบว่า "ขออภัยครับ ข้อมูลส่วนนี้อยู่นอกเหนือเอกสารระเบียบที่มี กรุณาติดต่อฝ่ายทรัพยากรบุคคล (HR)"
3. ห้ามแต่งเรื่องหรือคาดเดานโยบายเองเด็ดขาด`,
    sampleUserMessage: 'สิทธิ์การลาพักร้อนประจำปีสามารถสะสมไปปีหน้าได้ไหม?',
    sampleAiResponse: 'ตามระเบียบพนักงาน สิทธิ์การลาพักร้อนประจำปีมีดังนี้ครับ:\n1. พนักงานมีสิทธิ์ลาพักร้อน 10 วันทำการต่อปี (หลังผ่านการทดลองงาน)\n2. สามารถสะสมวันลาพักร้อนที่เหลือไปใช้ในปีถัดไปได้สูงสุด 5 วันทำการ\n3. วันลาสะสมต้องใช้ให้หมดภายในไตรมาสแรก (31 มีนาคม) ของปีถัดไปครับ\n\nหากมีข้อสงสัยเพิ่มเติม สามารถปรึกษาฝ่าย HR ได้โดยตรงครับ',
    recommendedTemp: 0.1,
  },
];

export const INTEGRATION_CODE_EXAMPLES: IntegrationCodeExample[] = [
  {
    title: 'Frontend (React Hook / Fetch)',
    language: 'typescript',
    filename: 'src/hooks/useChatbot.ts',
    description: 'ตัวอย่างโค้ดฝั่งหน้าบ้านที่เรียกขอข้อมูลไปยัง Backend Proxy ของเราโดยตรง ไม่เปิดเผย API Key',
    code: `// ✅ ฝั่ง Frontend: ยิงไปที่ Backend ของเราเอง ไม่ใส่ API Key ตรงนี้
export async function sendMessageToChatbot(userMessage: string) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userMessage }),
  });

  if (!response.ok) {
    throw new Error('เกิดข้อผิดพลาดในการติดต่อเซิร์ฟเวอร์');
  }

  const data = await response.json();
  return data.reply; // ข้อความตอบกลับจาก AI
}`,
  },
  {
    title: 'Backend Proxy (Node.js & Express)',
    language: 'typescript',
    filename: 'server/routes/chat.ts',
    description: 'ตัวอย่างเซิร์ฟเวอร์ที่เก็บ GEMINI_API_KEY ไว้ในระบบ และส่งคำขอไปยัง Google Gen AI SDK',
    code: `import express from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();

// เก็บ API Key ใน Environment Variable บนฝั่งเซิร์ฟเวอร์เท่านั้น
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: 'คุณคือผู้ช่วยของ CHATBOT LAB ตอบอย่างกระชับและสุภาพ',
        temperature: 0.3,
      },
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

export default router;`,
  },
  {
    title: 'Web Embed Script (นำไปแปะเว็บใดก็ได้)',
    language: 'html',
    filename: 'index.html (ตัวอย่างการติดตั้ง)',
    description: 'วิธีนำ Chatbot Widget ไปติดตั้งในหน้าเว็บทั่วไป เพียงแทรกแท็ก <script>',
    code: `<!-- วางโค้ดนี้ก่อนปิดแท็ก </body> ของเว็บไซต์คุณ -->
<script 
  src="https://your-domain.com/chatbot-widget.js" 
  data-theme="dark"
  data-position="bottom-right"
  defer>
</script>

<!-- Chatbot Widget จะแสดงผลเป็นปุ่มลอยขึ้นมาอัตโนมัติ -->`,
  },
];

export const EDUCATIONAL_FAQS = [
  {
    question: 'Google AI Studio ต่างจากการใช้ ChatGPT หรือ Web Chat ทั่วไปอย่างไร?',
    answer: 'Google AI Studio เป็น Developer Platform สำหรับทดสอบและสร้าง Prompt ต้นแบบโดยตรง มีฟีเจอร์ปรับตั้งค่า System Instructions, Model Hyperparameters (เช่น Temperature, Top-P, Safety Filters) และสามารถกดปุ่ม "Get Code" เพื่อนำโค้ดไปใช้งานในภาษาต่างๆ ได้ทันที',
  },
  {
    question: 'System Instructions สำคัญอย่างไรกับการสร้าง Chatbot?',
    answer: 'System Instructions เปรียบเสมือน "สมองและกฎเหล็ก" ของ AI ซึ่งจะควบคุมบทบาท (Persona), น้ำเสียง, กฎเกณฑ์สิ่งที่ตอบได้และห้ามตอบ รวมทั้งแนวทางการรับมือคำถามกำกวม ช่วยป้องกันการตอบนอกเรื่องหรือ Hallucination ได้อย่างมีประสิทธิภาพ',
  },
  {
    question: 'ทำไมสถาปัตยกรรมที่ถูกต้องถึงต้องมี Backend Proxy?',
    answer: 'เนื่องจาก Frontend ทำงานบนเบราว์เซอร์ฝั่งผู้ใช้ โค้ดทั้งหมดจะถูกดาวน์โหลดลงเครื่อง client หากใส่ API Key ไว้ใน frontend ผู้ใช้ทุกคนจะสามารถ inspect ดู key ได้ทันที การมี Backend Proxy จะช่วยเก็บความลับของ Key, ตรวจสอบสิทธิ์ (Auth), และจำกัดอัตราการเรียกใช้งาน (Rate Limiting)',
  },
  {
    question: 'โมเดล Gemini 2.5 Flash เหมาะกับ Chatbot อย่างไร?',
    answer: 'Gemini 2.5 Flash มีความเร็วในการตอบสนองสูง (Ultra-low latency), ค่าใช้จ่ายคุ้มค่ามาก, รองรับ Context Window ขนาดใหญ่ และมีความสามารถด้าน Reasoning ที่ยอดเยี่ยม เหมาะสำหรับงานสนทนาแบบ Real-time บนเว็บไซต์',
  },
];
