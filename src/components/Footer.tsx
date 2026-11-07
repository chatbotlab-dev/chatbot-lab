import React from 'react';
import { Bot, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 py-8 sm:py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-800/60 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight">
                CHATBOT<span className="text-purple-400 font-semibold ml-1">LAB</span>
              </span>
              <p className="text-[11px] text-slate-500">Learn, Build, Integrate AI Chatbot</p>
            </div>
          </div>

          {/* Nav mirror */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <a href="#intro" className="hover:text-purple-400 transition-colors py-1">บทนำ</a>
            <a href="#tutorial" className="hover:text-purple-400 transition-colors py-1">คู่มือ AI Studio</a>
            <a href="#integration" className="hover:text-purple-400 transition-colors py-1">การติดตั้งบนเว็บ</a>
            <a href="#demo" className="hover:text-purple-400 transition-colors py-1">ห้องทดลองสด</a>
            <a href="#about" className="hover:text-purple-400 transition-colors py-1">เกี่ยวกับเรา</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors min-h-[38px] active:scale-95"
          >
            <span>กลับขึ้นด้านบน</span>
            <ArrowUp className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} CHATBOT LAB. พัฒนาขึ้นเพื่อการศึกษาและการทดลองเทคโนโลยี AI</p>
          <p>สงวนลิขสิทธิ์สำหรับการเผยแพร่องค์ความรู้เทคโนโลยี</p>
        </div>
      </div>
    </footer>
  );
};
