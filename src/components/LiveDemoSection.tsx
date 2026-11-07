import React from 'react';
import { Bot, Sparkles, MessageSquarePlus, Zap, ArrowUpRight, HelpCircle } from 'lucide-react';
import { EDUCATIONAL_FAQS } from '../data/mockKnowledge';

interface LiveDemoSectionProps {
  onOpenChatWithPrompt: (promptText: string) => void;
}

export const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({
  onOpenChatWithPrompt,
}) => {
  const suggestedPrompts = [
    {
      title: 'Google AI Studio คืออะไร?',
      category: 'Concept',
      prompt: 'Google AI Studio คืออะไร และเหมาะกับการเริ่มต้นสร้าง Chatbot อย่างไร?',
    },
    {
      title: 'ตัวอย่าง System Instructions',
      category: 'Prompt',
      prompt: 'ขอตัวอย่างการเขียน System Instructions สำหรับ Chatbot บนเว็บหน่อยครับ',
    },
    {
      title: 'ทำไมต้องซ่อน API Key?',
      category: 'Security',
      prompt: 'ทำไมเราถึงห้ามใส่ Gemini API Key ในโค้ด Frontend เด็ดขาด?',
    },
    {
      title: 'การตั้งค่า Temperature',
      category: 'Settings',
      prompt: 'ควรตั้งค่า Temperature เท่าไหร่สำหรับแชทบอทตอบคำถามลูกค้า?',
    },
  ];

  return (
    <section id="demo" className="py-14 sm:py-20 bg-[#090D17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            04. ห้องทดลองสนทนาจริง
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ทดลองคุยกับ Chatbot Lab Assistant
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            สัมผัสประสบการณ์จริงของ Chatbot Widget ที่ติดตั้งอยู่บริเวณมุมขวาล่างของหน้าจอ พร้อมทดสอบคำถามด้าน AI Studio และ Web Integration
          </p>
        </div>

        {/* Demo Experience Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-[#121933] to-[#0D1224] border border-purple-500/30 p-5 sm:p-8 mb-12 sm:mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs font-medium text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>จำลองการทำงานเหมือนบนเว็บไซต์จริง</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                คลิกปุ่มสีม่วงมุมขวาล่าง เพื่อเปิดหน้าต่างสนทนา
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                ระบบจำลองการทำงานของ AI Assistant ที่ได้รับการฝึกอบรม System Instructions เพื่อให้คำแนะนำเรื่องการพัฒนาแชทบอท คุณสามารถพิมพ์คำถามด้วยภาษาไทยได้อย่างอิสระ หรือคลิกการ์ดคำถามแนะนำด้านล่าง
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenChatWithPrompt('สวัสดีครับ แนะนำตัวหน่อย')}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Bot className="w-4 h-4 shrink-0" />
                <span>เปิดหน้าต่างแชททันที</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Launch Cards - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-slate-300">
            <MessageSquarePlus className="w-4 h-4 text-purple-400 shrink-0" />
            <span>คำถามตัวอย่างที่สามารถคลิกเพื่อส่งได้ทันที:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {suggestedPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onOpenChatWithPrompt(item.prompt)}
                className="text-left p-4 sm:p-5 rounded-xl bg-[#0F162A] border border-slate-800 hover:border-purple-500/50 hover:bg-[#131D36] transition-all group flex flex-col justify-between space-y-3 min-h-[110px]"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-purple-400 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40 inline-block">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200 pt-2 border-t border-slate-800/60">
                  <span className="text-[11px]">ส่งคำถามนี้</span>
                  <Zap className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Frequently Asked Knowledge Questions */}
        <div className="rounded-2xl bg-[#0F162A] p-4 sm:p-6 lg:p-8 border border-slate-800">
          <div className="flex items-center gap-2 text-purple-400 mb-4 sm:mb-6">
            <HelpCircle className="w-5 h-5 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-white">คำถามที่พบบ่อยในการพัฒนา Chatbot (FAQ)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {EDUCATIONAL_FAQS.map((faq, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5 sm:space-y-2">
                <h4 className="text-xs sm:text-sm font-semibold text-purple-200">
                  Q: {faq.question}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
