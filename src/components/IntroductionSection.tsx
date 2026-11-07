import React, { useState } from 'react';
import {
  MessageSquare,
  Cpu,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  Compass,
  Check,
} from 'lucide-react';
import { AIStudioVisualTutorial } from './AIStudioVisualTutorial';

export const IntroductionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'how-ai-answers'>('comparison');

  return (
    <section id="intro" className="py-14 sm:py-20 bg-[#0A0E1A] relative border-t border-slate-800/80">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[450px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <BookOpen className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>บทที่ 1 · พื้นฐานสู่การลงมือปฏิบัติ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            ทำความเข้าใจ Chatbot และเริ่มต้นใช้ Google AI Studio
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            เรียนรู้พื้นฐานที่จำเป็นต่อการสร้างแชทบอท เข้าใจวิธีที่ AI ตอบตามบริบท และเตรียมพร้อมลงมือสร้างจริงบน Google AI Studio
          </p>
        </div>

        {/* 3 Core Practical Framework Cards (Answering: สิ่งนี้คืออะไร / จำเป็นอย่างไร / ต้องทำอะไร) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-12">
          
          {/* Card 1: What is AI Chatbot */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">1. AI Chatbot คืออะไร?</h3>
              
              <div className="space-y-2 text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-purple-300 block">สิ่งนี้คืออะไร:</span>
                  <p className="text-slate-400 leading-relaxed">โปรแกรมตอบคำถามอัตโนมัติที่เข้าใจภาษามนุษย์ตามธรรมชาติ โดยไม่ต้องพึ่งพาคีย์เวิร์ดตายตัว</p>
                </div>
                <div>
                  <span className="font-semibold text-purple-300 block">จำเป็นต่อการสร้างอย่างไร:</span>
                  <p className="text-slate-400 leading-relaxed">ช่วยให้บอทเข้าใจคำถามแม้ผู้ใช้พิมพ์ผิด ใช้คำสแลง หรือถามเรื่องเดียวกันด้วยประโยคที่ต่างกัน</p>
                </div>
                <div className="pt-1 border-t border-slate-800">
                  <span className="font-semibold text-emerald-400 block">ผู้เรียนต้องทำอะไร:</span>
                  <p className="text-slate-300 leading-relaxed">กำหนดบทบาทและข้อมูลของร้านค้าหรือเว็บไซต์ให้บอท ผ่านคำสั่งระบบ (System Instructions)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: How AI generates response */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">2. AI สร้างคำตอบอย่างไร?</h3>
              
              <div className="space-y-2 text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-indigo-300 block">สิ่งนี้คืออะไร:</span>
                  <p className="text-slate-400 leading-relaxed">โมเดลภาษาจะอ่านคำถามของผู้ใช้ร่วมกับบทบาทที่เราตั้งไว้ แล้วคาดการณ์คำตอบที่เหมาะสมตามบริบท</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-300 block">จำเป็นต่อการสร้างอย่างไร:</span>
                  <p className="text-slate-400 leading-relaxed">ทำให้เราควบคุมน้ำเสียง ความสุภาพ และข้อมูลที่ตอบได้ เพียงแค่ปรับแก้ข้อความคำสั่ง</p>
                </div>
                <div className="pt-1 border-t border-slate-800">
                  <span className="font-semibold text-emerald-400 block">ผู้เรียนต้องทำอะไร:</span>
                  <p className="text-slate-300 leading-relaxed">เขียนกฎเหล็กและทางออกเมื่อไม่รู้คำตอบ เพื่อป้องกันไม่ให้บอทคาดเดาข้อมูลที่ไม่แน่ใจ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Google AI Studio Role */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Google AI Studio คืออะไร?</h3>
              
              <div className="space-y-2 text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-emerald-300 block">สิ่งนี้คืออะไร:</span>
                  <p className="text-slate-400 leading-relaxed">พื้นที่บนเว็บของ Google สำหรับทดลองสร้าง Prompt และทดสอบคุยกับ AI จริงก่อนนำไปเขียนโค้ด</p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-300 block">จำเป็นต่อการสร้างอย่างไร:</span>
                  <p className="text-slate-400 leading-relaxed">ทดสอบปรับแต่งคำตอบได้ทันที และมีปุ่ม &quot;Get Code&quot; ให้คัดลอกโค้ดไปเชื่อมต่อเว็บไซต์ได้ทันที</p>
                </div>
                <div className="pt-1 border-t border-slate-800">
                  <span className="font-semibold text-emerald-400 block">ผู้เรียนต้องทำอะไร:</span>
                  <p className="text-slate-300 leading-relaxed">เข้าสู่ระบบที่ aistudio.google.com ด้วยบัญชี Google และสร้าง Chat Prompt ตามคู่มือด้านล่าง</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Practical Comparison Section: Rule-based vs AI Chatbot */}
        <div className="rounded-2xl bg-[#0F162A] border border-slate-800 overflow-hidden shadow-xl mb-12">
          
          <div className="px-4 py-3.5 sm:px-6 sm:py-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                เปรียบเทียบ: แชทบอทแบบเดิม (Rule-based) vs AI Chatbot ยุคใหม่
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">ทำไมการสร้างแชทบอทด้วยโมเดล Gemini จึงตอบสนองลูกค้าได้ดีกว่า</p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg text-xs self-start sm:self-auto border border-slate-800">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  activeTab === 'comparison' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ตารางเปรียบเทียบ
              </button>
              <button
                onClick={() => setActiveTab('how-ai-answers')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  activeTab === 'how-ai-answers' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                วิธีที่ AI ตอบตามบริบท
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {activeTab === 'comparison' ? (
              <div className="overflow-x-auto -mx-1 px-1">
                <table className="w-full text-left text-xs sm:text-sm min-w-[560px]">
                  <thead>
                    <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                      <th className="pb-3 pr-4 w-1/4">หัวข้อ</th>
                      <th className="pb-3 px-4 text-slate-300 w-3/8">แชทบอทแบบเดิม (Rule-Based)</th>
                      <th className="pb-3 pl-4 text-purple-300 w-3/8">AI Chatbot (Google Gemini)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-3.5 pr-4 font-semibold text-white">ความเข้าใจคำถาม</td>
                      <td className="py-3.5 px-4 text-slate-400">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>ต้องพิมพ์คีย์เวิร์ดตรงกับที่ตั้งไว้เป๊ะ หากสะกดผิดระบบจะไม่เข้าใจ</span>
                        </div>
                      </td>
                      <td className="py-3.5 pl-4 text-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>เข้าใจภาษามนุษย์ตามธรรมชาติ แม้พิมพ์ผิดหรือถามด้วยคำอื่น</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-4 font-semibold text-white">คำถามนอกเหนือจากที่เตรียมไว้</td>
                      <td className="py-3.5 px-4 text-slate-400">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>ตอบว่า &quot;ไม่เข้าใจคำสั่ง&quot; ทันทีที่ไม่มีเงื่อนไขในระบบ</span>
                        </div>
                      </td>
                      <td className="py-3.5 pl-4 text-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>ใช้เหตุผลเชื่อมโยง และปฏิเสธอย่างสุภาพตามกฎที่เราตั้งไว้</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-4 font-semibold text-white">การควบคุมและแก้ไข</td>
                      <td className="py-3.5 px-4 text-slate-400">
                        ต้องเขียน Decision Tree แตกกิ่งซับซ้อน แก้ไขยาก
                      </td>
                      <td className="py-3.5 pl-4 text-slate-200">
                        แก้ข้อความ System Instructions บรรทัดเดียว บอทก็เปลี่ยนพฤติกรรมทันที
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-purple-400 font-bold block">1. ผู้ใช้พิมพ์ข้อความ</span>
                  <p className="text-slate-400 leading-relaxed">
                    ผู้ใช้พิมพ์คำถามผ่านหน้าต่างแชทบนเว็บไซต์ เช่น &quot;มีบริการส่งฟรีไหมครับ?&quot;
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 space-y-2">
                  <span className="text-indigo-400 font-bold block">2. ประมวลผลร่วมกับบริบท</span>
                  <p className="text-slate-300 leading-relaxed">
                    โมเดลนำคำถามมารวมกับข้อมูลและกฎที่ตั้งไว้ใน System Instructions เช่น &quot;ส่งฟรีเมื่อซื้อครบ 500 บาท&quot;
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-emerald-400 font-bold block">3. ส่งคำตอบกลับมา</span>
                  <p className="text-slate-400 leading-relaxed">
                    AI สร้างประโยคคำตอบที่สุภาพและส่งกลับมาแสดงผลบนหน้าจอทันที
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5 Steps Quick Workflow */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0F162A] to-[#0A0E1A] border border-slate-800 p-5 sm:p-7 mb-12">
          <div className="mb-6 space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white">
              สรุปภาพรวม 5 ขั้นตอน: จากเริ่มต้นสู่ Chatbot ใช้งานได้จริง
            </h3>
            <p className="text-xs text-slate-400">ภาพรวมกระบวนการสร้าง Chatbot ด้วย Google AI Studio</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">ขั้นที่ 1</span>
              <h4 className="font-bold text-white text-xs mb-1">เข้า AI Studio</h4>
              <p className="text-[11px] text-slate-400">เปิดเว็บไซต์ aistudio.google.com</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-400 block mb-1">ขั้นที่ 2</span>
              <h4 className="font-bold text-white text-xs mb-1">เลือก New App</h4>
              <p className="text-[11px] text-slate-400">คลิก + New app ที่แถบเมนูด้านซ้าย</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400 block mb-1">ขั้นที่ 3</span>
              <h4 className="font-bold text-white text-xs mb-1">ป้อน Prompt</h4>
              <p className="text-[11px] text-slate-400">ระบุบทบาทและความสามารถของบอท</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">ขั้นที่ 4</span>
              <h4 className="font-bold text-white text-xs mb-1">รอ AI สร้าง</h4>
              <p className="text-[11px] text-slate-400">AI ประมวลผลและสร้างแชทบอทให้ทันที</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 col-span-2 sm:col-span-1">
              <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">ขั้นที่ 5</span>
              <h4 className="font-bold text-white text-xs mb-1">ทดลอง & ปรับปรุง</h4>
              <p className="text-[11px] text-slate-300">ทดสอบถามตอบและปรับแก้ตามต้องการ</p>
            </div>
          </div>
        </div>

        {/* 5-Step In-Depth Visual Guide with Real Screenshots */}
        <AIStudioVisualTutorial />

      </div>
    </section>
  );
};
