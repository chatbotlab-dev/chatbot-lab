import React, { useState } from 'react';
import { INTEGRATION_CODE_EXAMPLES } from '../data/mockKnowledge';
import { ShieldAlert, Globe, Server, Cloud, ArrowRight, Copy, Check, Code2, Layers, CheckCircle2 } from 'lucide-react';

export const WebsiteIntegration: React.FC = () => {
  const [activeCodeIndex, setActiveCodeIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeExample = INTEGRATION_CODE_EXAMPLES[activeCodeIndex];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integration" className="py-14 sm:py-20 bg-[#0A0F1D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            03. สถาปัตยกรรมและการติดตั้ง
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            วิธีนำ AI Chatbot ไปติดตั้งบนเว็บไซต์
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            เข้าใจการแบ่งหน้าที่ระหว่าง Frontend และ Backend เพื่อความปลอดภัยสูงสุด พร้อมตัวอย่างโค้ดที่สามารถนำไปปรับใช้ได้ทันที
          </p>
        </div>

        {/* Security Alert Callout */}
        <div className="rounded-2xl bg-amber-950/20 border border-amber-500/30 p-4 sm:p-6 mb-12 sm:mb-16 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <h4 className="text-sm sm:text-base font-bold text-amber-200">
              กฎเหล็กด้านความปลอดภัย: ห้ามเปิดเผย API Key ใน Frontend โดยเด็ดขาด
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              โค้ด JavaScript ที่ทำงานบนเบราว์เซอร์ของผู้ใช้ (เช่น React, Vue, หรือไฟล์ HTML) เป็นพื้นที่สาธารณะ ทุกคนสามารถกดดูได้ผ่าน Developer Tools ดังนั้นการเรียกใช้งาน Gemini API จะต้องทำผ่าน <strong className="text-white font-medium">Backend Proxy Server</strong> เสมอ เพื่อปกป้องกุญแจ API Key และป้องกันการนำโควต้าของคุณไปใช้ในทางที่ผิด
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white">โครงสร้างการเชื่อมต่อที่ถูกต้อง (Recommended Architecture)</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">ข้อมูลเดินทางจากหน้าจอผู้ใช้ผ่าน Proxy สู่ระบบ AI อย่างปลอดภัย</p>
          </div>

          {/* 1 col on mobile, 3 cols on tablet & desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative">
            
            {/* Stage 1: Frontend */}
            <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 relative hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-purple-400">FRONTEND (CLIENT)</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">หน้าเว็บหรือแอพพลิเคชัน</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>ปุ่มลอย Chatbot Widget</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>รับข้อความที่ผู้ใช้พิมพ์และแสดงผลโต้ตอบ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>ส่ง Request ไปที่ <code className="text-purple-300 bg-slate-900 px-1 py-0.5 rounded break-all">/api/chat</code></span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-500 font-mono">
                No API Key needed here
              </div>
            </div>

            {/* Stage 2: Backend Proxy */}
            <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-indigo-500/40 relative shadow-lg shadow-indigo-950/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-indigo-400">BACKEND (PROXY)</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">เซิร์ฟเวอร์คนกลาง</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>เก็บ <code className="text-indigo-300 bg-slate-900 px-1 py-0.5 rounded break-all">GEMINI_API_KEY</code> ใน .env</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>ตรวจสอบสิทธิ์และกรองข้อความ (Rate Limiting)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>แนบ System Instructions และเรียก Gemini API</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] sm:text-[11px] text-emerald-400 font-mono">
                ✓ Secured with Environment Variable
              </div>
            </div>

            {/* Stage 3: Google Gemini API */}
            <div className="rounded-2xl bg-[#0F162A] p-5 sm:p-6 border border-slate-800 relative hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-emerald-400">GOOGLE AI ENGINE</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Gemini Model Cloud</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>โมเดล Gemini 2.5 Flash / 1.5 Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ประมวลผลคำตอบด้วยความเร็วสูง</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ส่งผลลัพธ์ข้อความกลับมายังเซิร์ฟเวอร์</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-500 font-mono">
                Google Cloud AI Infrastructure
              </div>
            </div>

          </div>
        </div>

        {/* 3 Methods for Installing on Website */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 sm:mb-16">
          <div className="rounded-xl bg-[#0E1528] p-4 sm:p-5 border border-slate-800">
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <Code2 className="w-4 h-4 shrink-0" />
              <h4 className="font-semibold text-white text-sm">1. Custom React Component</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              สร้าง Widget แยกเป็นคอมโพเนนต์อิสระ เช่น <code className="text-purple-300">ChatWidget.tsx</code> เหมาะกับเว็บที่ใช้ React, Next.js หรือ Vite ปรับแต่งสไตล์และควบคุม State ได้อิสระสูงสุด
            </p>
          </div>

          <div className="rounded-xl bg-[#0E1528] p-4 sm:p-5 border border-slate-800">
            <div className="flex items-center gap-2 text-indigo-400 mb-2">
              <Layers className="w-4 h-4 shrink-0" />
              <h4 className="font-semibold text-white text-sm">2. Script Tag Embed</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              แพ็คโค้ด Widget เป็นสคริปต์ไฟล์เดียว (.js) โฮสต์ไว้บน CDN ให้เจ้าของเว็บทั่วไป (WordPress, Shopify, Webflow) แทรก <code className="text-indigo-300">&lt;script src=&quot;...&quot;&gt;</code> บรรทัดเดียวก็ใช้ได้ทันที
            </p>
          </div>

          <div className="rounded-xl bg-[#0E1528] p-4 sm:p-5 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Globe className="w-4 h-4 shrink-0" />
              <h4 className="font-semibold text-white text-sm">3. iFrame Sandbox</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              โฮสต์หน้าต่างแชทไว้ที่หน้าเว็บของตัวเอง แล้วฝังผ่านแท็ก <code className="text-emerald-300">&lt;iframe&gt;</code> ปลอดภัยจากปัญหา CSS ชนกันระหว่างหน้าเว็บหลักกับแชทบอท
            </p>
          </div>
        </div>

        {/* Tabbed Code Snippet Viewer */}
        <div className="rounded-2xl bg-[#0D1322] border border-slate-800 overflow-hidden shadow-2xl">
          {/* Code Viewer Header */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {INTEGRATION_CODE_EXAMPLES.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCodeIndex(idx)}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 min-h-[36px] ${
                    activeCodeIndex === idx
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{example.title}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleCopy(activeExample.code)}
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1.5 self-end sm:self-auto transition-colors min-h-[36px] px-2.5 py-1 rounded-lg hover:bg-slate-800/60"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400">คัดลอกโค้ดสำเร็จ</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 shrink-0" />
                  <span>คัดลอกโค้ด</span>
                </>
              )}
            </button>
          </div>

          {/* Description bar */}
          <div className="px-4 py-2.5 sm:px-6 sm:py-3 bg-slate-950/60 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-400">
            <span className="font-mono text-purple-300 text-[11px] sm:text-xs">{activeExample.filename}</span>
            <span className="text-[11px] text-slate-500">{activeExample.description}</span>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <pre className="text-xs font-mono text-slate-200 leading-relaxed whitespace-pre overflow-x-auto">
              <code>{activeExample.code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
