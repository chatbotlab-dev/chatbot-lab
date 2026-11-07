import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, RotateCcw, Sparkles, Copy, Check, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateSimulatedReply } from '../data/chatbotSimulation';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isOpen,
  onToggle,
  externalPrompt,
  onClearExternalPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'สวัสดีครับ! ยินดีต้อนรับสู่ **CHATBOT LAB Assistant** 🤖\n\nผมคือผู้ช่วยจำลองสำหรับการเรียนรู้ คุณสามารถถามเกี่ยวกับการใช้งาน Google AI Studio, การเขียน System Instructions หรือการนำ Chatbot ไปติดตั้งบนเว็บไซต์ได้เลยครับ!',
      timestamp: 'ตอนนี้',
      suggestions: [
        'Google AI Studio คืออะไร?',
        'ขอตัวอย่าง System Instructions',
        'ทำไมห้ามเปิดเผย API Key ใน Frontend?',
      ],
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  // Handle prompt passed from external cards
  useEffect(() => {
    if (externalPrompt && externalPrompt.trim()) {
      handleSend(externalPrompt);
      if (onClearExternalPrompt) {
        onClearExternalPrompt();
      }
    }
  }, [externalPrompt]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const replyData = generateSimulatedReply(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        codeSnippet: replyData.codeSnippet,
        suggestions: replyData.suggestions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'เริ่มต้นบทสนทนาใหม่แล้วครับ! มีหัวข้อใดใน CHATBOT LAB ที่อยากให้ผมช่วยเหลือเพิ่มเติมไหมครับ?',
        timestamp: 'ตอนนี้',
        suggestions: [
          'ขั้นตอนสร้างใน Google AI Studio',
          'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
          'การตั้งค่า Temperature',
        ],
      },
    ]);
  };

  const copyCode = (snippet: string, id: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay (closes chat on outside click) */}
      {isOpen && (
        <div
          onClick={onToggle}
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 sm:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Floating Trigger Button (Bottom-Right) - hidden on mobile when chat is open to avoid covering input */}
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${isOpen ? 'hidden sm:block' : 'block'}`}>
        <button
          onClick={onToggle}
          aria-label={isOpen ? 'ปิดหน้าต่างสนทนา' : 'เปิดหน้าต่างสนทนา AI'}
          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white shadow-2xl shadow-purple-900/60 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center group min-w-[48px] min-h-[48px] ${
            isOpen ? 'rotate-90' : 'hover:shadow-purple-600/40'
          }`}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform" />
          ) : (
            <>
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 transition-transform" />
              {/* Subtle pulsing ping ring */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window Container */}
      {isOpen && (
        <div className="fixed inset-x-2.5 bottom-2.5 top-16 sm:inset-auto sm:bottom-24 sm:right-6 sm:top-auto z-50 w-auto sm:w-[420px] h-auto sm:h-[580px] sm:max-h-[calc(100dvh-7.5rem)] flex flex-col rounded-2xl bg-[#0B0F1C]/98 backdrop-blur-2xl border border-purple-500/40 shadow-2xl shadow-purple-950/60 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    CHATBOT LAB Assistant
                  </h3>
                  <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full bg-purple-900/60 text-purple-300 font-mono">
                    AI Demo
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>พร้อมให้คำปรึกษา</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="เริ่มบทสนทนาใหม่"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="เริ่มบทสนทนาใหม่"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                title="ปิดหน้าต่าง"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="ปิดหน้าต่างสนทนา"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div className="flex items-start gap-1.5 sm:gap-2 max-w-[92%] sm:max-w-[86%]">
                  {msg.sender === 'bot' && (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  )}

                  <div
                    className={`rounded-2xl p-3 sm:p-3.5 text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-xs'
                        : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-xs shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line font-sans space-y-1">
                      {msg.text}
                    </div>

                    {/* Optional Code Snippet inside message */}
                    {msg.codeSnippet && (
                      <div className="mt-2.5 rounded-lg bg-slate-950 p-2.5 border border-slate-800 text-[10px] sm:text-[11px] font-mono relative">
                        <div className="flex items-center justify-between text-slate-400 pb-1 mb-1 border-b border-slate-800">
                          <span className="text-[10px] text-purple-400 font-semibold">ตัวอย่างโค้ด:</span>
                          <button
                            onClick={() => copyCode(msg.codeSnippet!, msg.id)}
                            className="hover:text-white flex items-center gap-1 text-[10px] min-h-[28px] px-1.5 py-0.5 rounded"
                          >
                            {copiedSnippetId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span className="text-emerald-400">คัดลอกแล้ว</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 shrink-0" />
                                <span>คัดลอก</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap break-words">
                          {msg.codeSnippet}
                        </pre>
                      </div>
                    )}

                    <div
                      className={`text-[9px] sm:text-[10px] mt-1.5 ${
                        msg.sender === 'user' ? 'text-purple-200 text-right' : 'text-slate-500 text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>

                {/* Optional Suggestions */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2 ml-6 sm:ml-8 flex flex-wrap gap-1.5">
                    {msg.suggestions.map((suggestion, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSend(suggestion)}
                        className="text-[10px] sm:text-[11px] px-2.5 py-1.5 rounded-full bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-purple-300 hover:text-white transition-colors min-h-[30px]"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                  <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl rounded-tl-xs bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  />
                  <span className="ml-1 text-[10px] sm:text-[11px] text-slate-500 font-mono">กำลังประมวลผล...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar - strictly anchored & touch friendly */}
          <div className="p-2.5 sm:p-3 bg-slate-950/95 border-t border-slate-800 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="พิมพ์คำถามเกี่ยวกับ AI Chatbot..."
                className="flex-1 bg-slate-900 border border-slate-800 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 rounded-xl px-3 sm:px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-all min-h-[44px]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 text-white transition-colors shrink-0 flex items-center justify-center"
                aria-label="ส่งข้อความ"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-[10px] text-slate-500 text-center mt-1.5 font-mono">
              ข้อมูลจำลองสำหรับการเรียนรู้ · ปลอดภัย ไม่เผยแพร่ Key
            </div>
          </div>

        </div>
      )}
    </>
  );
};
