export function generateSimulatedReply(userMessage: string): {
  text: string;
  codeSnippet?: string;
  suggestions?: string[];
} {
  const query = userMessage.toLowerCase().trim();

  // 1. Google AI Studio Overview & Getting Started
  if (
    query.includes('ai studio') ||
    query.includes('google ai studio') ||
    query.includes('คืออะไร') ||
    query.includes('เริ่มต้น') ||
    query.includes('สมัคร') ||
    query.includes('ลงทะเบียน')
  ) {
    return {
      text: `**Google AI Studio** เป็นแพลตฟอร์มบนเว็บของ Google สำหรับการสร้างและทดลอง AI Chatbot ด้วยโมเดล **Gemini** ได้ทันทีโดยไม่ต้องลงโปรแกรมครับ! 🚀

📌 **5 ขั้นตอนสร้าง Chatbot ด้วย Google AI Studio:**
1. **เข้าใช้งาน Google AI Studio:** เปิดเว็บไซต์ aistudio.google.com ด้วยบัญชี Google
2. **สร้างโปรเจกต์ใหม่:** เลือกเมนู **New App** ที่แถบด้านซ้าย (ใต้หัวข้อ BUILD)
3. **ป้อน Prompt:** พิมพ์อธิบายความต้องการ เช่น บทบาท ข้อมูลสถานศึกษา/ร้านค้า และดีไซน์ที่ต้องการ
4. **รอ AI สร้างผลงาน:** โมเดล Gemini จะประมวลผลคำสั่งและสร้าง Chatbot พร้อม Preview ให้ทันที
5. **ทดลองและปรับปรุง:** ทดลองพิมพ์คุย ตรวจความถูกต้อง และพิมพ์บอก AI ให้ปรับแต่งเพิ่มเติมได้เรื่อยๆ`,
      suggestions: [
        'ขอดูตัวอย่าง Prompt สร้าง Chatbot',
        'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
        'ทำไมต้องมี Backend Proxy?',
      ],
    };
  }

  // 1.5 Special: Prompt for Student Assistant Chatbot
  if (
    query.includes('นักเรียน') ||
    query.includes('นักศึกษา') ||
    query.includes('สถานศึกษา') ||
    query.includes('โรงเรียน') ||
    query.includes('มหาวิทยาลัย')
  ) {
    return {
      text: `เยี่ยมมากครับ! นี่คือ Prompt ตัวอย่างที่สมบูรณ์แบบสำหรับสร้าง **Chatbot ผู้ช่วยสถานศึกษา** ใน Google AI Studio 🎓

✨ **ผลการวิเคราะห์ Prompt:**
• **บทบาท (Role):** ผู้ช่วยตอบคำถามสำหรับนักเรียนและนักศึกษา
• **ขอบเขต (Scope):** ข้อมูลทั่วไปของสถานศึกษา, ให้คำแนะนำด้านการเรียน, และแนะนำบริการต่าง ๆ
• **น้ำเสียง (Tone):** ภาษาไทยสุภาพ เข้าใจง่าย ตอบตรงประเด็น
• **การออกแบบ (UI):** ทันสมัย ใช้งานง่าย และรองรับทั้งโทรศัพท์มือถือและคอมพิวเตอร์ (Responsive)

🚀 **ขั้นตอนต่อไปใน Google AI Studio:**
1. กดเมนู **New App** ที่แถบด้านซ้าย
2. วาง Prompt นี้ลงในช่องกลางจอแล้วกดส่ง
3. รอ AI ประมวลผลและสร้าง Chatbot ให้
4. ทดสอบพิมพ์คำถาม เช่น "วันเปิดเทอมวันไหน?" หรือ "แนะนำทุนการศึกษาหน่อย" ครับ!`,
      suggestions: [
        'ขั้นตอนสร้างใน Google AI Studio',
        'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
        'ขอตัวอย่างโค้ด Express Proxy',
      ],
    };
  }

  // 2. System Instructions & 4 Pillars
  if (
    query.includes('system instruction') ||
    query.includes('system prompt') ||
    query.includes('คำสั่งระบบ') ||
    query.includes('ตัวอย่าง') ||
    query.includes('เสาหลัก')
  ) {
    return {
      text: `**System Instructions** เปรียบเสมือน "สมองส่วนกลางและรัฐธรรมนูญ" ของ AI Chatbot ที่จะถูกประมวลผลก่อนข้อความของผู้ใช้เสมอ เพื่อตีกรอบให้ตอบตรงประเด็นและมีความปลอดภัย\n\n🏛️ **4 เสาหลักของการเขียนคำสั่งระบบที่ดี:**\n1. **Persona & Role:** กำหนดว่าบอทคือใคร ชื่อนามแฝงอะไร มีน้ำเสียงแบบไหน (เช่น สุภาพ เป็นกันเอง มีหางเสียง)\n2. **Scope & Knowledge:** ระบุขอบเขตข้อมูลที่ตอบได้ เช่น ข้อมูลร้านค้า นโยบายจัดส่ง หรือเอกสารอ้างอิง\n3. **Guardrails & Constraints:** กฎข้อห้ามเด็ดขาด เช่น ห้ามตอบเรื่องการเมือง ห้ามเดาข้อมูลที่ไม่แน่ใจ และห้ามเปิดเผย API Key\n4. **Fallback Handling:** กำหนดคำตอบเมื่อผู้ใช้ถามเรื่องที่อยู่นอกเหนือความรู้ เช่น แนะนำช่องทางติดต่อทีมงานซัพพอร์ต`,
      codeSnippet: `คุณคือผู้ช่วย AI ประจำร้าน ShopHub ที่สุภาพและเป็นมิตร
1. ตอบคำถามเรื่องสินค้าและระยะเวลาจัดส่ง (1-3 วันทำการ)
2. หากคำถามอยู่นอกเหนือจากข้อมูล ให้ตอบว่า "ขออภัยครับ กรุณาติดต่อ support@shophub.com"
3. ห้ามคาดเดาข้อมูลหรือตอบเรื่องที่ไม่เกี่ยวข้องโดยเด็ดขาด`,
      suggestions: [
        'Few-Shot Prompting คืออะไร?',
        'แนะนำการตั้งค่า Temperature',
        'วิธีป้องกัน Prompt Injection',
      ],
    };
  }

  // 3. Security, Backend Proxy & Frontend API Key Danger
  if (
    query.includes('api key') ||
    query.includes('frontend') ||
    query.includes('backend') ||
    query.includes('ความปลอดภัย') ||
    query.includes('ซ่อน') ||
    query.includes('proxy')
  ) {
    return {
      text: `⚠️ **กฎเหล็กด้านความปลอดภัยสูงสุด:** ห้ามนำ Gemini API Key ไปใส่ในโค้ดฝั่ง Frontend (React, Vue, HTML หรือ Next.js Client Components) โดยเด็ดขาดครับ!\n\n🔍 **ทำไมถึงอันตราย?**\nเพราะโค้ด Frontend ทั้งหมดถูกส่งไปทำงานบนเว็บเบราว์เซอร์ของผู้ใช้งาน ผู้ใช้ทุกคนสามารถกดคลิกขวา > Inspect (F12) แล้วดูแท็บ Sources หรือ Network เพื่อคัดลอก API Key ของคุณไปใช้งานได้ทันที ซึ่งอาจทำให้โควต้าหมดหรือเกิดค่าบริการก้อนโต!\n\n🛡️ **สถาปัตยกรรม 3 ระดับที่ถูกต้อง:**\n1. **Frontend (Browser):** แสดงผลหน้าต่างแชท และส่ง request ไปยังเซิร์ฟเวอร์ของเรา เช่น \`POST /api/chat\`\n2. **Backend Proxy (Node.js/Express):** เก็บ \`GEMINI_API_KEY\` ไว้ในไฟล์ \`.env\` บนเซิร์ฟเวอร์ และเรียกใช้ \`@google/genai\` SDK\n3. **Google Cloud:** รับคำขอจากเซิร์ฟเวอร์ของเรา ประมวลผลและส่งผลลัพธ์กลับมา`,
      codeSnippet: `// ฝั่งเซิร์ฟเวอร์ server.ts (ปลอดภัย 100%)
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // อ่านจาก .env บนเซิร์ฟเวอร์เท่านั้น
});`,
      suggestions: [
        'ขอตัวอย่างโค้ด Express Proxy',
        'การตั้งค่า .env และ .gitignore',
        'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
      ],
    };
  }

  // 4. Hyperparameters: Temperature, Top-P, Top-K
  if (
    query.includes('temperature') ||
    query.includes('top-p') ||
    query.includes('top-k') ||
    query.includes('ความแม่นยำ') ||
    query.includes('พารามิเตอร์') ||
    query.includes('hyperparameter')
  ) {
    return {
      text: `**Hyperparameters** ใน Google AI Studio ใช้สำหรับปรับแต่งพฤติกรรมการสุ่มคำของโมเดล Gemini:\n\n🌡️ **Temperature (0.0 ถึง 2.0):**\n• **0.0 - 0.2 (แม่นยำสูง / High Determinism):** คำตอบจะอิงข้อเท็จจริง ไม่เพ้อฝัน เหมาะสำหรับ FAQ, ข้อมูลสินค้า, การเงิน และการเขียนโค้ด\n• **0.3 - 0.7 (สมดุล / Balanced):** มีความเป็นธรรมชาติ ลื่นไหล เหมาะกับ Chatbot ให้บริการลูกค้าทั่วไป (แนะนำ 0.2 - 0.4 สำหรับ Chatbot ประจำเว็บ)\n• **0.8 - 1.5+ (สร้างสรรค์ / Creative):** สุ่มคำหลากหลาย เหมาะกับงานแต่งนิทาน เขียนบทความ หรือระดมไอเดีย\n\n🎯 **Top-P (Nucleus Sampling):** เลือกลำดับคำที่มีความน่าจะเป็นสะสมรวมกันถึงเกณฑ์ที่กำหนด (แนะนำ 0.95)\n\n📊 **Top-K:** จำกัดจำนวนคำตัวเลือกที่มีคะแนนสูงสุดที่จะนำมาพิจารณา`,
      suggestions: [
        'System Instructions เขียนยังไง?',
        'โมเดล Flash vs Pro ต่างกันอย่างไร?',
        'Safety Settings มีอะไรบ้าง?',
      ],
    };
  }

  // 5. Model Selection: Gemini 2.5 Flash vs Gemini 1.5 Pro
  if (
    query.includes('flash') ||
    query.includes('pro') ||
    query.includes('โมเดล') ||
    query.includes('เลือกโมเดล') ||
    query.includes('model')
  ) {
    return {
      text: `การเลือกโมเดล Gemini ให้เหมาะกับงาน Chatbot มีหลักการพิจารณาดังนี้ครับ:\n\n⚡ **Gemini 2.5 Flash (แนะนำสำหรับ Chatbot บนเว็บ):**\n• ตอบสนองไวมาก (Ultra-low latency) ผู้ใช้ไม่ต้องรอนาน\n• ประหยัดต้นทุนและโควต้าโทเค็นอย่างมาก\n• รองรับ Context Window ขนาดใหญ่ถึง 1 ล้านโทเค็น\n• มีความฉลาดในการเข้าใจภาษาไทยและบริบททั่วไปได้อย่างดีเยี่ยม\n\n🧠 **Gemini 1.5 Pro (สำหรับงานวิเคราะห์เชิงลึก):**\n• เหมาะกับงานที่ต้องใช้ตรรกะซับซ้อนหลายขั้นตอน (Multi-step Reasoning)\n• การวิเคราะห์เอกสารทางกฎหมาย วิจัย หรือการประมวลผลโค้ดขนาดใหญ่\n• ใช้เวลาประมวลผลนานกว่าและใช้ทรัพยากรมากกว่า`,
      suggestions: [
        'ขั้นตอนสร้างใน Google AI Studio',
        'ทำไมต้องมี Backend Proxy?',
        'Free Tier โควต้ามีเท่าไหร่?',
      ],
    };
  }

  // 6. Few-Shot Prompting
  if (
    query.includes('few-shot') ||
    query.includes('few shot') ||
    query.includes('ตัวอย่างการตอบ') ||
    query.includes('shot')
  ) {
    return {
      text: `**Few-Shot Prompting** คือเทคนิคการสอน AI ด้วยการใส่ตัวอย่างคู่สนทนาจริง (User Turn และ Model Turn) ในหน้าต่างตั้งค่าก่อนเริ่มใช้งาน\n\n✨ **ข้อดีของ Few-Shot:**\n• **ล็อกรูปแบบการตอบ (Output Format):** เช่น สั่งให้ตอบเป็น Bullet point, ตารางสรุป หรือโครงสร้าง JSON\n• **ถ่ายทอดบุคลิกและระดับภาษา:** โมเดลจะเลียนแบบระดับความสุภาพและคำลงท้ายจากตัวอย่างได้อย่างแม่นยำ\n• **ลดอาการตอบเพ้อฝัน (Hallucination):** ทำให้โมเดลเข้าใจขอบเขตและวิธีปฏิเสธที่ถูกต้องเมื่อไม่มีข้อมูล`,
      codeSnippet: `[User]: สอบถามราคาเสื้อเชิ้ตสีขาว
[Model]: เสื้อเชิ้ตสีขาวผ้าคอตตอนราคา 490 บาทครับ มีไซส์ S, M, L, XL พร้อมส่งครับ

[User]: มีส่วนลดไหมครับ
[Model]: ลูกค้าใหม่กรอกโค้ด WELCOME10 ลดทันที 10% เมื่อช้อปครบ 500 บาทครับ`,
      suggestions: [
        'System Instructions เขียนยังไง?',
        'แนะนำการตั้งค่า Temperature',
        'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
      ],
    };
  }

  // 7. Free Tier Quota & Rate Limits
  if (
    query.includes('โควต้า') ||
    query.includes('quota') ||
    query.includes('rate limit') ||
    query.includes('rpm') ||
    query.includes('ฟรี') ||
    query.includes('เสียเงิน')
  ) {
    return {
      text: `Google AI Studio มอบสิทธิ์ **Free Tier** ให้นักพัฒนาทดลองใช้งานได้ฟรีโดยไม่ต้องผูกบัตรเครดิตครับ! 🎉

💡 **การจัดการโควต้าในทางปฏิบัติ:**
• **Free Tier:** เหมาะสำหรับการเรียนรู้ การทดสอบ และการพัฒนาเว็บไซต์แชทบอท
• **HTTP 429 (Resource Exhausted):** หมายความว่ามีการส่งคำขอถี่เกินขีดจำกัดชั่วคราว ให้เขียนโค้ด Backend ทำ Exponential Backoff Retry หน่วงเวลาแล้วลองส่งใหม่
• **การใช้งานจริง (Production):** เมื่อมีผู้ใช้เว็บไซต์จำนวนมาก สามารถเชื่อมต่อ Google Cloud Billing แบบ Pay-as-you-go เพื่อขยายขีดจำกัดการใช้งานได้ครับ`,
      suggestions: [
        'ขอตัวอย่างโค้ด Express Proxy',
        'ขั้นตอนสร้างใน Google AI Studio',
        'สถาปัตยกรรม 3 ระดับ',
      ],
    };
  }

  // 8. Website Integration & Methods
  if (
    query.includes('เชื่อมต่อ') ||
    query.includes('ติดตั้ง') ||
    query.includes('ใส่เว็บ') ||
    query.includes('integrate') ||
    query.includes('widget') ||
    query.includes('วิธีติดตั้ง')
  ) {
    return {
      text: `การนำ AI Chatbot ไปติดตั้งบนหน้าเว็บไซต์สามารถทำได้ 3 วิธีหลักตามสถาปัตยกรรมของเว็บคุณครับ:\n\n1. **React / Next.js Component (แนะนำที่สุดสำหรับเว็บยุคใหม่):**\n• สร้างคอมโพเนนต์ \`<ChatWidget />\` แยกอิสระ\n• ควบคุม UI, Theme และ State ผ่าน React Hooks ได้ 100%\n• สวยงาม ลื่นไหล และปรับแต่ง Responsive ได้ตามต้องการ\n\n2. **Standalone Script Tag Embed (สำหรับ WordPress, HTML, Wix, Shopify):**\n• บิลด์โค้ด Widget เป็นไฟล์ \`widget.js\` แล้วอัปโหลดขึ้น CDN\n• แปะแท็ก \`<script src="..." defer></script>\` ก่อนปิด \`</body>\` ของเว็บไซต์\n\n3. **iFrame Sandbox:**\n• โฮสต์หน้าแชทไว้ที่ URL หนึ่ง แล้วฝังผ่าน \`<iframe src="..."></iframe>\`\n• ป้องกันปัญหา CSS ชนกันระหว่างหน้าเว็บหลักกับแชทบอทได้อย่างสมบูรณ์แบบ`,
      suggestions: [
        'ขอดูโค้ด React Hook',
        'ขอตัวอย่างโค้ด Express Proxy',
        'Checklist ก่อนขึ้น Production',
      ],
    };
  }

  // 9. Deployment to Production (Vercel, Cloud Run)
  if (
    query.includes('deploy') ||
    query.includes('vercel') ||
    query.includes('cloud run') ||
    query.includes('production') ||
    query.includes('ขึ้นเซิร์ฟเวอร์')
  ) {
    return {
      text: `การ Deploy AI Chatbot สู่ระบบจริง (Production) มีแนวทางที่แนะนำดังนี้ครับ:\n\n🌐 **ตัวเลือกแพลตฟอร์มที่แนะนำ:**\n• **Vercel / Netlify:** เหมาะกับโปรเจกต์ React / Next.js โดยสร้าง API Route (\`/api/chat\`) เป็น Serverless Function และตั้งค่า Environment Variables \`GEMINI_API_KEY\` ผ่านหน้า Vercel Dashboard\n• **Google Cloud Run:** เหมาะสำหรับบริการ Full-Stack Node.js/Express หรือ Docker Container ที่ต้องการเสถียรภาพสูงและปรับขนาดอัตโนมัติ (Auto-scaling)\n\n✅ **ข้อควรจำก่อน Go Live:**\n1. ตรวจสอบให้แน่ใจว่าไฟล์ \`.env\` ไม่ได้ถูก push ขึ้น GitHub โดยเด็ดขาด\n2. ตั้งค่า Rate Limiting ใน Backend เพื่อป้องกันการยิงสแปม\n3. ทดสอบการแสดงผลบนหน้าจอมือถือและการพิมพ์ด้วยแป้นพิมพ์เสมือน (Virtual Keyboard)`,
      suggestions: [
        'Checklist ก่อนขึ้น Production',
        'ทำไมต้องมี Backend Proxy?',
        'ขอตัวอย่างโค้ด Express Proxy',
      ],
    };
  }

  // 10. Greetings
  if (
    query.includes('สวัสดี') ||
    query.includes('hello') ||
    query.includes('hi') ||
    query.includes('หวัดดี') ||
    query.includes('เป็นใคร')
  ) {
    return {
      text: `สวัสดีครับ! ยินดีต้อนรับสู่ **CHATBOT LAB Assistant** 🧪🤖\n\nผมคือผู้ช่วยอัจฉริยะจำลองที่ถูกออกแบบมาเพื่อเป็นเพื่อนคู่คิดในการเรียนรู้การสร้าง AI Chatbot ด้วย Google AI Studio และการนำไปเชื่อมต่อกับเว็บไซต์จริงอย่างปลอดภัยครับ!\n\nคุณสามารถสอบถามผมได้ทุกเรื่อง เช่น:\n• การเขียน System Instructions ให้เฉียบคม\n• การเลือกโมเดล Gemini และการจูน Temperature\n• สถาปัตยกรรม Backend Proxy และการซ่อน API Key\n• วิธีการนำ Floating Chatbot ไปติดตั้งบนเว็บ`,
      suggestions: [
        'Google AI Studio คืออะไร?',
        'System Instructions เขียนยังไง?',
        'ทำไมห้ามเปิดเผย API Key ใน Frontend?',
      ],
    };
  }

  // Default response
  return {
    text: `ขอบคุณสำหรับคำถามครับ! เกี่ยวกับหัวข้อ **"${userMessage}"**:\n\nในการพัฒนา AI Chatbot ด้วย Google AI Studio คุณสามารถควบคุมการตอบของโมเดลผ่าน **System Instructions** ร่วมกับการปรับค่า **Temperature** ให้เหมาะสม และส่งคำขอผ่าน **Backend Proxy Server** เพื่อรักษาความปลอดภัยของ Gemini API Key เสมอครับ\n\nคุณสามารถคลิกเลือกหัวข้อแนะนำด้านล่าง หรือพิมพ์คำถามที่สงสัยได้ตลอดเลยครับ!`,
    suggestions: [
      'Google AI Studio คืออะไร?',
      'System Instructions เขียนยังไง?',
      'ทำไมต้องมี Backend Proxy?',
      'แนะนำการตั้งค่า Temperature',
    ],
  };
}
