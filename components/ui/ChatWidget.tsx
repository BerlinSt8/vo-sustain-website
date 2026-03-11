'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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

// ─── Home position (bottom-right corner) ─────────────────────────────────────
const DESKTOP_BOT_SIZE = 140;
const MOBILE_BOT_SIZE = 90;
const HOME_MARGIN = 16; // distance from edge

function getHomePos(botSize: number) {
  if (typeof window === 'undefined') return { x: 0, y: 0 };
  return {
    x: window.innerWidth - botSize - HOME_MARGIN,
    y: window.innerHeight - botSize - HOME_MARGIN,
  };
}

// ─── 3D Fördinand Bot — PNG render with CSS 3D parallax + eye tracking ───────
function FordinandBot({
  eyeX, eyeY, headRotate, isHovered, proximity,
}: {
  eyeX: number; eyeY: number; headRotate: number; isHovered: boolean; proximity: number;
}) {
  // Head tilt — transform-origin at neck (~58% from top) so it looks like head movement
  const headTiltX = -eyeY * 6;     // vertical nod (less aggressive)
  const headTiltY = eyeX * 10;     // horizontal turn
  const headTiltZ = headRotate * 0.5; // subtle head cock (Z-rotation from headRotate)

  // Body has its own subtle sway — much less than head, slight delay feel
  const bodySwayY = eyeX * 3;      // body leans slightly toward cursor
  const bodySwayX = -eyeY * 2;

  const glowIntensity = 0.15 + proximity * 0.4;
  const scale = isHovered ? 1.08 : 1;

  return (
    <div
      className="relative"
      style={{
        width: 120,
        height: 130,
        perspective: '600px',
        perspectiveOrigin: '50% 35%',
      }}
    >
      {/* Ambient verde glow behind bot */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 45%, rgba(39,174,96,${glowIntensity}) 0%, transparent 70%)`,
          filter: 'blur(12px)',
          transform: 'scale(1.3)',
          transition: 'all 0.4s ease',
        }}
      />

      {/* Body layer — subtle sway, pivot from bottom */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `rotateX(${bodySwayX}deg) rotateY(${bodySwayY}deg) scale(${scale})`,
          transition: 'transform 0.25s ease-out',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 85%', // pivot near feet — body rocks gently
        }}
      >
        {/* Head layer — stronger tilt, pivot at neck */}
        <div
          style={{
            width: '100%',
            height: '100%',
            transform: `rotateX(${headTiltX}deg) rotateY(${headTiltY}deg) rotateZ(${headTiltZ}deg)`,
            transition: 'transform 0.12s ease-out',
            transformStyle: 'preserve-3d',
            transformOrigin: '50% 58%', // neck pivot — head tilts from here
          }}
        >
          {/* Bot image — transparent, floating freely */}
          <picture>
            <source srcSet="/fordinand-bot.webp" type="image/webp" />
            <img
              src="/fordinand-bot.png"
              alt="Fördinand"
              width={130}
              height={130}
              className="relative z-10 pointer-events-none select-none"
              style={{
                filter: `drop-shadow(0 6px 16px rgba(0,0,0,0.5)) drop-shadow(0 0 ${10 + proximity * 20}px rgba(39,174,96,${0.12 + proximity * 0.25}))`,
                transition: 'filter 0.3s ease',
              }}
              draggable={false}
            />
          </picture>

          {/* Eye tracking overlay — catchlights on pupils, follow cursor */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              // Left eye — maximum movement range for clearly visible tracking
              left: `${48 + eyeX * 16}px`,
              top: `${47 + eyeY * 12}px`,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 35%, rgba(46,204,113,0.35) 65%, transparent 100%)',
              transition: 'left 0.05s ease-out, top 0.05s ease-out',
              opacity: 0.8 + proximity * 0.2,
            }}
          />
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              // Right eye — mirrors left eye movement
              left: `${74 + eyeX * 16}px`,
              top: `${47 + eyeY * 12}px`,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 35%, rgba(46,204,113,0.35) 65%, transparent 100%)',
              transition: 'left 0.05s ease-out, top 0.05s ease-out',
              opacity: 0.8 + proximity * 0.2,
            }}
          />
        </div>
      </div>

      {/* Chest LED pulse — verde heartbeat */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          left: '50%',
          top: '65%',
          width: 8,
          height: 8,
          marginLeft: -4,
          borderRadius: '50%',
          background: '#27AE60',
          boxShadow: `0 0 ${6 + proximity * 10}px rgba(39,174,96,${0.4 + proximity * 0.4}), 0 0 ${12 + proximity * 20}px rgba(39,174,96,${0.2 + proximity * 0.2})`,
          animation: 'fordinand-pulse 2.2s ease-in-out infinite',
          opacity: 0.6 + proximity * 0.3,
        }}
      />

      <style jsx>{`
        @keyframes fordinand-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.4); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

// ─── Chat Widget ─────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const { lang } = useLanguage();
  const labels = lang === 'en' ? LABELS.en : LABELS.de;

  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: labels.greeting }]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const botSize = isMobile ? MOBILE_BOT_SIZE : DESKTOP_BOT_SIZE;

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);
  const abortRef       = useRef<AbortController | null>(null);
  const botRef         = useRef<HTMLButtonElement>(null);

  // ── R4X 3-Layer Follow System ──────────────────────────────────────────────
  // Layer 1: Cursor position (raw input)
  const cursorRef = useRef({ x: 0, y: 0 });
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isIdle, setIsIdle] = useState(true);

  // Layer 2: Bot position — follows cursor with high damping (like Target Movement, damping 250)
  const rawBotX = useMotionValue(getHomePos(DESKTOP_BOT_SIZE).x);
  const rawBotY = useMotionValue(getHomePos(DESKTOP_BOT_SIZE).y);
  const botX = useSpring(rawBotX, { stiffness: 8, damping: 30 });  // very sluggish — R4X body feel
  const botY = useSpring(rawBotY, { stiffness: 8, damping: 30 });

  // Layer 3: Head rotation — follows cursor with medium damping (like Target Head, damping 25)
  const rawHeadRotate = useMotionValue(0);
  const headRotateSpring = useSpring(rawHeadRotate, { stiffness: 60, damping: 12 });

  // Layer 4: Eye tracking — fastest, snappiest response (like Cursor Target, damping 10)
  const rawEyeX = useMotionValue(0);
  const rawEyeY = useMotionValue(0);
  const eyeX = useSpring(rawEyeX, { stiffness: 180, damping: 14 });  // snappy + slight overshoot
  const eyeY = useSpring(rawEyeY, { stiffness: 180, damping: 14 });

  // Synced state values for SVG rendering
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [headRotate, setHeadRotate] = useState(0);
  const [botPos, setBotPos] = useState(() => getHomePos(DESKTOP_BOT_SIZE));
  const [proximity, setProximity] = useState(0);

  // ── Mouse tracking — drives all 3 layers ──
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // No mouse tracking on touch devices
      if (window.innerWidth < 768) return;

      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Reset idle timer — returns home after 1.2s without mouse movement
      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsIdle(true), 1200);

      // Get current bot center for relative calculations
      const currentBotSize = DESKTOP_BOT_SIZE;
      const bx = botX.get() + currentBotSize / 2;
      const by = botY.get() + currentBotSize / 2;
      const dx = e.clientX - bx;
      const dy = e.clientY - by;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 600;
      const factor = Math.min(dist / maxDist, 1);
      const angle = Math.atan2(dy, dx);

      // Proximity (inverse distance, 0-1)
      setProximity(Math.max(0, 1 - dist / 400));

      // Layer 4: Eyes — direct angle tracking (fastest)
      rawEyeX.set(Math.cos(angle) * factor);
      rawEyeY.set(Math.sin(angle) * factor);

      // Layer 3: Head rotation — tilt toward cursor (-12° to +12°)
      const headTilt = (dx / Math.max(window.innerWidth, 1)) * 24;
      rawHeadRotate.set(Math.max(-12, Math.min(12, headTilt)));

      // Layer 2: Bot position — gentle attraction toward cursor, strong home gravity
      if (!open) {
        const followStrength = 0.15; // subtle — bot mostly stays home, just leans toward cursor
        const home = getHomePos(currentBotSize);
        const targetX = home.x + (e.clientX - home.x - currentBotSize / 2) * followStrength;
        const targetY = home.y + (e.clientY - home.y - currentBotSize / 2) * followStrength;

        // Clamp to viewport
        const clampedX = Math.max(8, Math.min(window.innerWidth - currentBotSize - 8, targetX));
        const clampedY = Math.max(8, Math.min(window.innerHeight - currentBotSize - 8, targetY));

        rawBotX.set(clampedX);
        rawBotY.set(clampedY);
      }
    };

    const handleMouseLeave = () => {
      setIsIdle(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [rawEyeX, rawEyeY, rawHeadRotate, rawBotX, rawBotY, botX, botY, open]);

  // ── Return to home when idle or chat open ──
  useEffect(() => {
    if (isIdle || open) {
      const home = getHomePos(botSize);
      rawBotX.set(home.x);
      rawBotY.set(home.y);
      rawHeadRotate.set(0);
      rawEyeX.set(0);
      rawEyeY.set(0);
    }
  }, [isIdle, open, botSize, rawBotX, rawBotY, rawHeadRotate, rawEyeX, rawEyeY]);

  // ── Periodic home gravity — bot drifts back every 4s even during activity ──
  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      const home = getHomePos(botSize);
      const currentX = rawBotX.get();
      const currentY = rawBotY.get();
      // Blend 60% toward home — gentle rubber-band pull
      rawBotX.set(currentX + (home.x - currentX) * 0.6);
      rawBotY.set(currentY + (home.y - currentY) * 0.6);
    }, 8000);
    return () => clearInterval(interval);
  }, [open, botSize, rawBotX, rawBotY]);

  // ── Handle window resize — update home position ──
  useEffect(() => {
    const handleResize = () => {
      if (isIdle || open) {
        const home = getHomePos(botSize);
        rawBotX.set(home.x);
        rawBotY.set(home.y);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isIdle, open, botSize, rawBotX, rawBotY]);

  // ── Sync spring values to state for rendering ──
  useEffect(() => {
    const unsubEyeX = eyeX.on('change', (x) => setEyePos(prev => ({ ...prev, x })));
    const unsubEyeY = eyeY.on('change', (y) => setEyePos(prev => ({ ...prev, y })));
    const unsubHead = headRotateSpring.on('change', (r) => setHeadRotate(r));
    const unsubBotX = botX.on('change', (x) => setBotPos(prev => ({ ...prev, x })));
    const unsubBotY = botY.on('change', (y) => setBotPos(prev => ({ ...prev, y })));
    return () => { unsubEyeX(); unsubEyeY(); unsubHead(); unsubBotX(); unsubBotY(); };
  }, [eyeX, eyeY, headRotateSpring, botX, botY]);

  // ── Chat scroll / focus / lang ──
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300); }, [open]);
  useEffect(() => { setMessages([{ role: 'assistant', content: labels.greeting }]); }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

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

  return (
    <>
      {/* ── Chat Panel — anchored to bottom-right (home position) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-4 sm:right-6 z-[52] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[60vh] flex flex-col"
            style={{
              bottom: isMobile ? `${MOBILE_BOT_SIZE + HOME_MARGIN + 12}px` : `${DESKTOP_BOT_SIZE + HOME_MARGIN - 28}px`,
              background: 'rgba(11,22,34,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(39,174,96,0.25)',
              borderRadius: '20px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(39,174,96,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'rgba(39,174,96,0.2)' }}>
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#0a1018] flex items-center justify-center overflow-hidden border border-[#27AE60]/30">
                  <picture>
                    <source srcSet="/fordinand-bot-sm.webp" type="image/webp" />
                    <img src="/fordinand-bot.png" alt="Fördinand" width={28} height={28} className="object-contain" />
                  </picture>
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

      {/* ── R4X Fördinand Bot — freely positioned, follows cursor ── */}
      <motion.button
        ref={botRef}
        onClick={() => setOpen(prev => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed z-50 flex items-center justify-center cursor-pointer"
        style={{
          left: botPos.x,
          top: botPos.y,
          width: botSize,
          height: botSize,
          background: 'transparent',
          border: 'none',
          willChange: 'left, top',
        }}
        animate={open
          ? { scale: 1 }
          : { y: [0, -3, 0] }
        }
        transition={open
          ? { duration: 0.2 }
          : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }
        aria-label={open ? labels.close : labels.title}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} rounded-full flex items-center justify-center`}
              style={{
                background: 'rgba(11,22,34,0.9)',
                border: '1.5px solid rgba(39,174,96,0.4)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(39,174,96,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <svg width={isMobile ? 18 : 24} height={isMobile ? 18 : 24} viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                transform: isMobile ? `scale(${MOBILE_BOT_SIZE / DESKTOP_BOT_SIZE})` : undefined,
                transformOrigin: 'bottom right',
              }}
            >
              <FordinandBot
                eyeX={eyePos.x}
                eyeY={eyePos.y}
                headRotate={headRotate}
                isHovered={isHovered}
                proximity={proximity}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
