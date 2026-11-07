import React, { useState } from 'react';
import { INTEGRATION_CODE_EXAMPLES, PRODUCTION_CHECKLIST } from '../data/mockKnowledge';
import {
  ShieldAlert,
  Globe,
  Server,
  Cloud,
  ArrowRight,
  Copy,
  Check,
  Code2,
  Layers,
  CheckCircle2,
  Smartphone,
  Rocket,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Terminal,
} from 'lucide-react';

export const WebsiteIntegration: React.FC = () => {
  const [activeSubChapter, setActiveSubChapter] = useState<'ch4-backend' | 'ch5-widget'>('ch4-backend');
  const [activeCodeIndex, setActiveCodeIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'sec-1': true,
    'sec-2': true,
    'prompt-1': true,
    'prompt-2': true,
  });

  const activeExample = INTEGRATION_CODE_EXAMPLES[activeCodeIndex];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="integration" className="py-14 sm:py-24 bg-[#0A0F1D] relative border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Rocket className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>บทที่ 4 & 5 · สถาปัตยกรรมความปลอดภัย และการ Deploy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            การเชื่อมต่อ Backend Proxy และการติดตั้งบนเว็บไซต์จริง
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            สร้างสถาปัตยกรรมความปลอดภัยระดับมืออาชีพโดยไม่เปิดเผย API Key เขียนเซิร์ฟเวอร์ Express Proxy ออกแบบ Floating Widget และเตรียมความพร้อมขึ้น Production
          </p>

          {/* Sub-chapter switch buttons */}
          <div className="flex items-center justify-center pt-3">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <button
                onClick={() => setActiveSubChapter('ch4-backend')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] flex items-center gap-2 ${
                  activeSubChapter === 'ch4-backend'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Server className="w-4 h-4 shrink-0" />
                <span>บทที่ 4: สถาปัตยกรรม & Backend Proxy</span>
              </button>

              <button
                onClick={() => setActiveSubChapter('ch5-widget')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] flex items-center gap-2 ${
                  activeSubChapter === 'ch5-widget'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4 shrink-0" />
                <span>บทที่ 5: ติดตั้ง Widget & Production Deploy</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUB-CHAPTER 4: SECURITY ARCHITECTURE & BACKEND PROXY
           ========================================================================= */}
        {activeSubChapter === 'ch4-backend' && (
          <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-200">
            
            {/* 1. Security Alert Callout */}
            <div className="rounded-2xl bg-amber-950/20 border border-amber-500/40 p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 shadow-lg shadow-amber-950/20">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-amber-200">
                  ทำไมถึงห้ามใส่ Gemini API Key ในโค้ด Frontend เด็ดขาด?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  โค้ด JavaScript ฝั่งหน้าบ้าน (เช่น React, Vue, HTML หรือ Next.js Client Components) จะถูกดาวน์โหลดและรันบนเบราว์เซอร์ของผู้เข้าชมเว็บไซต์ทุกคน ผู้ใช้สามารถกดปุ่ม <strong className="text-white">F12 &gt; Network Tab</strong> หรือดูโค้ดในแท็บ <strong className="text-white">Sources</strong> เพื่อดึง API Key ออกไปใช้งานได้ทันที หากกุญแจรั่วไหล โควต้าของคุณจะถูกขโมย หรืออาจเกิดบิลค่าบริการมหาศาลหากเปิดระบบ Billing ไว้!
                </p>
              </div>
            </div>

            {/* 2. 3-Tier Architecture Diagram */}
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">4.2 RECOMMENDED ARCHITECTURE</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  สถาปัตยกรรม 3 ระดับที่ปลอดภัย (3-Tier Architecture)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  การแยกหน้าที่ชัดเจนระหว่างเบราว์เซอร์ เซิร์ฟเวอร์ตัวกลาง และ Google Cloud AI
                </p>
              </div>

              {/* 3-Question Framework Highlights for Backend Proxy */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <div className="space-y-1">
                  <span className="text-purple-400 font-bold block">1. สิ่งนี้คืออะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    เซิร์ฟเวอร์คนกลาง (Express / Next.js API) ที่คอยรับคำขอจากหน้าเว็บ แล้วส่งต่อไปยัง Google Gemini API
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-indigo-400 font-bold block">2. จำเป็นต่อ Chatbot อย่างไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    ปกป้อง <strong>API Key</strong> ไม่ให้รั่วไหลไปกับโค้ด JavaScript หน้าบ้าน และเป็นจุดคัดกรองคำขอก่อนส่งให้ AI
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-emerald-400 font-bold block">3. ผู้เรียนต้องลงมือทำอะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    สร้าง API Route <code className="text-purple-300">/api/chat</code> อ่านค่า Key จาก <code>process.env</code> และส่งคำตอบแบบ JSON กลับไป
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative">
                
                {/* Tier 1: Client/Frontend */}
                <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-purple-500/40 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-400">TIER 01: CLIENT</span>
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">หน้าเว็บผู้ใช้งาน (Frontend)</h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>แสดงผลหน้าต่างแชท (Floating Widget)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>รับข้อความที่พิมพ์ แล้วส่ง <code className="text-purple-300 bg-slate-900 px-1 py-0.5 rounded">POST /api/chat</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>แสดงผลข้อความและ Typing Animation</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                    ✓ ปลอดภัย 100% ไม่มี API Key ในหน้านี้
                  </div>
                </div>

                {/* Tier 2: Backend Proxy Server */}
                <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border-2 border-indigo-500/60 shadow-xl shadow-indigo-950/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">TIER 02: PROXY</span>
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">เซิร์ฟเวอร์คนกลาง (Express)</h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>เก็บ <code className="text-indigo-300 bg-slate-900 px-1 py-0.5 rounded">GEMINI_API_KEY</code> ใน .env เซิร์ฟเวอร์</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>แนบ System Instructions และคุม Parameter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>จัดการ Rate Limiting ป้องกันคนยิงป่วน</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-mono">
                    ✓ กุญแจ API Key ถูกเก็บเป็นความลับสูงสุด
                  </div>
                </div>

                {/* Tier 3: Google Gemini Cloud */}
                <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">TIER 03: GOOGLE AI</span>
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">Google Cloud Gemini</h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>ประมวลผลข้อความด้วย Gemini 2.5 Flash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>คำนวณเหตุผลและสร้างคำตอบกลับมา</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>ส่งผลลัพธ์ผ่าน HTTPS กลับมาที่ Proxy</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                    Google Global Infrastructure
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Comprehensive Code Snippets Viewer */}
            <div className="rounded-2xl bg-[#0D1322] border border-slate-800 overflow-hidden shadow-2xl">
              
              {/* Tabs */}
              <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {INTEGRATION_CODE_EXAMPLES.map((example, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCodeIndex(idx)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors min-h-[36px] ${
                        activeCodeIndex === idx
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {example.title.split(' ')[1] || example.title}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handleCopy(activeExample.code)}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 self-end sm:self-auto"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400 font-semibold">คัดลอกสำเร็จ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 shrink-0" />
                      <span>คัดลอกโค้ด</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sub-header info */}
              <div className="px-4 py-2.5 sm:px-6 sm:py-3 bg-slate-950/70 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-400">
                <span className="font-mono text-purple-300">{activeExample.filename}</span>
                <span className="text-slate-500">{activeExample.description}</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-6 overflow-x-auto max-h-[500px]">
                <pre className="text-xs font-mono text-slate-200 leading-relaxed whitespace-pre">
                  <code>{activeExample.code}</code>
                </pre>
              </div>

            </div>

          </div>
        )}

        {/* =========================================================================
            SUB-CHAPTER 5: WIDGET INSTALLATION & PRODUCTION DEPLOY
           ========================================================================= */}
        {activeSubChapter === 'ch5-widget' && (
          <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-200">
            
            {/* 1. The 3 Methods of Installing on Websites */}
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">5.1 INSTALLATION OPTIONS</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  3 วิธีการนำ Chatbot ไปติดตั้งบนเว็บไซต์จริง
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  เลือกวิธีที่เหมาะสมกับเทคโนโลยีและสถาปัตยกรรมของเว็บไซต์ที่คุณกำลังพัฒนา
                </p>
              </div>

              {/* 3-Question Framework Highlights for Widget Installation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <div className="space-y-1">
                  <span className="text-purple-400 font-bold block">1. สิ่งนี้คืออะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    หน้าต่างแชท (Floating Widget) ที่ลอยอยู่มุมขวาล่างของเว็บไซต์เพื่อให้ผู้ใช้คลิกสนทนาได้ทันที
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-indigo-400 font-bold block">2. จำเป็นต่อ Chatbot อย่างไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    เป็นหน้าด่านเดียวที่ผู้ใช้สัมผัส ต้องเปิด-ปิดง่าย ตอบสนองลื่นไหล รองรับขนาดจอมือถือ และไม่บังปุ่มสั่งซื้อ
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-emerald-400 font-bold block">3. ผู้เรียนต้องลงมือทำอะไร?</span>
                  <p className="text-slate-300 leading-relaxed">
                    เลือกวิธีติดตั้งตามสแต็กของตน: React Component (เว็บ SPA), Script Tag (WordPress/HTML), หรือ iFrame
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                
                {/* Method 1: React Component */}
                <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-bold">
                      METHOD 01 · MODERN SPA
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">Custom React Component</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      สร้างคอมโพเนนต์ <code className="text-purple-300 bg-slate-900 px-1 py-0.5 rounded">&lt;ChatWidget /&gt;</code> แยกอิสระในโปรเจกต์ React, Next.js หรือ Vite ควบคุม UI, Theme, และ State ได้ยืดหยุ่นสูงสุด 100%
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-purple-300 font-mono">
                    ✓ ปรับแต่ง Animation & CSS ได้อย่างอิสระ
                  </div>
                </div>

                {/* Method 2: Script Tag Embed */}
                <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-bold">
                      METHOD 02 · CMS & HTML
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">Standalone Script Tag Embed</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      คอมไพล์โค้ด Widget เป็นไฟล์สคริปต์เดี่ยว <code className="text-indigo-300 bg-slate-900 px-1 py-0.5 rounded">widget.js</code> แล้วโฮสต์บน CDN ให้เจ้าของเว็บ WordPress, Wix, Shopify นำไปแปะแท็กเดียวใช้งานได้ทันที
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-indigo-300 font-mono">
                    ✓ แทรกโค้ดบรรทัดเดียว ไม่ต้องลงแพ็กเกจ
                  </div>
                </div>

                {/* Method 3: iFrame Sandbox */}
                <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      METHOD 03 · ZERO CONFLICT
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">iFrame Sandbox Isolation</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      โฮสต์หน้าต่างแชทไว้ที่ URL หนึ่ง แล้วฝังผ่านแท็ก <code className="text-emerald-300 bg-slate-900 px-1 py-0.5 rounded">&lt;iframe src=&quot;...&quot;&gt;</code> ปลอดภัย 100% จากปัญหาคลาส CSS ชนกับเว็บหลัก
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300 font-mono">
                    ✓ ป้องกัน CSS หรือ JS ชนกันโดยสิ้นเชิง
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Mobile Responsive & Touch Ergonomics */}
            <div className="rounded-2xl bg-[#0F162A] border border-slate-800 p-5 sm:p-7 space-y-5">
              <div className="flex items-center gap-2 text-purple-400">
                <Smartphone className="w-5 h-5 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  การทดสอบ Responsive และ Touch Ergonomics บนมือถือ
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">1. Touch Target &gt;= 44px</span>
                  <p className="text-slate-400 leading-relaxed">
                    ปุ่มลอยสำหรับเปิดแชท ปุ่มปิด และปุ่มส่งข้อความ ต้องมีขนาดไม่ต่ำกว่า 44x44 พิกเซลตามมาตรฐาน WCAG 2.1 เพื่อให้กดง่ายไม่พลาด
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">2. Virtual Keyboard Handling</span>
                  <p className="text-slate-400 leading-relaxed">
                    เมื่อผู้ใช้แตะช่องพิมพ์บนมือถือ แป้นพิมพ์เสมือนจะดันขึ้นมา ต้องใช้ <code className="text-purple-300">100dvh</code> เพื่อป้องกันไม่ให้ช่องพิมพ์โดนแป้นพิมพ์บัง
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">3. Zero Horizontal Scroll</span>
                  <p className="text-slate-400 leading-relaxed">
                    ตารางและโค้ดบล็อกต้องรองรับการเลื่อนแนวนอนภายในกล่องของตัวเอง (<code className="text-purple-300">overflow-x-auto</code>) ห้ามทำให้ทั้งหน้าจอโยกหลุดเฟรม
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Interactive 10-Point Production Readiness Checklist */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0F162A] to-[#0A0E1A] border border-slate-800 p-5 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-purple-400 font-bold">5.3 GO LIVE READY</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    10-Point Production Checklist (รายการตรวจสอบก่อนเผยแพร่จริง)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    คลิกเพื่อตรวจเช็กความพร้อมของระบบแชทบอทของคุณก่อนเปิดให้ผู้ใช้งานจริง
                  </p>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 self-start sm:self-auto">
                  ผ่านแล้ว {Object.values(checkedItems).filter(Boolean).length} จาก {PRODUCTION_CHECKLIST.length} ข้อ
                </div>
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PRODUCTION_CHECKLIST.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-purple-950/20 border-purple-500/40 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                          isChecked
                            ? 'bg-purple-600 border-purple-500 text-white'
                            : 'border-slate-700 bg-slate-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>

                      <div className="flex-1 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-semibold ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 inline-block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <span>🚀 แนะนำแพลตฟอร์ม Deploy ฟรีสำหรับนักศึกษา: Vercel, Netlify, หรือ Google Cloud Run</span>
                <a
                  href="#demo"
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>ไปทดลองคุยกับบอทของจริง</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
