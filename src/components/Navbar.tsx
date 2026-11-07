import React, { useState, useEffect } from 'react';
import {
  Bot,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Cpu,
  Layers,
  HelpCircle,
  Info,
  ExternalLink,
  BookOpen,
  Terminal,
  ShieldCheck,
} from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Prevent background scrolling when hamburger drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    {
      href: '#intro',
      num: 'บทที่ 1',
      label: 'พื้นฐาน & Google AI Studio',
      sublabel: 'Gen AI ทำงานอย่างไร และทัวร์ UI AI Studio',
      icon: MessageSquare,
    },
    {
      href: '#tutorial',
      num: 'บทที่ 2-3',
      label: 'Prompt, Instructions & API Key',
      sublabel: '4 เสาหลักคำสั่งระบบ, Few-Shot และ Parameters',
      icon: Terminal,
    },
    {
      href: '#integration',
      num: 'บทที่ 4-5',
      label: 'Backend Proxy & การติดตั้งบนเว็บ',
      sublabel: 'ซ่อน API Key, Express Server และ Checklist Go-Live',
      icon: Layers,
    },
    {
      href: '#demo',
      num: 'Live Demo',
      label: 'ห้องทดลองสนทนาสด',
      sublabel: 'ทดสอบถามตอบกับ AI Assistant จำลองบนเว็บจริง',
      icon: Bot,
    },
    {
      href: '#about',
      num: 'About',
      label: 'ข้อมูลโครงงาน & ผู้จัดทำ',
      sublabel: 'วัตถุประสงค์ เทคโนโลยี และพื้นที่ข้อมูลโครงงาน',
      icon: Info,
    },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090D16]/95 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-black/30 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#090D16]/95 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-extrabold tracking-tight">
                CHATBOT<span className="text-purple-400 font-semibold ml-1 sm:ml-1.5">LAB</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links (Desktop Quick Access) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-slate-300">
              <a
                href="#intro"
                className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                บทที่ 1: AI Studio
              </a>
              <a
                href="#tutorial"
                className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                บทที่ 2-3: Prompt & Parameters
              </a>
              <a
                href="#integration"
                className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                บทที่ 4-5: Backend & Deploy
              </a>
              <a
                href="#demo"
                className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                ห้องทดลองสด
              </a>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                เกี่ยวกับเรา
              </a>
            </nav>

            {/* Zone 3: Primary Action & Hamburger Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Primary CTA */}
              <button
                onClick={onOpenChat}
                className="hidden sm:inline-flex px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-purple-600/25 active:scale-95 items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 min-h-[38px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                <span>ทดลอง Chatbot</span>
              </button>

              {/* Hamburger Menu Toggle Button (Accessible on ALL devices) */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 sm:px-3 sm:py-2 text-slate-200 hover:text-white rounded-xl transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center gap-2 border ${
                  isMenuOpen
                    ? 'bg-purple-950/80 border-purple-500/50 text-white shadow-md shadow-purple-950/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 hover:border-purple-500/40'
                }`}
                aria-label={isMenuOpen ? 'ปิดเมนูนำทาง' : 'เปิดเมนูนำทาง Hamburger'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-purple-300" />
                ) : (
                  <Menu className="w-5 h-5 text-purple-400" />
                )}
                <span className="text-xs font-semibold hidden md:inline">
                  {isMenuOpen ? 'ปิด' : 'สารบัญ'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hamburger Drawer Overlay & Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          
          {/* Backdrop blur */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-out Drawer Panel */}
          <div className="relative w-full max-w-md bg-[#0A0E1C] border-l border-purple-500/30 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-slate-800/80 flex items-center justify-between bg-gradient-to-r from-purple-950/40 to-transparent">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    CHATBOT LAB
                  </h3>
                  <span className="text-[11px] text-purple-400 font-mono">
                    สารบัญหลักสูตร 5 บทเรียน
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="ปิดเมนู"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="p-5 sm:p-6 space-y-2.5 flex-1">
              <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider block mb-3 px-1">
                เลือกบทเรียนที่ต้องการศึกษา
              </span>

              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left p-3.5 rounded-xl bg-slate-900/50 hover:bg-purple-950/30 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-200 flex items-start gap-3.5 group min-h-[56px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 group-hover:scale-105 flex items-center justify-center shrink-0 mt-0.5 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                        <span className="text-[11px] font-mono text-purple-400/80 font-bold">
                          {item.num}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.sublabel}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-5 sm:p-6 border-t border-slate-800/80 bg-slate-950/60 space-y-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 min-h-[46px] active:scale-95"
              >
                <Bot className="w-4 h-4" />
                <span>เปิดหน้าต่างสนทนา AI Chatbot</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1 font-mono">
                <span>5-Chapter AI Masterclass</span>
                <span>Google AI Studio</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
