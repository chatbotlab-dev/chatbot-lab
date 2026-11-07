import React, { useState } from 'react';
import { SYSTEM_INSTRUCTION_TEMPLATES } from '../data/mockKnowledge';
import {
  Key,
  Sliders,
  Shield,
  BookOpen,
  Copy,
  Check,
  Sparkles,
  Terminal,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  FileCode2,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

export const GoogleAIStudioTutorial: React.FC = () => {
  const [activeSubChapter, setActiveSubChapter] = useState<'ch2-prompt' | 'ch3-params'>('ch2-prompt');
  const [selectedTemplateId, setSelectedTemplateId] = useState(SYSTEM_INSTRUCTION_TEMPLATES[0].id);
  const [copied, setCopied] = useState(false);
  const [activePromptTab, setActivePromptTab] = useState<'system' | 'fewshot' | 'iteration'>('system');
  const [sliderTemp, setSliderTemp] = useState(0.2);
  const [topP, setTopP] = useState(0.95);

  const selectedTemplate =
    SYSTEM_INSTRUCTION_TEMPLATES.find((t) => t.id === selectedTemplateId) ||
    SYSTEM_INSTRUCTION_TEMPLATES[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tutorial" className="py-14 sm:py-24 bg-[#090D18] relative border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>บทที่ 2 & 3 · การสร้าง Prompt และปรับแต่ง Parameters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            การสร้าง Prompt, System Instructions และการตั้งค่า API Key
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            ฝึกฝนทักษะการควบคุมบทบาทของ AI ด้วย 4 เสาหลักของ System Instructions, เทคนิค Few-Shot, การปรับจูน Temperature และการขอ API Key จาก Google AI Studio
          </p>

          {/* Chapter Selector Tabs */}
          <div className="flex items-center justify-center pt-3">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <button
                onClick={() => setActiveSubChapter('ch2-prompt')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] flex items-center gap-2 ${
                  activeSubChapter === 'ch2-prompt'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-4 h-4 shrink-0" />
                <span>บทที่ 2: Prompt & System Instructions</span>
              </button>

              <button
                onClick={() => setActiveSubChapter('ch3-params')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] flex items-center gap-2 ${
                  activeSubChapter === 'ch3-params'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sliders className="w-4 h-4 shrink-0" />
                <span>บทที่ 3: Parameters & Gemini API Key</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-CHAPTER 2: PROMPT ENGINEERING & SYSTEM INSTRUCTIONS
           ========================================================================= */}
        {activeSubChapter === 'ch2-prompt' && (
          <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-200">
            
            {/* 1. Model Selection Comparison Card (Flash vs Pro) */}
            <div className="rounded-2xl bg-[#0F162A] border border-slate-800 p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-purple-400 font-bold">2.1 MODEL SELECTION</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    เลือกโมเดล Gemini ตัวไหนให้เหมาะกับ Chatbot บนเว็บไซต์?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    เปรียบเทียบตาม 3 คำถามหลัก: สิ่งนี้คืออะไร, จำเป็นอย่างไร, และผู้เรียนต้องลงมือทำอะไร
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono self-start sm:self-auto">
                  Google DeepMind Models
                </span>
              </div>

              {/* 3-Question Framework Highlights for Model Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <div className="space-y-1">
                  <span className="text-purple-400 font-bold block">1. สิ่งนี้คืออะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    เครื่องยนต์สมองกล AI ที่ประมวลผลข้อความแชท แบ่งเป็นตระกูล <strong>Flash</strong> (เน้นความเร็ว) และ <strong>Pro</strong> (เน้นคิดหลายชั้น)
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-indigo-400 font-bold block">2. จำเป็นต่อ Chatbot อย่างไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    ผู้ใช้บนเว็บไซต์รอคำตอบไม่ได้ หากใช้โมเดลผิดตัว แชทบอทจะโหลดช้า เสียค่าบริการสูง และตอบไม่ทันใจผู้ใช้งาน
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-emerald-400 font-bold block">3. ผู้เรียนต้องลงมือทำอะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    เลือก <strong>Gemini 2.5 Flash</strong> เป็นโมเดลหลักสำหรับการสนทนาบนเว็บ เพื่อให้ตอบสนองเร็วและควบคุมค่าใช้จ่ายได้ดีที่สุด
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {/* Gemini 2.5 Flash */}
                <div className="p-5 rounded-xl bg-purple-950/20 border-2 border-purple-500/60 relative flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-400 shrink-0" />
                        <h4 className="font-extrabold text-white text-base">Gemini 2.5 Flash</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-purple-600 text-white font-bold">
                        ★ แนะนำสำหรับ Chatbot บนเว็บ
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      โมเดลที่ออกแบบมาเพื่อความเร็วการตอบสนองสูงสุด (Low Latency) ตอบกลับแบบสตรีมมิ่งทันที ประหยัดโควต้า และฉลาดรอบด้าน เหมาะสำหรับแชทบอทบริการลูกค้าบนเว็บไซต์
                    </p>

                    <div className="space-y-2 pt-2 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-400">ความเร็วในการตอบสนอง:</span>
                        <span className="text-emerald-400 font-bold">เร็วมาก (ตอบสนองในเสี้ยววินาที)</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-400">ขอบเขตการรองรับเนื้อหา:</span>
                        <span className="text-white">จุเอกสาร FAQ และแคตตาล็อกสินค้าได้ครบถ้วน</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-400">การใช้งานที่เหมาะสม:</span>
                        <span className="text-purple-300">บริการลูกค้า, FAQ, บอทขายสินค้า, แนะนำบริการ</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-purple-800/40 text-[11px] text-purple-300 font-mono">
                    Model ID: &apos;gemini-2.5-flash&apos;
                  </div>
                </div>

                {/* Gemini 1.5 Pro */}
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 relative flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-indigo-400 shrink-0" />
                        <h4 className="font-extrabold text-white text-base">Gemini 1.5 Pro</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 font-mono">
                        Complex Reasoning
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      โมเดลสำหรับงานที่ต้องวิเคราะห์ตรรกะหลายชั้น การเปรียบเทียบสัญญาทางกฎหมาย หรือการเขียนโปรแกรมซับซ้อน แต่จะใช้เวลาประมวลผลนานกว่า ไม่เหมาะกับการเป็นบอทตอบคำถามทันที
                    </p>

                    <div className="space-y-2 pt-2 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-400">ความเร็วในการตอบสนอง:</span>
                        <span className="text-amber-400 font-medium">ปานกลาง (ใช้เวลาคิดวิเคราะห์นานกว่า)</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-400">ขอบเขตการรองรับเนื้อหา:</span>
                        <span className="text-white">รองรับเอกสารวิจัยและฐานข้อมูลโค้ดขนาดใหญ่</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-400">การใช้งานที่เหมาะสม:</span>
                        <span className="text-indigo-300">วิเคราะห์สัญญา, แปลเอกสารวิชาการ, ตรวจสอบบั๊ก</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                    Model ID: &apos;gemini-1.5-pro&apos;
                  </div>
                </div>
              </div>
            </div>

            {/* 2. The 4 Pillars of System Instructions */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">2.2 SYSTEM INSTRUCTION PILLARS</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">4 เสาหลักของการเขียน System Instructions ที่มีประสิทธิภาพ</h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  ทุก System Instruction ที่ดีควรประกอบด้วย 4 ส่วนสำคัญนี้เพื่อป้องกันไม่ให้แชทบอทตอบหลุดกรอบ
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-[#0F162A] border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold text-xs">
                    01
                  </div>
                  <h4 className="font-bold text-white text-sm">Persona & Role</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    กำหนดตัวตนของบอท เช่น &quot;คุณคือผู้ช่วย AI ประจำร้าน ShopHub สุภาพ อบอุ่น มีหางเสียง&quot; ควบคุมระดับความทางการ
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#0F162A] border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs">
                    02
                  </div>
                  <h4 className="font-bold text-white text-sm">Scope & Knowledge</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    ระบุขอบเขตข้อมูลที่ตอบได้ เช่น รายการสินค้า ระยะเวลาจัดส่ง และนโยบายการรับประกัน เพื่อให้โมเดลมีข้อเท็จจริงอ้างอิง
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#0F162A] border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono font-bold text-xs">
                    03
                  </div>
                  <h4 className="font-bold text-white text-sm">Guardrails & Safety</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    กฎเหล็กข้อห้าม เช่น ห้ามตอบเรื่องการเมือง ห้ามแต่งเรื่องขึ้นเอง (Hallucination) และห้ามเปิดเผยข้อมูลภายในเด็ดขาด
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#0F162A] border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                    04
                  </div>
                  <h4 className="font-bold text-white text-sm">Fallback & Ambiguity</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    แนวทางรับมือเมื่อเจอคำถามนอกเหนือความรู้ เช่น ให้แนะนำอีเมลติดต่อฝ่ายบริการลูกค้าของร้านอย่างสุภาพ
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Interactive Studio & Few-Shot Playground */}
            <div className="rounded-2xl bg-[#0E1528] border border-purple-900/40 p-4 sm:p-6 lg:p-8 shadow-2xl">
              
              {/* Top Controls */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-1">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>2.3 REAL-WORLD TEMPLATES & FEW-SHOT PLAYGROUND</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    สตูดิโอออกแบบ System Instructions และตัวอย่าง Few-Shot
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    เลือก 3 ธุรกิจจำลองเพื่อศึกษาโครงสร้างคำสั่งและการตอบกลับที่ถูกต้อง
                  </p>
                </div>

                {/* Template Picker */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {SYSTEM_INSTRUCTION_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => {
                        setSelectedTemplateId(tmpl.id);
                        setSliderTemp(tmpl.recommendedTemp);
                      }}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all min-h-[38px] ${
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

              {/* Sub-tabs: System Instructions vs Few-shot vs Prompt Iteration */}
              <div className="pt-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg text-xs border border-slate-800">
                  <button
                    onClick={() => setActivePromptTab('system')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                      activePromptTab === 'system' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    System Instructions (คำสั่งระบบ)
                  </button>
                  <button
                    onClick={() => setActivePromptTab('fewshot')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                      activePromptTab === 'fewshot' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Few-Shot Examples (ตัวอย่างสอน AI)
                  </button>
                  <button
                    onClick={() => setActivePromptTab('iteration')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                      activePromptTab === 'iteration' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Iteration Loop (วงจรทดสอบ)
                  </button>
                </div>

                <button
                  onClick={() => handleCopy(selectedTemplate.systemInstruction)}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400 font-medium">คัดลอกคำสั่งแล้ว</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 shrink-0" />
                      <span>คัดลอก System Instructions</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="pt-4">
                {activePromptTab === 'system' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-mono text-purple-300">Role: {selectedTemplate.role}</span>
                        <span className="font-mono text-slate-500">Rec. Temp: {selectedTemplate.recommendedTemp}</span>
                      </div>
                      <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-words max-h-[360px] overflow-y-auto">
                        {selectedTemplate.systemInstruction}
                      </pre>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] font-mono text-purple-400 font-bold block">USER PROMPT (คำถามทดสอบ):</span>
                        <p className="text-xs text-slate-200">{selectedTemplate.sampleUserMessage}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-purple-300 font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            GEMINI INFERENCE OUTPUT:
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-900 text-purple-200">
                            Temp {sliderTemp}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                          {selectedTemplate.sampleAiResponse}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activePromptTab === 'fewshot' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <p className="mb-2">
                        <strong className="text-purple-300">Few-Shot Prompting</strong> คือการป้อนคู่ตัวอย่าง <strong>User Input</strong> และ <strong>Desired Model Output</strong> ลงในช่องแชทก่อน เพื่อสอนให้โมเดลเข้าใจ Format, สไตล์การตอบ และวิธีการใช้คำลงท้าย:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold block">[Example Pair 1: สอบถามโปรโมชั่น]</span>
                        <div className="text-slate-300"><span className="text-indigo-400">User:</span> มีโปรอะไรบ้างตอนนี้?</div>
                        <div className="text-slate-400 pl-3 border-l-2 border-purple-500/50">
                          <span className="text-purple-300">Model:</span> สวัสดีครับ ตอนนี้ทางร้านมี 2 โปรโมชั่นครับ:<br />
                          1. ส่งฟรีเมื่อซื้อครบ 500 บาท<br />
                          2. โค้ด NEW10 ลด 10% สำหรับลูกค้าใหม่ครับ!
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold block">[Example Pair 2: นอกขอบเขต]</span>
                        <div className="text-slate-300"><span className="text-indigo-400">User:</span> พรุ่งนี้หวยออกเลขอะไร?</div>
                        <div className="text-slate-400 pl-3 border-l-2 border-purple-500/50">
                          <span className="text-purple-300">Model:</span> ขออภัยด้วยนะครับ ผมเป็นผู้ช่วยดูแลข้อมูลสินค้าของร้านค้า จึงไม่สามารถคาดเดาผลสลากได้ครับ หากมีคำถามเกี่ยวกับสินค้า ยินดีให้บริการครับ!
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePromptTab === 'iteration' && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
                    <h4 className="font-bold text-white text-sm">วงจรการปรับปรุง Prompt ซ้ำๆ (Prompt Iteration Loop)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-slate-300">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-purple-400 font-bold block mb-1">1. DRAFT</span>
                        <p className="text-[11px] text-slate-400">ร่าง System Instructions ชุดแรกตาม 4 เสาหลัก</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-indigo-400 font-bold block mb-1">2. TEST EDGES</span>
                        <p className="text-[11px] text-slate-400">ทดสอบถามคำถามกวน คำถามนอกเรื่อง และเจาะลึก</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-purple-400 font-bold block mb-1">3. ADD FEW-SHOT</span>
                        <p className="text-[11px] text-slate-400">หากพบการตอบผิด ให้ใส่ตัวอย่างที่ถูกต้องลงไปล็อกไว้</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40">
                        <span className="text-emerald-400 font-bold block mb-1">4. GET CODE</span>
                        <p className="text-[11px] text-slate-300">เมื่อได้ผลลัพธ์ที่พอใจ กด Get Code ไปติดตั้งบนเว็บ</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* =========================================================================
            SUB-CHAPTER 3: PARAMETERS & GEMINI API KEY
           ========================================================================= */}
        {activeSubChapter === 'ch3-params' && (
          <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-200">
            
            {/* 1. Interactive Hyperparameters Simulator */}
            <div className="rounded-2xl bg-[#0F162A] border border-slate-800 p-5 sm:p-7">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">3.1 HYPERPARAMETERS DEEP DIVE</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  การปรับแต่ง Temperature, Top-P และ Top-K สำหรับ Web Chatbot
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  เรียนรู้ตาม 3 คำถามหลักเพื่อปรับแต่งคำตอบให้เสถียรและไม่แต่งข้อมูลเท็จ
                </p>
              </div>

              {/* 3-Question Framework Highlights for Hyperparameters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <div className="space-y-1">
                  <span className="text-purple-400 font-bold block">1. สิ่งนี้คืออะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    ตัวเลขตั้งค่าที่ควบคุมระดับความสุ่ม (Randomness) และความหลากหลายในการเลือกคำตอบของ AI
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-indigo-400 font-bold block">2. จำเป็นต่อ Chatbot อย่างไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    แชทบอทบริการลูกค้าต้องการความถูกต้องและข้อเท็จจริง หากตั้งค่าสุ่มสูงเกินไป บอทจะตอบมั่วหรือแต่งราคาขึ้นมาเอง
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-emerald-400 font-bold block">3. ผู้เรียนต้องลงมือทำอะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    ปรับ Temperature มาที่ <strong>0.2</strong> เพื่อคำตอบที่แม่นยำคงที่ และคง Top-P ไว้ที่ <strong>0.95</strong>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Sliders & Controls */}
                <div className="lg:col-span-6 space-y-5">
                  {/* Temperature slider */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-purple-400" />
                        <span>Temperature:</span>
                      </span>
                      <span className="font-mono text-purple-400 font-bold text-sm">{sliderTemp.toFixed(1)}</span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="1.5"
                      step="0.1"
                      value={sliderTemp}
                      onChange={(e) => setSliderTemp(parseFloat(e.target.value))}
                      className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500 py-1"
                    />

                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>0.0 (แม่นยำ/ไม่มั่ว)</span>
                      <span>0.7 (สมดุล)</span>
                      <span>1.5 (สุ่มสูงมาก)</span>
                    </div>
                  </div>

                  {/* Top-P slider */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-indigo-400" />
                        <span>Top-P (Nucleus Sampling):</span>
                      </span>
                      <span className="font-mono text-indigo-400 font-bold text-sm">{topP.toFixed(2)}</span>
                    </div>

                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.05"
                      value={topP}
                      onChange={(e) => setTopP(parseFloat(e.target.value))}
                      className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 py-1"
                    />

                    <p className="text-[11px] text-slate-400">
                      ค่าแนะนำคือ <strong>0.95</strong> เพื่อตัดตัวเลือกคำที่มีความน่าจะเป็นต่ำมากออกไป
                    </p>
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="lg:col-span-6 p-5 rounded-xl bg-slate-950 border border-purple-500/30 space-y-3">
                  <h4 className="font-bold text-white text-sm">
                    {sliderTemp <= 0.3
                      ? '🎯 โหมดเน้นความแม่นยำสูง (0.0 - 0.3)'
                      : sliderTemp <= 0.7
                      ? '⚖️ โหมดสนทนาเป็นธรรมชาติและสมดุล (0.4 - 0.7)'
                      : '🎨 โหมดระดมไอเดียและความคิดสร้างสรรค์ (0.8 - 1.5+)'}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sliderTemp <= 0.3
                      ? 'โมเดลจะเลือกคำที่มีความน่าจะเป็นสูงสุดเสมอ คำตอบจะสม่ำเสมอ ไม่แต่งเรื่อง ไม่จินตนาการข้อมูล เหมาะอย่างยิ่งสำหรับแชทบอทตอบคำถามลูกค้า (Customer Support), ข้อมูลราคา, นโยบายการคืนสินค้า และการเขียนโค้ด'
                      : sliderTemp <= 0.7
                      ? 'โมเดลมีความยืดหยุ่นในการเลือกคำมากขึ้น เหมาะสำหรับการสนทนาทั่วไป การตอบอีเมล และแชทบอทให้คำปรึกษา'
                      : 'โมเดลจะสุ่มคำที่แปลกใหม่และหลากหลาย คำตอบแต่ละครั้งอาจแตกต่างกันอย่างมาก เหมาะกับงานแต่งนิทาน การคิดแคปชั่นโฆษณา หรืองานระดมความคิด'}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-900 text-xs text-purple-300 font-mono">
                    แนะนำสำหรับ Web Chatbot: <strong>Temperature = 0.2</strong>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Safety Settings Matrix */}
            <div className="rounded-2xl bg-[#0F162A] border border-slate-800 p-5 sm:p-7 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">3.2 SAFETY SETTINGS</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  ตัวกรองความปลอดภัย 4 หมวดหมู่ (Safety Filters)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  ระบบกรองความปลอดภัยของ Google AI เพื่อป้องกันไม่ให้โมเดลตอบกลับด้วยเนื้อหาที่ไม่เหมาะสมบนเว็บไซต์
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-white block mb-1">1. Harassment</span>
                  <p className="text-slate-400">ป้องกันการคุกคาม กลั่นแกล้ง หรือดูหมิ่นบุคคล</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-white block mb-1">2. Hate Speech</span>
                  <p className="text-slate-400">ป้องกันคำพูดสร้างความเกลียดชังและการเหยียดเชื้อชาติ</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-white block mb-1">3. Sexually Explicit</span>
                  <p className="text-slate-400">ป้องกันเนื้อหาลามกอนาจารและคำบรรยายทางเพศ</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-white block mb-1">4. Dangerous Content</span>
                  <p className="text-slate-400">ป้องกันคำแนะนำที่นำไปสู่อันตราย การทำร้ายตัวเอง หรืออาวุธ</p>
                </div>
              </div>
            </div>

            {/* 3. Step-by-Step API Key Acquisition & Practical Quota Management */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0F162A] to-[#0A0E1A] border border-slate-800 p-5 sm:p-8 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">3.3 GEMINI API KEY & CODE EXPORT</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  การสร้าง Gemini API Key, การส่งออกโค้ด (Get Code) และการจัดการโควต้า
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  ขั้นตอนปฏิบัติจริงเพื่อนำสิ่งที่ออกแบบใน Playground ไปใช้งานในโค้ดจริง
                </p>
              </div>

              {/* 3-Question Framework Highlights for API Key */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <div className="space-y-1">
                  <span className="text-purple-400 font-bold block">1. สิ่งนี้คืออะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    รหัสลับ (Secret Key) ที่ใช้ยืนยันสิทธิ์ในการเรียกใช้งานโมเดล Gemini ผ่านโปรแกรม
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-indigo-400 font-bold block">2. จำเป็นต่อ Chatbot อย่างไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    เป็นกุญแจเดียวที่ Backend Proxy ใช้ขอคำตอบจาก Google AI หากไม่มีหรือกุญแจหมดอายุ บอทจะไม่ทำงาน
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-emerald-400 font-bold block">3. ผู้เรียนต้องลงมือทำอะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    สร้าง API Key ใน Google AI Studio นำไปใส่ในไฟล์ <code>.env</code> ของ Backend และคลิกปุ่ม <strong>Get Code</strong> เพื่อคัดลอกโครงโค้ด
                  </p>
                </div>
              </div>

              {/* 4 Steps to API Key */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-purple-400 block mb-1">STEP 1</span>
                  <h4 className="font-bold text-white text-sm mb-1">คลิก &quot;Get API key&quot;</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    มองหาปุ่ม Get API key ที่เมนูด้านซ้ายของ Google AI Studio
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-indigo-400 block mb-1">STEP 2</span>
                  <h4 className="font-bold text-white text-sm mb-1">Create API Key</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    กดปุ่ม &quot;Create API key in new project&quot; เพื่อสร้างกุญแจใหม่
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-purple-400 block mb-1">STEP 3</span>
                  <h4 className="font-bold text-white text-sm mb-1">คัดลอกกุญแจ (Copy)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    คัดลอกสตริงกุญแจที่ขึ้นต้นด้วย <code className="text-purple-300">AIzaSy...</code>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">STEP 4</span>
                  <h4 className="font-bold text-white text-sm mb-1">ใส่ใน Backend .env</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    นำไปวางในไฟล์ <code className="text-emerald-300">.env</code> ฝั่งเซิร์ฟเวอร์ ห้ามวางในหน้าเว็บ!
                  </p>
                </div>
              </div>

              {/* Practical Quota and Rate Limit Management Guide */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">แนวทางการจัดการโควต้าและอัตราการเรียกใช้งาน (Rate Limits):</span>
                  <span className="text-purple-400 font-mono">การออกแบบระบบจริง</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-purple-300 font-bold block text-xs">1. Free Tier vs Production</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Google ให้ใช้งานฟรีสำหรับการพัฒนาและทดลอง เมื่อนำขึ้นระบบจริงที่มีผู้ใช้งานจำนวนมาก สามารถเชื่อมต่อ Google Cloud Billing เพื่อเพิ่มขีดจำกัด
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-indigo-300 font-bold block text-xs">2. การจัดการ HTTP 429</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      เมื่อมีผู้ใช้งานยิงคำถามถี่เกินไป API จะคืนรหัสสถานะ 429 (Too Many Requests) ฝั่ง Backend ต้องเขียน Exponential Backoff Retry รองรับไว้เสมอ
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-emerald-300 font-bold block text-xs">3. ป้องกันการสแปมที่หน้าบ้าน</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      ใส่ Rate Limiter เช่น <code>express-rate-limit</code> ที่เซิร์ฟเวอร์คนกลาง และปิดปุ่มส่งในหน้าเว็บชั่วคราวขณะที่แชทบอทกำลังพิมพ์ตอบ
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
