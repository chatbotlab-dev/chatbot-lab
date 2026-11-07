import React, { useState } from 'react';
import { ArrowRight, Bot, Sparkles, Terminal, Cpu, ShieldCheck, Zap, Play } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [activeTab, setActiveTab] = useState<'system' | 'response'>('system');

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial gradients for subtle tech glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[250px] sm:h-[350px] bg-purple-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/10 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-medium text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>ศูนย์การเรียนรู้สร้าง AI Chatbot ยุคใหม่</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
                CHATBOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">LAB</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-purple-200/90 tracking-wide">
                Learn, Build, Integrate
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              เรียนรู้วิธีสร้าง AI Chatbot อัจฉริยะด้วย <strong className="text-white font-medium">Google AI Studio</strong> ตั้งแต่การออกแบบ System Instructions, การปรับตั้งค่าพารามิเตอร์ จนถึงการเขียนโค้ดติดตั้งเข้ากับเว็บไซต์จริงอย่างปลอดภัย
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#intro"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95 min-h-[44px]"
              >
                <span>เริ่มเรียนรู้เนื้อหา</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenChat}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-purple-800/40 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-md shadow-black/40 min-h-[44px]"
              >
                <Bot className="w-4 h-4 text-purple-400" />
                <span>ทดลองคุยกับ Chatbot</span>
              </button>
            </div>

            {/* Key Value Highlights - 1 col on mobile, 3 cols on tablet/pc */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
                <div className="flex items-center gap-1.5 text-purple-400 mb-1">
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold">Gemini Models</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">เข้าใจการทำงานของโมเดลตระกูล Flash & Pro</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
                <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold">Prompt Control</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">ออกแบบ System Instructions ให้ตอบตรงเป้า</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold">Secure Architecture</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">วิธีซ่อน API Key และติดตั้งด้วย Proxy</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Preview */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0E1528] border border-purple-500/25 p-4 sm:p-5 shadow-2xl shadow-purple-950/40">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-1.5 hidden sm:inline truncate max-w-[140px]">google-ai-studio.config</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-0.5 bg-slate-900 rounded-lg text-xs font-medium shrink-0">
                  <button
                    onClick={() => setActiveTab('system')}
                    className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs rounded-md transition-colors ${
                      activeTab === 'system'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    System Prompt
                  </button>
                  <button
                    onClick={() => setActiveTab('response')}
                    className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs rounded-md transition-colors ${
                      activeTab === 'response'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Output Result
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="pt-3.5 min-h-[250px] sm:min-h-[280px] font-mono text-xs text-slate-300 space-y-3">
                {activeTab === 'system' ? (
                  <div className="space-y-3 animate-in fade-in duration-150">
                    <div className="text-slate-500 text-[11px]">
                      {'// 1. กำหนด System Instructions (สมองของบอท)'}
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 leading-relaxed font-sans text-xs">
                      <span className="text-purple-400 font-mono font-semibold">ROLE:</span> &quot;คุณคือผู้ช่วย AI ประจำเว็บไซต์ CHATBOT LAB&quot;
                      <br />
                      <span className="text-purple-400 font-mono font-semibold">TONE:</span> สุภาพ เป็นกันเอง และอธิบายเป็นขั้นเป็นตอน
                      <br />
                      <span className="text-purple-400 font-mono font-semibold">RULES:</span> ป้องกันการตอบนอกเรื่อง ปลอดภัย และห้ามเปิดเผย API Key
                    </div>

                    <div className="text-slate-500 text-[11px]">
                      {'// 2. ตั้งค่า Hyperparameters ใน Google AI Studio'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400 font-mono text-xs">
                      <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                        <span className="text-indigo-300">Model:</span> gemini-2.5-flash
                      </div>
                      <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                        <span className="text-indigo-300">Temperature:</span> 0.2 (แม่นยำ)
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 animate-in fade-in duration-150">
                    <div className="flex items-start gap-2 text-slate-400">
                      <span className="text-purple-400 font-bold shrink-0">User:</span>
                      <span className="bg-slate-900 px-2 py-1 rounded text-slate-200 text-xs">
                        อยากทำ Chatbot ติดบนเว็บ ต้องเริ่มยังไง?
                      </span>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-slate-200 leading-relaxed font-sans text-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-purple-300 font-medium">
                        <Bot className="w-3.5 h-3.5 shrink-0" />
                        <span>CHATBOT LAB AI:</span>
                      </div>
                      <p>
                        เริ่มต้นได้ใน 3 ขั้นตอนหลักครับ:
                      </p>
                      <ol className="list-decimal pl-4 space-y-1 text-slate-300">
                        <li>ทดลอง Prompt และตั้งค่าบทบาทใน Google AI Studio</li>
                        <li>สร้าง Backend Proxy เพื่อรับคำขอและเก็บ Gemini API Key</li>
                        <li>สร้างปุ่มแชทลอย (Widget) บนหน้าเว็บเพื่อเชื่อมต่อกับ Backend</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Demo Footer */}
              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-sans">
                <span className="text-[11px] sm:text-xs">พร้อมทดลองของจริง?</span>
                <button
                  onClick={onOpenChat}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 transition-colors text-[11px] sm:text-xs min-h-[36px]"
                >
                  <Play className="w-3 h-3 fill-current shrink-0" />
                  <span>เปิด Widget แชทสด</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 5-Chapter Masterclass Curriculum Ribbon */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider">
              CURRICULUM ROADMAP · แผนผังหลักสูตร 5 บทเรียนสู่มืออาชีพ
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              ตั้งแต่เริ่มต้นจนถึงเผยแพร่ออนไลน์จริง
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 text-left">
            <a
              href="#intro"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/40 transition-all group block"
            >
              <span className="text-[10px] font-mono font-bold text-purple-400 block mb-0.5">บทที่ 1</span>
              <h5 className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                ทำความรู้จัก AI Studio
              </h5>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">วิวัฒนาการ LLM & ทัวร์ UI</p>
            </a>

            <a
              href="#tutorial"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/40 transition-all group block"
            >
              <span className="text-[10px] font-mono font-bold text-indigo-400 block mb-0.5">บทที่ 2</span>
              <h5 className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                Prompt & Instructions
              </h5>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">4 เสาหลัก & Few-Shot</p>
            </a>

            <a
              href="#tutorial"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/40 transition-all group block"
            >
              <span className="text-[10px] font-mono font-bold text-purple-400 block mb-0.5">บทที่ 3</span>
              <h5 className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                Parameters & API Key
              </h5>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">Temperature & Quota ฟรี</p>
            </a>

            <a
              href="#integration"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/40 transition-all group block"
            >
              <span className="text-[10px] font-mono font-bold text-indigo-400 block mb-0.5">บทที่ 4</span>
              <h5 className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                สถาปัตยกรรมความปลอดภัย
              </h5>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">3-Tier & Express Proxy</p>
            </a>

            <a
              href="#integration"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 transition-all group block col-span-2 sm:col-span-1"
            >
              <span className="text-[10px] font-mono font-bold text-emerald-400 block mb-0.5">บทที่ 5</span>
              <h5 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                ติดตั้ง Widget & Deploy
              </h5>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">3 วิธีติดตั้ง & Go Live</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
