import React, { useState } from 'react';
import { SYSTEM_INSTRUCTION_TEMPLATES } from '../data/mockKnowledge';
import { Key, Sliders, Shield, BookOpen, Copy, Check, Sparkles, Terminal } from 'lucide-react';

export const GoogleAIStudioTutorial: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(SYSTEM_INSTRUCTION_TEMPLATES[0].id);
  const [copied, setCopied] = useState(false);
  const [sliderTemp, setSliderTemp] = useState(0.2);

  const selectedTemplate =
    SYSTEM_INSTRUCTION_TEMPLATES.find((t) => t.id === selectedTemplateId) ||
    SYSTEM_INSTRUCTION_TEMPLATES[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tutorial" className="py-14 sm:py-20 bg-[#090D18] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            02. คู่มือ GOOGLE AI STUDIO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ขั้นตอนการสร้าง AI Chatbot บน Google AI Studio
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            ทำความรู้จักกับ Google AI Studio เครื่องมือออกแบบ Prompt และทดสอบโมเดลตระกูล Gemini ที่ใช้งานง่าย รวดเร็ว และนำไปเขียนโค้ดต่อได้ทันที
          </p>
        </div>

        {/* 4 Steps Visual Breakdown - 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Step 1 */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 flex flex-col justify-between hover:border-purple-500/30 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <Key className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-purple-400">STEP 01</span>
              <h3 className="text-base sm:text-lg font-bold text-white">รับ Gemini API Key</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                เข้าสู่เว็บไซต์ aistudio.google.com ล็อกอินด้วยบัญชี Google และกดปุ่ม <strong>&quot;Get API key&quot;</strong> เพื่อสร้างกุญแจสำหรับการเชื่อมต่อกับโปรแกรมของคุณ
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              ✓ ฟรีโควต้าสำหรับทดสอบ
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 flex flex-col justify-between hover:border-purple-500/30 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-indigo-400">STEP 02</span>
              <h3 className="text-base sm:text-lg font-bold text-white">เลือกโมเดล & ค่าพารามิเตอร์</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                เลือกโมเดลที่เหมาะสม เช่น <strong>gemini-2.5-flash</strong> สำหรับงานตอบคำถามเร็ว และปรับค่า <strong>Temperature</strong> (0.0 - 0.3 สำหรับความแม่นยำสูง)
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              ✓ ความเร็วสูง ตอบสนองลื่นไหล
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 flex flex-col justify-between hover:border-purple-500/30 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-violet-400">STEP 03</span>
              <h3 className="text-base sm:text-lg font-bold text-white">กำหนด System Instructions</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                เขียนคำสั่งระบบเพื่อมอบหมายบทบาท (Persona), น้ำเสียง, ข้อมูลสินค้าหรือบริการ และกฎเหล็ก (Guardrails) ป้องกันไม่ให้ตอบเรื่องนอกประเด็น
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              ✓ คุมทิศทางการตอบ 100%
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 flex flex-col justify-between hover:border-purple-500/30 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">STEP 04</span>
              <h3 className="text-base sm:text-lg font-bold text-white">ทดสอบ & ใส่ Few-Shot</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ทดลองพิมพ์คุยในหน้าต่าง Chat ของ AI Studio เพิ่มตัวอย่าง ถาม-ตอบ ที่ต้องการ (Few-shot Examples) จนกระทั่งได้ผลลัพธ์ที่พอใจ แล้วกด <strong>&quot;Get Code&quot;</strong>
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              ✓ Export โค้ดได้หลายภาษา
            </div>
          </div>
        </div>

        {/* Interactive System Instructions Lab */}
        <div className="rounded-2xl bg-[#0E1528] border border-purple-900/40 p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-1">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>INTERACTIVE PLAYGROUND</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                ทดลองออกแบบ System Instructions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                เลือกเทมเพลตตัวอย่างเพื่อดูวิธีเขียนคำสั่งระบบสำหรับงานแต่ละประเภท
              </p>
            </div>

            {/* Template Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {SYSTEM_INSTRUCTION_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => {
                    setSelectedTemplateId(tmpl.id);
                    setSliderTemp(tmpl.recommendedTemp);
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-all min-h-[36px] ${
                    selectedTemplateId === tmpl.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {tmpl.title}
                </button>
              ))}
            </div>
          </div>

          {/* Playground Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-5 sm:pt-6">
            
            {/* Left: System Prompt Editor View */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>System Instructions (คำสั่งระบบ):</span>
                </label>
                <button
                  onClick={() => handleCopy(selectedTemplate.systemInstruction)}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors min-h-[36px] px-2 py-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400">คัดลอกแล้ว</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 shrink-0" />
                      <span>คัดลอกโค้ด</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <pre className="p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-words selection:bg-purple-900">
                  {selectedTemplate.systemInstruction}
                </pre>
              </div>

              {/* Temperature Adjuster Simulator */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Temperature (ระดับความแม่นยำ vs ความคิดสร้างสรรค์):</span>
                  <span className="font-mono text-purple-400 font-bold">{sliderTemp.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={sliderTemp}
                  onChange={(e) => setSliderTemp(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500 py-1"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 gap-1">
                  <span>0.0 (แม่นยำสูง)</span>
                  <span>0.5 (สมดุล)</span>
                  <span>1.0 (สร้างสรรค์)</span>
                </div>
              </div>
            </div>

            {/* Right: Simulation Output */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-slate-300 block">
                ผลลัพธ์จำลองการตอบ (Sample Inference):
              </span>

              {/* User message */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] sm:text-[11px] font-mono text-purple-400 font-bold block">USER PROMPT:</span>
                <p className="text-xs text-slate-200">{selectedTemplate.sampleUserMessage}</p>
              </div>

              {/* AI response based on System Instructions */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-purple-300 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    GEMINI OUTPUT (System Guided):
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-200">
                    Temp {sliderTemp}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                  {selectedTemplate.sampleAiResponse}
                </p>
              </div>

              {/* Tips */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">💡 ข้อแนะนำจากผู้เชี่ยวชาญ:</span>
                <p className="leading-relaxed">
                  สำหรับการสร้าง Chatbot ประจำเว็บไซต์ ควรกำหนดขอบเขตข้อมูลที่ตอบได้อย่างชัดเจน และระบุเงื่อนไข Fallback เสมอ หากผู้ใช้ถามเรื่องที่อยู่นอกเหนือความรู้
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
