export function generateSimulatedReply(userMessage: string): {
  text: string;
  codeSnippet?: string;
  suggestions?: string[];
} {
  const query = userMessage.toLowerCase().trim();

  if (
    query.includes('ai studio') ||
    query.includes('google ai studio') ||
    query.includes('คืออะไร') ||
    query.includes('เริ่มต้น')
  ) {
    return {
      text: `**Google AI Studio** เป็นเครื่องมือบนเว็บสำหรับนักพัฒนา (Developer Web IDE) ที่ Google พัฒนาขึ้นเพื่อให้เราสามารถทดลองใช้งานและสร้าง Prototype ของโมเดลตระกูล **Gemini** ได้อย่างสะดวกรวดเร็วครับ\n\nจุดเด่นสำคัญ:\n• มี UI ให้ปรับแต่ง System Instructions, Temperature และ Safety Settings\n• สามารถทดสอบ Chat Prompt และใส่ตัวอย่าง Few-shot Examples\n• มีปุ่ม "Get Code" เพื่อแปลงการตั้งค่าทั้งหมดเป็นโค้ด JavaScript/TypeScript, Python หรือ cURL นำไปใช้งานต่อได้ทันที\n• มี Free Tier ให้ทดลองใช้งานได้อย่างเต็มที่ครับ`,
      suggestions: [
        'System Instructions เขียนยังไง?',
        'ทำไมต้องมี Backend Proxy?',
        'แนะนำการตั้งค่า Temperature',
      ],
    };
  }

  if (
    query.includes('system instruction') ||
    query.includes('system prompt') ||
    query.includes('คำสั่งระบบ') ||
    query.includes('ตัวอย่าง')
  ) {
    return {
      text: `**System Instructions** คือข้อกำหนดบทบาทและแนวทางการตอบของ AI Chatbot เปรียบเสมือน "กฎประจำตัว" ที่บอทต้องปฏิบัติตามเสมอ\n\nโครงสร้างที่ดีควรมี 4 องค์ประกอบ:\n1. **Role & Persona**: กำหนดว่าบอทคือใคร มีน้ำเสียงอย่างไร\n2. **Scope & Knowledge**: กำหนดขอบเขตข้อมูลที่ตอบได้\n3. **Guardrails**: กฎข้อห้าม เช่น ห้ามตอบเรื่องการเมือง หรือห้ามคาดเดาข้อมูลที่ไม่แน่ใจ\n4. **Fallback Handling**: เมื่อไม่รู้คำตอบ ให้ตอบอย่างไรอย่างสุภาพ`,
      codeSnippet: `คุณคือผู้ช่วยอัจฉริยะของ CHATBOT LAB
- ตอบคำถามเป็นภาษาไทยอย่างสุภาพ เป็นกันเอง และตรงประเด็น
- เชี่ยวชาญเรื่อง Gemini API, Prompt Engineering และ Web Integration
- หากผู้ใช้ถามเรื่องที่ไม่เกี่ยวข้อง ให้ตอบปฏิเสธอย่างสุภาพแล้วดึงกลับมาที่หัวข้อ AI`,
      suggestions: [
        'แนะนำการตั้งค่า Temperature',
        'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
      ],
    };
  }

  if (
    query.includes('api key') ||
    query.includes('frontend') ||
    query.includes('backend') ||
    query.includes('ความปลอดภัย') ||
    query.includes('ซ่อน')
  ) {
    return {
      text: `⚠️ **ข้อควรระวังสำคัญที่สุด**: ห้ามนำ Gemini API Key ไปใส่ในโค้ดฝั่ง Frontend (React, Vue, HTML) เด็ดขาดครับ!\n\n**เหตุผล:** โค้ด Frontend ทั้งหมดถูกส่งไปประมวลผลที่ Browser ของผู้ใช้งาน ใครๆ ก็สามารถกดเปิด Developer Tools (F12) แล้วดู Network Tab เพื่อขโมย API Key ของเราได้\n\n**แนวทางที่ถูกต้อง:**\n1. สร้าง Backend Server (เช่น Node.js / Express หรือ Serverless Functions)\n2. เก็บ API Key ไว้ในตัวแปรระบบ (.env)\n3. ให้ Frontend ส่งข้อความมาที่ Backend ของเรา แล้ว Backend จะเรียก Gemini API อีกทอดหนึ่ง`,
      suggestions: [
        'ขอตัวอย่างโค้ด Backend Proxy',
        'Gemini 2.5 Flash ดีอย่างไร?',
      ],
    };
  }

  if (
    query.includes('temperature') ||
    query.includes('ความแม่นยำ') ||
    query.includes('ตั้งค่า') ||
    query.includes('hyperparameter')
  ) {
    return {
      text: `**Temperature** เป็นค่าที่ควบคุมระดับ "ความสุ่มและความคิดสร้างสรรค์" ของคำตอบ (มีค่าตั้งแต่ 0.0 ถึง 2.0):\n\n• **0.0 - 0.2 (Low Temp)**: คำตอบจะเน้นความถูกต้อง แม่นยำ ไม่เพ้อฝัน เหมาะกับ FAQ, ตอบข้อมูลสินค้า, หรือตรวจสอบโค้ด\n• **0.3 - 0.7 (Balanced)**: มีความเป็นธรรมชาติ ลื่นไหล เหมาะกับการสนทนาทั่วไปและ Chatbot ให้บริการลูกค้า\n• **0.8 - 1.5+ (High Temp)**: คำตอบจะมีความคิดสร้างสรรค์สูง เหมาะกับงานเขียนบทความ แต่งนิทาน หรือระดมความคิด (Brainstorming)`,
      suggestions: [
        'โมเดล Gemini ตัวไหนแนะนำ?',
        'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
      ],
    };
  }

  if (
    query.includes('เชื่อมต่อ') ||
    query.includes('ติดตั้ง') ||
    query.includes('ใส่เว็บ') ||
    query.includes('integrate') ||
    query.includes('widget')
  ) {
    return {
      text: `การนำ Chatbot ไปใส่บนเว็บไซต์ทำได้ 3 วิธีหลักตามความเหมาะสมครับ:\n\n1. **React / Vue Component**: สร้าง UI ปุ่มลอยและกล่องแชทด้วยตัวเราเอง (เหมือน Widget ที่คุณกำลังทดลองอยู่นี้!) ยืดหยุ่นสูงสุด ปรับแต่งธีมได้ตามใจชอบ\n2. **Embed Script Tag**: คอมไพล์ Widget เป็นไฟล์ .js แล้วให้ผู้ใช้ใส่ <script src="..."> บรรทัดเดียวก่อนปิด </body>\n3. **iFrame Embed**: โฮสต์หน้าต่างแชทไว้ที่ URL หนึ่ง แล้วฝัง iFrame บนหน้าเว็บ สะดวกและแยก sandbox ชัดเจน`,
      suggestions: [
        'ขอดูตัวอย่างโค้ด Frontend',
        'System Instructions เขียนยังไง?',
      ],
    };
  }

  if (
    query.includes('สวัสดี') ||
    query.includes('hello') ||
    query.includes('hi') ||
    query.includes('หวัดดี')
  ) {
    return {
      text: `สวัสดีครับ! ยินดีต้อนรับสู่ **CHATBOT LAB** 🧪🤖\n\nผมคือผู้ช่วยจำลองสำหรับการเรียนรู้ คุณสามารถสอบถามผมเกี่ยวกับการสร้าง AI Chatbot ด้วย Google AI Studio, การเขียน System Instructions, หรือวิธีการนำแชทบอทไปติดตั้งบนหน้าเว็บไซต์ได้เลยครับ!`,
      suggestions: [
        'Google AI Studio คืออะไร?',
        'System Instructions เขียนยังไง?',
        'ทำไมห้ามเปิดเผย API Key ใน Frontend?',
      ],
    };
  }

  // Default response
  return {
    text: `ขอบคุณสำหรับคำถามครับ! เกี่ยวกับเรื่อง **"${userMessage}"** ในการพัฒนา AI Chatbot ด้วย Google AI Studio:\n\nคุณสามารถใช้ System Instructions เพื่อกำหนดทิศทางการตอบอย่างมีประสิทธิภาพ และเชื่อมต่อผ่าน Backend Proxy เพื่อส่งข้อมูลกลับมายังเว็บไซต์อย่างปลอดภัยครับ\n\nลองเลือกดูหัวข้อที่น่าสนใจด้านล่าง หรือพิมพ์คำถามเพิ่มเติมได้เลยครับ!`,
    suggestions: [
      'Google AI Studio คืออะไร?',
      'System Instructions เขียนยังไง?',
      'ทำไมต้องมี Backend Proxy?',
      'แนะนำการตั้งค่า Temperature',
    ],
  };
}
