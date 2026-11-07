import React, { useState } from 'react';
import {
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  Sparkles,
  MousePointerClick,
  Bot,
  RefreshCw,
  Play,
  Lightbulb,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export const AIStudioVisualTutorial: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(true);

  const samplePromptText =
    'สร้าง Chatbot ผู้ช่วยตอบคำถามสำหรับนักเรียนและนักศึกษา สามารถตอบคำถามเกี่ยวกับข้อมูลทั่วไปของสถานศึกษา ให้คำแนะนำด้านการเรียน และแนะนำบริการต่าง ๆ โดยใช้ภาษาไทยที่สุภาพ เข้าใจง่าย และตอบตรงประเด็น ออกแบบหน้าตา Chatbot ให้ทันสมัย ใช้งานง่าย และรองรับทั้งโทรศัพท์มือถือและคอมพิวเตอร์';

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePromptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const steps = [
    {
      id: 1,
      title: 'ขั้นตอนที่ 1: เข้าใช้งาน Google AI Studio',
      shortTitle: '1. เข้าใช้งาน',
      desc: 'เริ่มต้นใช้งานเครื่องมือสร้าง AI ระดับโลกจาก Google ที่ aistudio.google.com',
    },
    {
      id: 2,
      title: 'ขั้นตอนที่ 2: สร้างโปรเจกต์ใหม่ (เลือก New App)',
      shortTitle: '2. เลือก New App',
      desc: 'คลิกเมนู New App ที่แถบด้านซ้ายเพื่อเปิดโหมดสร้างแอปพลิเคชัน AI',
    },
    {
      id: 3,
      title: 'ขั้นตอนที่ 3: ป้อน Prompt เพื่อสร้าง Chatbot',
      shortTitle: '3. ป้อน Prompt',
      desc: 'ระบุบทบาท ความสามารถ และดีไซน์ของ Chatbot ที่ต้องการผ่านภาษาธรรมชาติ',
    },
    {
      id: 4,
      title: 'ขั้นตอนที่ 4: รอ AI สร้าง Chatbot และแสดงผลลัพธ์',
      shortTitle: '4. รอ AI สร้างผลงาน',
      desc: 'โมเดล Gemini ประมวลผลและสร้าง Chatbot พร้อมหน้าตาและการทำงานทันที',
    },
    {
      id: 5,
      title: 'ขั้นตอนที่ 5: ทดลองใช้งาน ตรวจสอบ และปรับปรุง',
      shortTitle: '5. ทดลองและปรับปรุง',
      desc: 'ทดสอบพิมพ์คุย ตรวจคำตอบ และปรับแก้ Prompt เพิ่มเติมจนสมบูรณ์แบบ',
    },
  ];

  return (
    <div className="mt-12 sm:mt-16 rounded-2xl bg-[#0B1020] border border-purple-500/30 p-4 sm:p-7 lg:p-8 shadow-2xl relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-xs font-semibold text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ภาพหน้าจอจริงจาก Google AI Studio · Hands-on Practical Guide</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            การสร้าง Chatbot ด้วย Google AI Studio (5 ขั้นตอนปฏิบัติจริง)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            สอนผู้เรียนสร้าง Chatbot ตั้งแต่เริ่มต้นโดยใช้ภาพหน้าจอจริง เน้นการลงมือทำตามได้ทันที ไม่เน้นทฤษฎีที่ไม่จำเป็น
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowAnnotation((prev) => !prev)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 min-h-[36px] ${
              showAnnotation
                ? 'bg-purple-900/50 border-purple-500/60 text-purple-200'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>{showAnnotation ? '✓ แสดงกรอบไฮไลต์ตำแหน่ง' : 'ซ่อนกรอบไฮไลต์'}</span>
          </button>

          <a
            href="https://aistudio.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md min-h-[36px]"
          >
            <span>เปิด Google AI Studio จริง</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 5-Step Stepper Tabs */}
      <div className="pt-6 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-3 rounded-xl text-left transition-all min-h-[64px] flex flex-col justify-between border ${
                activeStep === s.id
                  ? 'bg-purple-950/70 border-purple-500 text-white shadow-lg shadow-purple-950/50 ring-1 ring-purple-400/50'
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    activeStep === s.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  STEP 0{s.id}
                </span>
                {activeStep === s.id && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <span className="text-xs font-bold truncate block">{s.shortTitle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="rounded-2xl bg-[#080D1A] border border-slate-800 overflow-hidden shadow-2xl">
        
        {/* Step Header Banner */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-md">
              0{activeStep}
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                {steps[activeStep - 1].title}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {steps[activeStep - 1].desc}
              </p>
            </div>
          </div>

          <div className="text-xs text-purple-300 font-mono px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 self-start sm:self-auto">
            ภาพหน้าจอจริง: Google AI Studio Build UI
          </div>
        </div>

        {/* Step Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">

          {/* =========================================================================
              STEP 1: เข้าใช้งาน Google AI Studio
             ========================================================================= */}
          {activeStep === 1 && (
            <div className="space-y-6">
              {/* Screenshot with real image */}
              <div className="rounded-xl overflow-hidden border-2 border-slate-800 bg-[#060913] relative group shadow-2xl">
                <div className="relative">
                  <img
                    src="/assets/aistudio/image_283ffa58.png"
                    alt="ภาพหน้าจอจริงของหน้าแรก Google AI Studio"
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  {/* Highlights Overlay if enabled */}
                  {showAnnotation && (
                    <>
                      {/* Top Bar Branding Highlight */}
                      <div className="absolute top-[2%] left-[1%] sm:left-[1.2%] border-2 border-emerald-400 bg-emerald-500/20 rounded-md px-2 py-1 text-[10px] sm:text-xs font-bold text-emerald-200 shadow-lg pointer-events-none flex items-center gap-1">
                        <span>Google AI Studio</span>
                      </div>

                      {/* Center Build Area Callout */}
                      <div className="absolute top-[28%] left-[28%] sm:left-[30%] sm:top-[30%] border-2 border-dashed border-purple-400 bg-purple-950/40 rounded-xl p-2 sm:p-3 text-center pointer-events-none hidden sm:block max-w-sm">
                        <span className="text-xs font-bold text-purple-300 block">
                          🌟 Build your ideas with Gemini
                        </span>
                        <span className="text-[11px] text-slate-300">
                          ศูนย์รวมการทดลองและสร้าง Chatbot ด้วยโมเดล Gemini
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-medium">
                    📸 <strong>ภาพประกอบจริง:</strong> หน้าหลักของ Google AI Studio เมื่อล็อกอินเข้าสู่ระบบเรียบร้อยแล้ว
                  </span>
                  <span className="text-[11px] font-mono text-purple-400">
                    URL: aistudio.google.com
                  </span>
                </div>
              </div>

              {/* Explanatory Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Google AI Studio คืออะไร?</span>
                  </h5>
                  <p className="text-slate-300 leading-relaxed">
                    <strong>Google AI Studio</strong> คือแพลตฟอร์มบนเว็บของ Google ที่เปิดให้นักพัฒนาและผู้สนใจทั่วไปสามารถเข้ามาสร้าง ทดลอง และต่อยอดแอปพลิเคชัน AI ได้โดยตรง เป็นพื้นที่ทำงานที่ใช้งานง่าย ไม่จำเป็นต้องติดตั้งโปรแกรมลงในคอมพิวเตอร์
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
                  <h5 className="font-bold text-white text-sm flex items-center gap-2">
                    <Bot className="w-4 h-4 text-purple-400" />
                    <span>ผู้เรียนสามารถทำอะไรได้จากที่นี่?</span>
                  </h5>
                  <p className="text-slate-300 leading-relaxed">
                    คุณสามารถสร้างและทดลอง <strong>AI Chatbot</strong> ได้ตั้งแต่การป้อนความต้องการด้วยข้อความธรรมดา (Prompt) ทดสอบสนทนาแบบเรียลไทม์ และนำผลงานไปใช้งานบนเว็บไซต์จริงได้ทันที
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              STEP 2: สร้างโปรเจกต์ใหม่ (เลือก New App)
             ========================================================================= */}
          {activeStep === 2 && (
            <div className="space-y-6">
              {/* Screenshot with highlighted New App */}
              <div className="rounded-xl overflow-hidden border-2 border-purple-500/60 bg-[#060913] relative group shadow-2xl">
                <div className="relative">
                  <img
                    src="/assets/aistudio/image_7394803c.png"
                    alt="ภาพหน้าจอจริงของ Google AI Studio แสดงตำแหน่งเมนู New App บนแถบด้านซ้าย"
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  {/* High-visibility glowing ring & callout on "+ New app" */}
                  {showAnnotation && (
                    <div className="absolute top-[22%] left-[1.2%] w-[12%] sm:w-[9.5%] h-[6%] sm:h-[5.5%] border-2 sm:border-3 border-amber-400 bg-amber-400/20 rounded-lg animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.8)] pointer-events-none flex items-center justify-end pr-1">
                      <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[9px] font-mono uppercase shadow">
                        คลิกที่นี่
                      </span>
                    </div>
                  )}

                  {/* Marker Pin Tooltip */}
                  {showAnnotation && (
                    <div className="absolute top-[17%] left-[12%] sm:left-[11%] bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] sm:text-xs px-2.5 py-1 rounded-full shadow-2xl flex items-center gap-1.5 pointer-events-none border border-white/50">
                      <MousePointerClick className="w-3.5 h-3.5" />
                      <span>1. เลือกเมนู &quot;+ New app&quot;</span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-medium">
                    📍 <strong>ตำแหน่งเมนู New App:</strong> อยู่ที่แถบเมนูด้านซ้าย (Sidebar) ภายใต้หัวข้อ <strong>BUILD</strong>
                  </span>
                  <span className="text-[11px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                    Menu: + New app
                  </span>
                </div>
              </div>

              {/* Action Description */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <MousePointerClick className="w-4 h-4" />
                  <span>คำแนะนำการลงมือทำในขั้นตอนนี้:</span>
                </div>
                <ol className="list-decimal pl-4 space-y-2 text-slate-300">
                  <li>
                    มองหาแถบเมนูด้านซ้ายของหน้าจอ (Sidebar)
                  </li>
                  <li>
                    สังเกตหัวข้อ <strong>BUILD</strong> แล้วคลิกที่ปุ่ม <strong className="text-amber-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">+ New app</strong>
                  </li>
                  <li>
                    เมนู <strong>New App</strong> คือจุดเริ่มต้นสำหรับสร้างแอปพลิเคชันและ Chatbot ด้วย AI ซึ่งระบบจะเปิดช่องป้อนคำสั่งให้คุณสั่งงาน AI ได้ทันที
                  </li>
                </ol>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400">
                  💡 <em>หมายเหตุ: ในบทเรียนเริ่มต้นนี้ ผู้เรียนไม่จำเป็นต้องกังวลเรื่องการตั้งค่าอื่น ๆ เช่น Model Selection, Settings หรือ System Instructions เพียงแค่กด New App เพื่อเริ่มสร้างผลงานได้ทันที</em>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              STEP 3: ป้อน Prompt เพื่อสร้าง Chatbot
             ========================================================================= */}
          {activeStep === 3 && (
            <div className="space-y-6">
              {/* Visual callout on Prompt Input Box */}
              <div className="rounded-xl overflow-hidden border-2 border-indigo-500/50 bg-[#060913] relative group shadow-2xl">
                <div className="relative">
                  <img
                    src="/assets/aistudio/image_283ffa58.png"
                    alt="ภาพหน้าจอจริงของ Google AI Studio แสดงตำแหน่งช่องป้อน Prompt ตรงกลางหน้าจอ"
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  {/* Highlights on Center Prompt Box */}
                  {showAnnotation && (
                    <div className="absolute top-[42%] left-[32%] w-[46%] h-[18%] border-2 sm:border-3 border-purple-400 bg-purple-500/10 rounded-2xl animate-pulse shadow-[0_0_25px_rgba(168,85,247,0.7)] pointer-events-none flex items-start justify-start p-2">
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-purple-600 text-white font-bold text-[10px] shadow">
                        ช่องพิมพ์ Prompt: &quot;Describe an app and let Gemini do the rest&quot;
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-medium">
                    ✍️ <strong>ช่องป้อน Prompt:</strong> อยู่กึ่งกลางหน้าจอ สามารถพิมพ์บอก AI ได้โดยตรงว่าต้องการสร้าง Chatbot แบบใด
                  </span>
                  <span className="text-[11px] font-mono text-purple-300">
                    Prompt Input Box
                  </span>
                </div>
              </div>

              {/* Copyable Prompt Card */}
              <div className="rounded-xl bg-gradient-to-br from-purple-950/40 to-slate-900 border-2 border-purple-500/40 p-5 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                    <h5 className="font-bold text-white text-sm">
                      ตัวอย่าง Prompt สำหรับสร้าง Chatbot (สามารถคัดลอกไปใช้ได้ทันที)
                    </h5>
                  </div>

                  <button
                    onClick={handleCopyPrompt}
                    className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md self-start sm:self-auto min-h-[36px]"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span className="text-emerald-200">คัดลอก Prompt แล้ว!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>คัดลอก Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-purple-800/40 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed select-all">
                  &quot;{samplePromptText}&quot;
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>คำแนะนำ:</strong> ผู้เรียนสามารถปรับเปลี่ยนรายละเอียดใน Prompt ให้เหมาะกับ Chatbot ที่ตนเองต้องการสร้างได้ เช่น เปลี่ยนเป็นบอทร้านอาหาร คลินิก หรือร้านค้าออนไลน์ เพียงแค่ระบุบทบาท ข้อมูลที่ต้องการให้ตอบ และสไตล์ภาษาที่ต้องการ
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              STEP 4: รอ AI สร้าง Chatbot
             ========================================================================= */}
          {activeStep === 4 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Process Breakdown */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <span className="text-xs font-mono font-bold text-purple-400 block">
                      AI PROCESSING
                    </span>
                    <h5 className="font-bold text-white text-base">
                      AI ประมวลผลคำสั่งและสร้าง Chatbot
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      เมื่อผู้เรียนกดส่งข้อความ Prompt (หรือกด Enter) โมเดล AI จะเริ่มวิเคราะห์ความต้องการ ออกแบบโครงสร้างส่วนติดต่อผู้ใช้ (UI) และเขียนโค้ดระบบตอบคำถามให้อัตโนมัติในเวลาไม่กี่อึดใจ
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>สร้างหน้าต่างสนทนาที่มีสไตล์ทันสมัยตามที่ระบุ</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>ใส่ข้อมูลแนะนำการเรียนและบริการของสถานศึกษา</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>ปรับขนาดให้รองรับทั้งมือถือและหน้าจอคอมพิวเตอร์</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-slate-300 space-y-1.5">
                    <span className="font-bold text-purple-300 block">
                      🔍 ข้อแนะนำในการตรวจสอบ:
                    </span>
                    <p className="leading-relaxed">
                      เมื่อ AI สร้างเสร็จแล้ว ให้ตรวจดูว่า Chatbot มีหน้าตาครบถ้วนหรือไม่ มีช่องพิมพ์ข้อความ และจัดวางปุ่มได้สะดวกต่อการใช้งานตามที่ต้องการหรือไม่
                    </p>
                  </div>
                </div>

                {/* Simulated Generated Result Preview */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl bg-[#0E1528] border border-purple-500/40 p-4 shadow-xl space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <Bot className="w-4 h-4 text-purple-400" />
                        <span>ตัวอย่างผลงาน Chatbot ที่ AI สร้างขึ้น</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                        Generated Preview
                      </span>
                    </div>

                    {/* Chatbot Mock Viewport */}
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3 text-xs">
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 text-xs font-bold">
                          AI
                        </div>
                        <div className="p-3 rounded-2xl rounded-tl-none bg-purple-950/50 border border-purple-800/40 text-slate-200 space-y-1">
                          <p className="font-medium text-white">
                            สวัสดีครับ! ผมคือผู้ช่วยตอบคำถามประจำสถานศึกษา ยินดีให้บริการครับ 🎓
                          </p>
                          <p className="text-[11px] text-slate-400">
                            สามารถสอบถามข้อมูลหลักสูตร, วันเปิดภาคเรียน, หรือบริการต่าง ๆ ได้เลยครับ!
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-[10px] text-purple-300">
                          📚 แนะนำหลักสูตรปริญญาตรี
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-[10px] text-purple-300">
                          📅 ปฏิทินการศึกษา
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-[10px] text-purple-300">
                          🏢 ติดต่อห้องทะเบียน
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================================================
              STEP 5: ทดลองใช้งานและปรับปรุง
             ========================================================================= */}
          {activeStep === 5 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                {/* Action 1 */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-950 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs">
                    1
                  </div>
                  <h5 className="font-bold text-white text-sm">ทดลองพิมพ์คำถาม</h5>
                  <p className="text-slate-400 leading-relaxed">
                    ลองพิมพ์คำถามที่นักเรียนหรือผู้ใช้น่าจะถามจริง เช่น &quot;สมัครเรียนต้องใช้เอกสารอะไรบ้าง?&quot; หรือ &quot;มีทุนการศึกษาไหม?&quot;
                  </p>
                </div>

                {/* Action 2 */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                    2
                  </div>
                  <h5 className="font-bold text-white text-sm">ตรวจสอบความถูกต้อง</h5>
                  <p className="text-slate-400 leading-relaxed">
                    ดูว่าคำตอบมีความสุภาพ ตรงประเด็น และถูกต้องตามข้อมูลของสถานศึกษาหรือไม่ หากมีข้อมูลที่ผิดพลาดให้จดไว้
                  </p>
                </div>

                {/* Action 3 */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    3
                  </div>
                  <h5 className="font-bold text-white text-sm">ปรับ Prompt แล้วลองใหม่</h5>
                  <p className="text-slate-400 leading-relaxed">
                    หากผลลัพธ์ยังไม่ตรงใจ ให้พิมพ์บอก AI เพิ่ม เช่น &quot;ขอให้เพิ่มเงื่อนไขการรับสมัครปี 2568 และเน้นตอบสั้นกระชับ&quot;
                  </p>
                </div>

              </div>

              {/* Ready to Experience Widget */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-900 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h5 className="font-bold text-white text-sm">
                    🎉 ยินดีด้วย! คุณเข้าใจกระบวนการสร้าง Chatbot ด้วย Google AI Studio แล้ว
                  </h5>
                  <p className="text-xs text-slate-300">
                    ในบทต่อไป (บทที่ 4 & 5) คุณจะได้เรียนรู้วิธีนำ Chatbot นี้ไปติดตั้งบนเว็บไซต์จริงของคุณอย่างปลอดภัย
                  </p>
                </div>

                <a
                  href="#integration"
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shrink-0 self-start sm:self-auto min-h-[40px]"
                >
                  <span>ไปเรียนการติดตั้งบนเว็บ (บทที่ 4 & 5)</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Stepper Footer Nav */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 disabled:opacity-40 text-xs text-slate-300 border border-slate-800 transition-colors flex items-center gap-1.5 min-h-[40px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>ขั้นตอนก่อนหน้า</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            ขั้นตอนที่ {activeStep} จาก 5
          </span>

          <button
            onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
            disabled={activeStep === 5}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-xs font-bold text-white transition-all flex items-center gap-1.5 shadow-md min-h-[40px]"
          >
            <span>ขั้นตอนถัดไป</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
