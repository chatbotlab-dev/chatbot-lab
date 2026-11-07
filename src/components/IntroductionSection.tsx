import React, { useState } from 'react';
import { MessageSquare, Cpu, CheckCircle2, XCircle, Clock, TrendingUp, Users, Wrench } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const [activeCompareTab, setActiveCompareTab] = useState<'comparison' | 'workflow'>('comparison');

  return (
    <section id="intro" className="py-14 sm:py-20 bg-[#0A0E1A] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            01. พื้นฐานและแนวคิด
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ทำความเข้าใจ AI Chatbot ยุคใหม่
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            ก้าวข้ามจากแชทบอทแบบเดิมที่ตอบได้เฉพาะคำสั่งตายตัว สู่ Generative AI Chatbot ที่เข้าใจภาษามนุษย์อย่างเป็นธรรมชาติและมีเหตุผล
          </p>
        </div>

        {/* 3 Main Explanatory Cards - 1 col mobile, 3 cols tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: What is a Chatbot */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-7 border border-slate-800 hover:border-purple-500/40 transition-colors space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Chatbot คืออะไร?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              โปรแกรมคอมพิวเตอร์ที่ถูกพัฒนาขึ้นเพื่อจำลองการสนทนากับมนุษย์ โดยปัจจุบันได้พัฒนาจากโปรแกรมตอบคำถามแบบจับคู่คีย์เวิร์ด มาเป็น <strong className="text-purple-300 font-medium">Large Language Models (LLM)</strong> เช่น โมเดล Gemini ที่สามารถคิด วิเคราะห์ และสร้างคำตอบใหม่ได้อย่างยืดหยุ่น
            </p>
          </div>

          {/* Card 2: How it works */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-7 border border-slate-800 hover:border-purple-500/40 transition-colors space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">ทำงานอย่างไร?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              เมื่อผู้ใช้ส่งข้อความ ระบบจะทำการแปลงข้อความเป็นตัวเลข (Tokens & Embeddings) จากนั้นโมเดล AI จะประมวลผลร่วมกับ <strong className="text-indigo-300 font-medium">System Instructions</strong> ที่เรากำหนดไว้ เพื่อคาดการณ์และสร้างคำตอบที่ถูกต้องตามบริบทและน้ำเสียงที่ต้องการ
            </p>
          </div>

          {/* Card 3: Key Benefits */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-7 border border-slate-800 hover:border-purple-500/40 transition-colors space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">ประโยชน์ที่ได้รับ</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ช่วยตอบคำถามลูกค้าตลอด 24 ชั่วโมง ลดภาระงานซ้ำซ้อนของทีมงาน เพิ่มอัตราการเปลี่ยนเป็นยอดขาย (Conversion Rate) และสร้างประสบการณ์ที่เป็นมิตรต่อผู้เข้าชมเว็บไซต์ด้วยข้อมูลที่ถูกต้องแม่นยำ
            </p>
          </div>

        </div>

        {/* Interactive Comparison & Workflow Tabs */}
        <div className="rounded-2xl bg-[#0F162A] border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-4 py-3.5 sm:px-6 sm:py-4 bg-slate-900/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">เปรียบเทียบสถาปัตยกรรมและขั้นตอนการทำงาน</h4>
              <p className="text-xs text-slate-400">เจาะลึกความแตกต่างระหว่าง Rule-based กับ AI Chatbot</p>
            </div>
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => setActiveCompareTab('comparison')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeCompareTab === 'comparison'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ตารางเปรียบเทียบ
              </button>
              <button
                onClick={() => setActiveCompareTab('workflow')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeCompareTab === 'workflow'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ลำดับขั้นตอน (Workflow)
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {activeCompareTab === 'comparison' ? (
              <div>
                <div className="md:hidden text-[11px] text-purple-400 mb-2 font-mono flex items-center justify-between">
                  <span>← เลื่อนในแนวนอนเพื่อดูตารางเปรียบเทียบ →</span>
                </div>
                <div className="overflow-x-auto -mx-1 px-1">
                  <table className="w-full text-left text-xs sm:text-sm min-w-[560px]">
                    <thead>
                      <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                        <th className="pb-3 pr-4 w-1/4">คุณลักษณะ</th>
                        <th className="pb-3 px-4 text-slate-300 w-3/8">แชทบอทแบบเดิม (Rule-Based)</th>
                        <th className="pb-3 pl-4 text-purple-300 w-3/8">AI Chatbot (Google Gemini)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-3.5 pr-4 font-medium text-white">ความเข้าใจภาษา</td>
                        <td className="py-3.5 px-4 text-slate-400">
                          <div className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>ต้องพิมพ์คีย์เวิร์ดตรงกับที่ตั้งไว้เป๊ะๆ</span>
                          </div>
                        </td>
                        <td className="py-3.5 pl-4 text-slate-200">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>เข้าใจภาษามนุษย์ คำสแลง หรือคำถามกำกวมได้</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 font-medium text-white">การรับมือสถานการณ์ใหม่</td>
                        <td className="py-3.5 px-4 text-slate-400">
                          <div className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>ตอบว่า &quot;ไม่เข้าใจคำสั่ง&quot; ทันทีที่ไม่มีเงื่อนไข</span>
                          </div>
                        </td>
                        <td className="py-3.5 pl-4 text-slate-200">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>ใช้เหตุผลเชื่อมโยงบริบทและตอบได้อย่างสมเหตุสมผล</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 font-medium text-white">การควบคุมบุคลิกภาพ</td>
                        <td className="py-3.5 px-4 text-slate-400">
                          เขียนคำตอบตายตัวทีละข้อความ (แข็งกระด้าง)
                        </td>
                        <td className="py-3.5 pl-4 text-slate-200">
                          กำหนด System Instructions ปรับอารมณ์และระดับภาษาได้ลึกซึ้ง
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 font-medium text-white">การพัฒนาและต่อยอด</td>
                        <td className="py-3.5 px-4 text-slate-400">
                          ต้องเขียน Decision Tree แตกกิ่งซับซ้อนขึ้นเรื่อยๆ
                        </td>
                        <td className="py-3.5 pl-4 text-slate-200">
                          เพียงเขียน Prompt ให้ตัวอย่าง และเชื่อม API ใช้งานได้ทันที
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative">
                    <span className="text-xs font-mono text-purple-400 font-bold block mb-1">STEP 1</span>
                    <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">User Input</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">ผู้ใช้พิมพ์คำถามผ่านหน้าต่างแชทบนเว็บไซต์</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative">
                    <span className="text-xs font-mono text-purple-400 font-bold block mb-1">STEP 2</span>
                    <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Backend Proxy</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">ส่งข้อความไปยังเซิร์ฟเวอร์เพื่อแนบ API Key อย่างปลอดภัย</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/40 relative bg-purple-950/20">
                    <span className="text-xs font-mono text-purple-400 font-bold block mb-1">STEP 3</span>
                    <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Gemini Model + Prompt</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">ประมวลผลร่วมกับ System Instructions และสร้างคำตอบ</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative">
                    <span className="text-xs font-mono text-purple-400 font-bold block mb-1">STEP 4</span>
                    <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Client Render</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">ส่งข้อความตอบกลับมาแสดงผลบน Widget แบบ Interactive</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Core Pillars of Benefits - 1 col on mobile, 2 col tablet, 4 col desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-white">บริการ 24 ชั่วโมง</h5>
              <p className="text-xs text-slate-400 mt-1">พร้อมตอบข้อซักถามได้ทันทีโดยไม่มีการรอคอย</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <Users className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-white">รองรับผู้ใช้พร้อมกัน</h5>
              <p className="text-xs text-slate-400 mt-1">รับมือกับคำถามพร้อมกันหลายพันคนโดยไม่ติดขัด</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <Wrench className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-white">ปรับแต่งได้อิสระ</h5>
              <p className="text-xs text-slate-400 mt-1">ปรับเปลี่ยนข้อความและกฎได้ง่ายเพียงแก้ Prompt</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <TrendingUp className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-white">ลดต้นทุนดำเนินงาน</h5>
              <p className="text-xs text-slate-400 mt-1">ประหยัดเวลาและค่าใช้จ่ายของฝ่ายสนับสนุนลูกค้า</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
