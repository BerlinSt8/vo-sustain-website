'use client';

import { useState, useRef, useEffect, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Spline = lazy(() => import('@splinetool/react-spline/next'));

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const LABELS = {
  de: {
    greeting: 'Hallo! Ich bin Fördinand. Erzähl mir von eurem Vorhaben – vielleicht gibt es da Fördermöglichkeiten.',
    placeholder: 'Schreib einfach los...',
    send: 'Senden',
    title: 'Fördinand',
    subtitle: 'Euer Förder-Begleiter',
    quickCheck: 'Quick-Check starten',
    errorMsg: 'Hm, da ist was schiefgelaufen. Probier es nochmal.',
    close: 'Schliessen',
  },
  en: {
    greeting: "Hi! I'm Fördinand. Tell me about your project – there might be funding options for you.",
    placeholder: 'Just start typing...',
    send: 'Send',
    title: 'Fördinand',
    subtitle: 'Your grant companion',
    quickCheck: 'Start Quick-Check',
    errorMsg: 'Hmm, something went wrong. Give it another try.',
    close: 'Close',
  },
};

const SPLINE_SCENE = 'https://prod.spline.design/0fnie1FxSKy58982/scene.splinecode';

// ─── Chat Widget ─────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const { lang } = useLanguage();
  const labels = lang === 'en' ? LABELS.en : LABELS.de;

  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: labels.greeting }]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [splineReady, setSplineReady] = useState(false);
  const [isTouch, setIsTouch]   = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);
  const abortRef       = useRef<AbortController | null>(null);
  const splineRef      = useRef<unknown>(null);

  // ── Detect touch devices ──
  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  // ── Chat scroll / focus / lang ──
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300); }, [open]);
  useEffect(() => { setMessages([{ role: 'assistant', content: labels.greeting }]); }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Emit event to Spline when chat opens/closes ──
  useEffect(() => {
    const app = splineRef.current as { emitEvent?: (event: string, name: string) => void } | null;
    if (app?.emitEvent) {
      try {
        app.emitEvent(open ? 'mouseDown' : 'mouseUp', 'Robot');
      } catch { /* ignore if object not found */ }
    }
  }, [open]);

  // ── Send message ──
  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    abortRef.current = new AbortController();
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, lang }),
        signal: abortRef.current.signal,
      });
      if (!res.ok || !res.body) throw new Error('Network error');
      const reader  = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: assistantText };
          return updated;
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setMessages(prev => [...prev, { role: 'assistant', content: labels.errorMsg }]);
      }
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, lang, labels.errorMsg]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSplineLoad = useCallback((splineApp: any) => {
    splineRef.current = splineApp;
    setSplineReady(true);

    // Listen for mouse clicks on the Robot object in Spline → toggle chat
    try {
      splineApp.addEventListener('mouseDown', (e: { target?: { name?: string } }) => {
        if (e.target?.name === 'Robot') {
          setOpen(prev => !prev);
        }
      });
    } catch { /* Spline event API may vary */ }
  }, []);

  return (
    <>
      {/* ── Chat Panel (fixed bottom-right) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-36 right-4 sm:right-6 z-[52] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col"
            style={{
              background: 'rgba(11,22,34,0.87)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(39,174,96,0.25)',
              borderRadius: '20px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(39,174,96,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'rgba(39,174,96,0.2)' }}>
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#27AE60]/20 flex items-center justify-center">
                  <span className="text-sm">&#x1F916;</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#27AE60] border-2 border-[#0B1622]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#F0F2F4] text-sm font-semibold font-montserrat leading-tight">{labels.title}</p>
                <p className="text-[#27AE60] text-xs leading-tight">{labels.subtitle}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[#8E9BAA] hover:text-[#F0F2F4] hover:bg-white/5 transition-colors"
                aria-label={labels.close}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#27AE60] text-white rounded-br-sm' : 'text-[#C8D0D8] rounded-bl-sm'}`}
                    style={msg.role === 'assistant' ? { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' } : {}}
                  >
                    {msg.content || (
                      <span className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-bounce [animation-delay:300ms]" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {loading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-2xl rounded-bl-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick-Check CTA */}
            <div className="px-4 pb-2">
              <a
                href="/#quick-check"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-2 rounded-xl text-xs font-semibold text-[#27AE60] transition-colors hover:text-[#2ECC71]"
                style={{ background: 'rgba(39,174,96,0.08)', border: '1px solid rgba(39,174,96,0.2)' }}
              >
                {labels.quickCheck}
              </a>
            </div>

            {/* Input */}
            <div className="px-3 pb-3 pt-2 border-t" style={{ borderColor: 'rgba(39,174,96,0.15)' }}>
              <div className="flex gap-2 items-end rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={labels.placeholder}
                  rows={1}
                  disabled={loading}
                  className="flex-1 bg-transparent text-[#F0F2F4] text-sm placeholder-[#5A6470] resize-none outline-none leading-relaxed"
                  style={{ maxHeight: '80px' }}
                  onInput={e => {
                    const el = e.currentTarget;
                    el.style.height = 'auto';
                    el.style.height = `${Math.min(el.scrollHeight, 80)}px`;
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#27AE60] flex items-center justify-center transition-all hover:bg-[#2ECC71] disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label={labels.send}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11 1L5.5 6.5M11 1L7 11L5.5 6.5M11 1L1 5l4.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 3D Spline R4X Bot — Full viewport canvas for cursor-following ── */}
      {!isTouch && (
        <div
          className="fixed inset-0 z-50"
          style={{
            pointerEvents: 'none',
            opacity: splineReady ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          <Suspense fallback={null}>
            <Spline
              scene={SPLINE_SCENE}
              onLoad={handleSplineLoad}
              style={{
                width: '100vw',
                height: '100vh',
                pointerEvents: 'auto',
              }}
            />
          </Suspense>
        </div>
      )}

      {/* ── Touch fallback: static bot button ── */}
      {isTouch && (
        <button
          onClick={() => setOpen(prev => !prev)}
          className="fixed bottom-4 right-4 z-50 w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(39,174,96,0.2) 0%, rgba(11,22,34,0.9) 70%)',
            border: '2px solid rgba(39,174,96,0.4)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
          aria-label={open ? labels.close : labels.title}
          aria-expanded={open}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              {/* Simple bot face for mobile */}
              <circle cx="16" cy="18" r="12" fill="#0B1622" stroke="#27AE60" strokeWidth="1.5" />
              <circle cx="16" cy="10" r="8" fill="#0B1622" stroke="#27AE60" strokeWidth="1.5" />
              <circle cx="12.5" cy="10" r="2" fill="#27AE60" />
              <circle cx="19.5" cy="10" r="2" fill="#27AE60" />
              <path d="M13 14 Q16 16 19 14" stroke="#27AE60" strokeWidth="1" strokeLinecap="round" fill="none" />
              <line x1="16" y1="2" x2="16" y2="0" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="16" cy="0" r="1.5" fill="#27AE60" />
            </svg>
          </motion.div>
        </button>
      )}

      {/* ── Loading indicator (before Spline loads) ── */}
      {!splineReady && !isTouch && (
        <div className="fixed bottom-6 right-6 z-50">
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(39,174,96,0.15) 0%, rgba(11,22,34,0.8) 70%)',
              border: '1.5px solid rgba(39,174,96,0.3)',
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#27AE60]/40" />
          </motion.div>
        </div>
      )}
    </>
  );
}
