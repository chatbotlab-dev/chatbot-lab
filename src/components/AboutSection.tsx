import React from 'react';
import { Info, Code2, GraduationCap, User, Layers, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#090D18] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            05. ข้อมูลโครงงาน
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            เกี่ยวกับ CHATBOT LAB
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            โครงงานเพื่อการศึกษาและเผยแพร่องค์ความรู้เทคโนโลยี AI สำหรับการพัฒนาแชทบอทและการประยุกต์ใช้งานจริง
          </p>
        </div>

        {/* Project Objectives & Tech Stack - 1 col on mobile/tablet, 12-col split on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Left: Project Background */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0F162A] p-5 sm:p-7 border border-slate-800 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-purple-400">
              <Info className="w-5 h-5 shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-white">วัตถุประสงค์ของโครงงาน</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              เว็บไซต์ <strong>CHATBOT LAB</strong> ถูกสร้างขึ้นเพื่อเป็นแหล่งเรียนรู้แบบ Single Page Application (SPA) ที่รวบรวมเนื้อหาเชิงปฏิบัติการเกี่ยวกับการพัฒนา AI Chatbot ตั้งแต่ระดับพื้นฐานจนถึงการประยุกต์ใช้งานบนระบบจริง โดยมุ่งเน้น:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>การทำความเข้าใจความสามารถและการตั้งค่าใน <strong>Google AI Studio</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>การออกแบบ <strong>System Instructions</strong> อย่างมีหลักการเพื่อควบคุมคุณภาพการตอบ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>การวางสถาปัตยกรรมความปลอดภัย (Security Best Practice) โดยไม่เปิดเผย API Key ฝั่งหน้าบ้าน</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>การสร้าง Component หน้าต่างแชท (Floating Widget) ที่รองรับทั้ง Desktop และ Mobile</span>
              </li>
            </ul>
          </div>

          {/* Right: Technologies Used */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0F162A] p-5 sm:p-7 border border-slate-800 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-indigo-400">
              <Layers className="w-5 h-5 shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-white">เทคโนโลยีที่ใช้พัฒนา</h3>
            </div>
            
            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">React 19 & TypeScript</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Core App</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">Tailwind CSS (v4)</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Responsive UI</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">Google AI Studio & Gemini</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">AI Foundation</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">Lucide React & Motion</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Icons & States</span>
              </div>
            </div>
          </div>

        </div>

        {/* Reserved Placeholders for Creators & Advisor */}
        <div className="rounded-2xl bg-[#0D1324] border border-purple-900/30 p-5 sm:p-7 lg:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
                <span>ผู้จัดทำและอาจารย์ที่ปรึกษา</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                (เว้นพื้นที่ไว้สำหรับการกรอกข้อมูลจริงของคณะผู้จัดทำโครงงาน)
              </p>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-800/80 text-[11px] text-slate-300 font-mono self-start sm:self-auto border border-slate-700">
              พื้นที่สงวนสำหรับข้อมูลโครงงาน
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Student Creators Card Placeholder */}
            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/70 border border-dashed border-slate-700/80 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-purple-400">
                <User className="w-4 h-4 shrink-0" />
                <h4 className="text-xs sm:text-sm font-bold text-white">ผู้จัดทำโครงงาน (Students / Creators)</h4>
              </div>

              <div className="space-y-2.5 sm:space-y-3 text-xs text-slate-300">
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">ชื่อ - นามสกุล:</span>
                  <span className="text-slate-300 font-medium">[ ระบุชื่อ-นามสกุล ผู้จัดทำคนที่ 1 ]</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">รหัสนักศึกษา:</span>
                  <span className="text-slate-400">[ ระบุรหัสนักศึกษา ]</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">สาขาวิชา / ภาควิชา:</span>
                  <span className="text-slate-400">[ ระบุสาขาวิชาและคณะ ]</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">สถาบันการศึกษา:</span>
                  <span className="text-slate-400">[ ระบุมหาวิทยาลัย / สถาบัน ]</span>
                </div>
              </div>
            </div>

            {/* Advisor Card Placeholder */}
            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/70 border border-dashed border-slate-700/80 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-indigo-400">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <h4 className="text-xs sm:text-sm font-bold text-white">อาจารย์ที่ปรึกษา (Advisor)</h4>
              </div>

              <div className="space-y-2.5 sm:space-y-3 text-xs text-slate-300">
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">ชื่อ - สกุล อาจารย์ที่ปรึกษา:</span>
                  <span className="text-slate-300 font-medium">[ ระบุชื่อ-นามสกุล อาจารย์ที่ปรึกษาโครงงาน ]</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">ตำแหน่งทางวิชาการ:</span>
                  <span className="text-slate-400">[ ระบุตำแหน่งทางวิชาการ ]</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">ภาควิชา / คณะ:</span>
                  <span className="text-slate-400">[ ระบุภาควิชาและคณะ ]</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">สถานะโครงงาน:</span>
                  <span className="text-emerald-400 font-medium">อยู่ในระหว่างการพัฒนาและทดสอบระบบ</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
