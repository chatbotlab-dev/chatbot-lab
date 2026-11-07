import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  RotateCcw,
  Copy,
  Check,
  AlertCircle,
  Clock,
  KeyRound,
  WifiOff,
  Sparkles,
} from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
}

const DEFAULT_WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome-1',
  sender: 'bot',
  text: 'สวัสดีครับ! ยินดีต้อนรับสู่ **CHATBOT LAB Assistant** 🤖\n\nผมคือผู้ช่วย AI ประจำเว็บไซต์ CHATBOT LAB ออกแบบมาเพื่อเป็น **ระบบทดลองประกอบการเรียนรู้** สาธิตการเชื่อมต่อ AI Chatbot กับ Gemini 3.8 Flash ผ่าน Backend Proxy จริง\n\n*(หมายเหตุ: ระบบสาธิตนี้มีโควตาใช้งานชั่วคราว สำหรับการนำไปติดตั้งใช้งานจริงบนเว็บไซต์ของธุรกิจท่าน กรุณาใช้ Gemini API Key ของตนเองครับ)*\n\nคุณสามารถถามเกี่ยวกับการสร้าง AI Chatbot, System Instructions, พารามิเตอร์ หรือการนำไปติดตั้งบนเว็บไซต์ของคุณได้เลยครับ!',
  timestamp: 'ตอนนี้',
  suggestions: [
    'Google AI Studio คืออะไร?',
    'ขอตัวอย่าง System Instructions',
    'ทำไมห้ามเปิดเผย API Key ใน Frontend?',
    'วิธีรับ Gemini API Key ของตนเอง',
  ],
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isOpen,
  onToggle,
  externalPrompt,
  onClearExternalPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([DEFAULT_WELCOME_MESSAGE]);
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

  // Handle prompt passed from external cards/buttons in the page
  useEffect(() => {
    if (externalPrompt && externalPrompt.trim()) {
      handleSend(externalPrompt);
      if (onClearExternalPrompt) {
        onClearExternalPrompt();
      }
    }
  }, [externalPrompt]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    // Client-side length validation
    if (text.length > 2000) {
      const warningMsg: ChatMessage = {
        id: `warn-${Date.now()}`,
        sender: 'bot',
        text: '⚠️ ข้อความของคุณยาวเกินไป (เกิน 2,000 ตัวอักษร) กรุณากระชับข้อความให้สั้นลงแล้วส่งใหม่อีกครั้งครับ',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
      };
      setMessages((prev) => [...prev, warningMsg]);
      return;
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Prepare previous history for multi-turn context (excluding welcome & error messages)
    const validHistory = messages
      .filter((m) => !m.isError && m.id !== 'welcome-1')
      .slice(-14)
      .map((m) => ({
        role: m.sender === 'bot' ? ('model' as const) : ('user' as const),
        text: m.text,
      }));

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: validHistory,
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const rawText = await response.text();

      // Safely parse JSON if content exists
      let data: any = null;
      let parseError: Error | null = null;
      if (rawText && rawText.trim()) {
        try {
          data = JSON.parse(rawText);
        } catch (e: any) {
          parseError = e;
        }
      }

      // 1. Handle HTTP error statuses (4xx, 5xx)
      if (!response.ok) {
        console.error('[ChatWidget] Backend returned error status:', {
          status: response.status,
          statusText: response.statusText,
          contentType,
          errorPayload: data || (rawText ? rawText.slice(0, 150) : '<empty>'),
        });

        // 1.1 Specific handling for Gemini API Rate Limit (HTTP 429)
        if (response.status === 429 || data?.error === 'RATE_LIMIT_EXCEEDED') {
          const rateLimitMsg: ChatMessage = {
            id: `bot-ratelimit-${Date.now()}`,
            sender: 'bot',
            text: `⏳ **ขณะนี้ระบบทดลองใช้งานถึงขีดจำกัดชั่วคราวแล้ว เนื่องจากโควตา Gemini API ของระบบสาธิตเต็ม กรุณากลับมาทดลองใหม่ภายหลัง**\n\n*(💡 ข้อมูลสำหรับผู้เรียน: CHATBOT LAB เป็นเว็บไซต์เพื่อการเรียนรู้ หน้าต่างนี้มีไว้เพื่อสาธิตการเชื่อมต่อจริงเท่านั้น สำหรับการนำ Chatbot ไปติดตั้งใช้งานจริงบนเว็บไซต์ของธุรกิจท่าน กรุณาใช้ Gemini API Key ของตนเอง เพื่อรองรับปริมาณผู้ใช้ได้เต็มที่ครับ)*`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isError: true,
            errorType: 'rate_limit',
            suggestions: [
              'วิธีรับ Gemini API Key ของตนเอง',
              'ทำไมต้องมี Backend Proxy?',
              'ขั้นตอนสร้างใน Google AI Studio',
            ],
          };
          setMessages((prev) => [...prev, rateLimitMsg]);
          return;
        }

        // 1.2 Specific handling for Server API Key / Authentication (HTTP 401 / 403)
        if (
          response.status === 403 ||
          response.status === 401 ||
          data?.error === 'INVALID_API_KEY' ||
          data?.error === 'MISSING_API_KEY'
        ) {
          const authText = data?.message || 'การตรวจสอบสิทธิ์ API Key บนเซิร์ฟเวอร์ขัดข้อง';
          const authMsg: ChatMessage = {
            id: `bot-auth-err-${Date.now()}`,
            sender: 'bot',
            text: `🔑 **การตั้งค่า API Key บนเซิร์ฟเวอร์:**\n${authText}\n\n*(หมายเหตุ: ต้องตั้งค่า GEMINI_API_KEY ใน Environment Variables ของ Backend Proxy เพื่อความปลอดภัย)*`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isError: true,
            errorType: 'auth',
            suggestions: [
              'วิธีซ่อน Key ในไฟล์ .env',
              'ทำไมห้ามเปิดเผย API Key ใน Frontend?',
            ],
          };
          setMessages((prev) => [...prev, authMsg]);
          return;
        }

        // 1.3 General Server Error / Gateway Timeout (HTTP 500, 502, 503, 504)
        const serverErrorText =
          data?.message ||
          data?.error ||
          `เซิร์ฟเวอร์แจ้งข้อผิดพลาด (รหัสสถานะ: ${response.status}) กรุณาลองใหม่อีกครั้ง`;

        const errorMsg: ChatMessage = {
          id: `bot-srv-err-${Date.now()}`,
          sender: 'bot',
          text: `⚠️ **ข้อผิดพลาดจากเซิร์ฟเวอร์ (รหัส ${response.status}):**\n${serverErrorText}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true,
          errorType: 'server',
          suggestions: [
            'ขั้นตอนสร้างใน Google AI Studio',
            'ทำไมต้องมี Backend Proxy?',
          ],
        };
        setMessages((prev) => [...prev, errorMsg]);
        return;
      }

      // 2. HTTP Status is 200 OK, but response body was empty or failed JSON parsing
      if (!data) {
        console.error('[ChatWidget] HTTP 200 received but body is invalid JSON or empty:', {
          status: response.status,
          contentType,
          bodySnippet: rawText ? rawText.slice(0, 200) : '<EMPTY_BODY>',
          parseError: parseError?.message,
        });

        const errorMsg: ChatMessage = {
          id: `bot-err-${Date.now()}`,
          sender: 'bot',
          text:
            rawText.trim() === ''
              ? '⚠️ **ข้อผิดพลาด:** เซิร์ฟเวอร์ตอบกลับด้วยข้อมูลว่างเปล่า (Empty Body) กรุณาลองส่งใหม่อีกครั้ง'
              : '⚠️ **ข้อผิดพลาด:** เซิร์ฟเวอร์ตอบกลับข้อมูลที่ไม่ใช่รูปแบบ JSON ที่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true,
          errorType: 'server',
          suggestions: [
            'ขั้นตอนสร้างใน Google AI Studio',
            'ทำไมต้องมี Backend Proxy?',
          ],
        };
        setMessages((prev) => [...prev, errorMsg]);
        return;
      }

      // 3. HTTP Status is 200 OK, but payload contains an error object
      if (data.error && !data.reply) {
        console.error('[ChatWidget] HTTP 200 response contains error field:', data);
        const errorMsg: ChatMessage = {
          id: `bot-err-${Date.now()}`,
          sender: 'bot',
          text: `⚠️ **ข้อผิดพลาด:** ${data.message || data.error}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true,
          errorType: 'server',
          suggestions: [
            'ขั้นตอนสร้างใน Google AI Studio',
            'ทำไมต้องมี Backend Proxy?',
          ],
        };
        setMessages((prev) => [...prev, errorMsg]);
        return;
      }

      // 4. HTTP Status is 200 OK, validate that reply content is a non-empty string
      const replyContent = typeof data.reply === 'string' ? data.reply.trim() : '';
      if (!replyContent) {
        console.error('[ChatWidget] HTTP 200 response missing reply text:', data);
        const errorMsg: ChatMessage = {
          id: `bot-err-${Date.now()}`,
          sender: 'bot',
          text: '⚠️ **ข้อผิดพลาด:** เซิร์ฟเวอร์ตอบกลับเรียบร้อย แต่ไม่พบเนื้อหาข้อความตอบกลับ กรุณาลองส่งคำถามใหม่อีกครั้ง',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true,
          errorType: 'server',
          suggestions: [
            'ขั้นตอนสร้างใน Google AI Studio',
            'ทำไมต้องมี Backend Proxy?',
          ],
        };
        setMessages((prev) => [...prev, errorMsg]);
        return;
      }

      // 5. Success reply from Gemini API: { reply, codeSnippet, suggestions }
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        codeSnippet:
          typeof data.codeSnippet === 'string' && data.codeSnippet.trim()
            ? data.codeSnippet
            : undefined,
        suggestions:
          Array.isArray(data.suggestions) && data.suggestions.length > 0
            ? data.suggestions
            : undefined,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: unknown) {
      console.error('[ChatWidget] Network or fetch failure in /api/chat:', err);
      const networkErrorMsg: ChatMessage = {
        id: `bot-net-err-${Date.now()}`,
        sender: 'bot',
        text: '🌐 **การเชื่อมต่อล้มเหลว:** ไม่สามารถส่งคำขอไปยัง Backend Proxy ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตหรือสถานะของเซิร์ฟเวอร์',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
        errorType: 'network',
        suggestions: ['ขั้นตอนสร้างใน Google AI Studio'],
      };
      setMessages((prev) => [...prev, networkErrorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'เริ่มต้นบทสนทนาใหม่เรียบร้อยครับ! มีคำถามใดเกี่ยวกับการสร้างและติดตั้ง AI Chatbot ที่ต้องการให้ช่วยเหลือเพิ่มเติมไหมครับ? *(ระบบทดลองประกอบการเรียนรู้ · การใช้งานจริงต้องใช้ API Key ของตนเอง)*',
        timestamp: 'ตอนนี้',
        suggestions: [
          'ขั้นตอนสร้างใน Google AI Studio',
          'วิธีเชื่อมต่อ Chatbot กับเว็บไซต์',
          'การตั้งค่า Temperature',
          'วิธีรับ Gemini API Key ของตนเอง',
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

      {/* Floating Trigger Button (Bottom-Right) */}
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
                  <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-mono">
                    Gemini Live
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ระบบทดลองเรียนรู้ (Live Demo)</span>
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

          {/* Learning Demo Notice Banner */}
          <div className="bg-purple-950/40 border-b border-purple-500/20 px-3 py-1.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-purple-200 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="leading-tight">
              <strong>ระบบทดลองประกอบการเรียนรู้:</strong> การใช้งานจริงบนเว็บไซต์ต้องใช้ Gemini API ของผู้พัฒนาเอง
            </span>
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
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        msg.isError
                          ? msg.errorType === 'rate_limit'
                            ? 'bg-amber-950/80 border border-amber-500/40 text-amber-300'
                            : msg.errorType === 'auth'
                            ? 'bg-orange-950/80 border border-orange-500/40 text-orange-300'
                            : msg.errorType === 'network'
                            ? 'bg-sky-950/80 border border-sky-500/40 text-sky-300'
                            : 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
                          : 'bg-purple-900/60 border border-purple-500/30 text-purple-300'
                      }`}
                    >
                      {msg.isError ? (
                        msg.errorType === 'rate_limit' ? (
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                        ) : msg.errorType === 'auth' ? (
                          <KeyRound className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
                        ) : msg.errorType === 'network' ? (
                          <WifiOff className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />
                        ) : (
                          <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400" />
                        )
                      ) : (
                        <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      )}
                    </div>
                  )}

                  <div
                    className={`rounded-2xl p-3 sm:p-3.5 text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-xs'
                        : msg.isError
                        ? msg.errorType === 'rate_limit'
                          ? 'bg-amber-950/30 text-amber-100 border border-amber-500/40 rounded-tl-xs shadow-sm'
                          : msg.errorType === 'auth'
                          ? 'bg-orange-950/30 text-orange-100 border border-orange-500/40 rounded-tl-xs shadow-sm'
                          : msg.errorType === 'network'
                          ? 'bg-sky-950/30 text-sky-100 border border-sky-500/40 rounded-tl-xs shadow-sm'
                          : 'bg-rose-950/30 text-rose-200 border border-rose-500/40 rounded-tl-xs shadow-sm'
                        : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-xs shadow-sm'
                    }`}
                  >
                    {/* Category tag for error messages */}
                    {msg.isError && (
                      <div className="mb-1.5 flex items-center gap-1">
                        <span
                          className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md font-mono ${
                            msg.errorType === 'rate_limit'
                              ? 'bg-amber-900/60 text-amber-300 border border-amber-500/40'
                              : msg.errorType === 'auth'
                              ? 'bg-orange-900/60 text-orange-300 border border-orange-500/40'
                              : msg.errorType === 'network'
                              ? 'bg-sky-900/60 text-sky-300 border border-sky-500/40'
                              : 'bg-rose-900/60 text-rose-300 border border-rose-500/40'
                          }`}
                        >
                          {msg.errorType === 'rate_limit' && 'Rate Limit · ขีดจำกัดโควตาสาธิต'}
                          {msg.errorType === 'auth' && 'Authentication · สิทธิ์ API Key'}
                          {msg.errorType === 'network' && 'Network · การเชื่อมต่อ'}
                          {(!msg.errorType || msg.errorType === 'server') && 'Server Status · สถานะเซิร์ฟเวอร์'}
                        </span>
                      </div>
                    )}

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
                        msg.sender === 'user'
                          ? 'text-purple-200 text-right'
                          : msg.isError
                          ? msg.errorType === 'rate_limit'
                            ? 'text-amber-400/80 text-left'
                            : 'text-rose-400/80 text-left'
                          : 'text-slate-500 text-left'
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
                        disabled={isTyping}
                        onClick={() => {
                          if (!isTyping) {
                            handleSend(suggestion);
                          }
                        }}
                        className="text-[10px] sm:text-[11px] px-2.5 py-1.5 rounded-full bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-purple-300 hover:text-white transition-colors min-h-[30px] disabled:opacity-40 disabled:cursor-not-allowed"
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
                  <span className="ml-1 text-[10px] sm:text-[11px] text-slate-500 font-mono">
                    กำลังประมวลผลผ่าน Gemini API...
                  </span>
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
                if (isTyping) return;
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                disabled={isTyping}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  isTyping
                    ? 'AI กำลังประมวลผลคำตอบ กรุณารอสักครู่...'
                    : 'พิมพ์คำถามเกี่ยวกับ AI Chatbot...'
                }
                className="flex-1 bg-slate-900 border border-slate-800 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 rounded-xl px-3 sm:px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-all min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 disabled:cursor-not-allowed text-white transition-colors shrink-0 flex items-center justify-center"
                aria-label="ส่งข้อความ"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-[10px] text-slate-400 text-center mt-1.5 font-mono leading-tight">
              ระบบทดลองประกอบการเรียนรู้ (โควตาสาธิตจำกัด) · การใช้งานจริงต้องใช้ Gemini API ของผู้พัฒนาเอง
            </div>
          </div>

        </div>
      )}
    </>
  );
};
