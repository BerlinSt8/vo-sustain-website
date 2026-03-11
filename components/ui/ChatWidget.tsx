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
const BOT_SIZE = 76;
const HOME_MARGIN = 16; // distance from edge

function getHomePos() {
  if (typeof window === 'undefined') return { x: 0, y: 0 };
  return {
    x: window.innerWidth - BOT_SIZE - HOME_MARGIN,
    y: window.innerHeight - BOT_SIZE - HOME_MARGIN,
  };
}

// ─── R4X-Style Fördinand Bot — Premium SVG with eye-tracking + head tilt ─────
function FordinandBot({
  eyeX, eyeY, headRotate, isHovered, proximity,
}: {
  eyeX: number; eyeY: number; headRotate: number; isHovered: boolean; proximity: number;
}) {
  // proximity: 0 = far, 1 = cursor right on top — drives dome glow intensity
  const domeOpacity = 0.7 + proximity * 0.3;
  const bracketOpacity = 0.15 + proximity * 0.5;
  const earGlow = 0.2 + proximity * 0.5;

  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* R4X Dome — warm pink → orange → yellow → green glow */}
        <radialGradient id="r4x-dome" cx="0.45" cy="0.38" r="0.55">
          <stop offset="0%" stopColor="#ffb07a" stopOpacity="1" />
          <stop offset="30%" stopColor="#ff7e6b" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#e85d6f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#27AE60" stopOpacity="0.25" />
        </radialGradient>
        {/* Dome inner light — hot center */}
        <radialGradient id="dome-inner" cx="0.4" cy="0.35" r="0.35">
          <stop offset="0%" stopColor="#ffe4a0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff9060" stopOpacity="0" />
        </radialGradient>
        {/* Soft outer glow */}
        <filter id="dome-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Eye neon glow */}
        <filter id="eye-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Body — R4X cream white with 3D depth */}
        <radialGradient id="r4x-body" cx="0.4" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="60%" stopColor="#e8eaed" />
          <stop offset="100%" stopColor="#cdd0d4" />
        </radialGradient>
        {/* Head 3D gradient */}
        <radialGradient id="r4x-head" cx="0.42" cy="0.3" r="0.65">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="70%" stopColor="#e4e7ea" />
          <stop offset="100%" stopColor="#d0d4d8" />
        </radialGradient>
        {/* Shadow under head */}
        <filter id="head-shadow" x="-10%" y="-5%" width="120%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0B1622" floodOpacity="0.15" />
        </filter>
        {/* Shadow under body */}
        <filter id="body-shadow" x="-10%" y="-5%" width="120%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0B1622" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* === GROUND SHADOW === */}
      <ellipse cx="40" cy="73" rx="18" ry="3" fill="#0B1622" opacity="0.12" />

      {/* === BODY (BB-8 sphere) === */}
      <circle cx="40" cy="56" r="15" fill="url(#r4x-body)" filter="url(#body-shadow)" />
      {/* Body highlight arc */}
      <ellipse cx="36" cy="49" rx="8" ry="5" fill="white" opacity="0.12" />
      {/* Body seam */}
      <ellipse cx="40" cy="56" rx="14.5" ry="0.4" fill="#c0c4c8" opacity="0.4" />
      {/* Surface texture dots (BB-8 style) */}
      <circle cx="34" cy="52" r="0.7" fill="#c8ccd0" />
      <circle cx="46" cy="54" r="0.5" fill="#c8ccd0" />
      <circle cx="38" cy="60" r="0.6" fill="#c8ccd0" />
      <circle cx="44" cy="49" r="0.4" fill="#c8ccd0" />
      <circle cx="36" cy="63" r="0.5" fill="#c8ccd0" />
      <circle cx="48" cy="60" r="0.6" fill="#c8ccd0" />
      {/* Chest indicator — pulsing verde ring */}
      <circle cx="40" cy="56" r="3" fill="none" stroke="#27AE60" strokeWidth="0.5" opacity="0.3">
        <animate attributeName="r" values="2.5;4;2.5" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="56" r="1.5" fill="#27AE60" opacity={0.5 + proximity * 0.4}>
        <animate attributeName="opacity" values={`${0.4 + proximity * 0.3};${0.7 + proximity * 0.3};${0.4 + proximity * 0.3}`} dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* === HEAD GROUP — rotates toward cursor (R4X Target Head behavior) === */}
      <g transform={`rotate(${headRotate}, 40, 40)`}>
        {/* === HEAD (rounded capsule) === */}
        <rect x="23" y="24" width="34" height="20" rx="10" fill="url(#r4x-head)" filter="url(#head-shadow)" />
        {/* Head highlight */}
        <rect x="27" y="25" width="20" height="6" rx="3" fill="white" opacity="0.1" />

        {/* === DOME (glass hemisphere — R4X signature) === */}
        <ellipse cx="40" cy="22" rx="15" ry="13" fill="url(#r4x-dome)" filter="url(#dome-glow)" opacity={domeOpacity}>
          <animate attributeName="opacity" values={`${domeOpacity};${domeOpacity * 0.88};${domeOpacity}`} dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Dome inner hotspot */}
        <ellipse cx="38" cy="19" rx="8" ry="6" fill="url(#dome-inner)" />
        {/* Glass specular highlight — top-left */}
        <ellipse cx="34" cy="15" rx="5" ry="3" fill="white" opacity="0.22" />
        {/* Secondary highlight — smaller */}
        <ellipse cx="46" cy="20" rx="2.5" ry="1.5" fill="white" opacity="0.1" />
        {/* Dome rim */}
        <ellipse cx="40" cy="28" rx="14" ry="2" fill="#d0d4d8" opacity="0.4" />

        {/* === FACE PLATE (dark visor) === */}
        <rect x="27" y="28" width="26" height="13" rx="6.5" fill="#0d1117" opacity="0.92" />
        {/* Visor edge highlight */}
        <rect x="28" y="28.5" width="24" height="0.8" rx="0.4" fill="white" opacity="0.06" />

        {/* === EYES — R4X large green, cursor-tracking === */}
        <g filter="url(#eye-glow)">
          {/* Left eye socket */}
          <circle cx="35" cy="34.5" r="4.8" fill="#0a0e14" />
          {/* Left iris — gradient feel via layered circles */}
          <circle cx={35 + eyeX * 2.2} cy={34.5 + eyeY * 1.5} r={isHovered ? 3.5 : 2.8} fill="#1a8a4a" />
          <circle cx={35 + eyeX * 2.2} cy={34.5 + eyeY * 1.5} r={isHovered ? 2.5 : 2} fill="#2ECC71">
            <animate attributeName="opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          {/* Left specular */}
          <circle cx={33.8 + eyeX * 1.2} cy={33 + eyeY * 0.6} r="1" fill="white" opacity="0.8" />
          <circle cx={35.5 + eyeX * 1.5} cy={33.5 + eyeY * 0.8} r="0.5" fill="white" opacity="0.4" />

          {/* Right eye socket */}
          <circle cx="45" cy="34.5" r="4.8" fill="#0a0e14" />
          {/* Right iris */}
          <circle cx={45 + eyeX * 2.2} cy={34.5 + eyeY * 1.5} r={isHovered ? 3.5 : 2.8} fill="#1a8a4a" />
          <circle cx={45 + eyeX * 2.2} cy={34.5 + eyeY * 1.5} r={isHovered ? 2.5 : 2} fill="#2ECC71">
            <animate attributeName="opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          {/* Right specular */}
          <circle cx={43.8 + eyeX * 1.2} cy={33 + eyeY * 0.6} r="1" fill="white" opacity="0.8" />
          <circle cx={45.5 + eyeX * 1.5} cy={33.5 + eyeY * 0.8} r="0.5" fill="white" opacity="0.4" />
        </g>

        {/* === NECK connector === */}
        <rect x="36" y="43" width="8" height="4" rx="2" fill="#dde0e3" stroke="#c4c8cc" strokeWidth="0.4" />

        {/* === EAR SENSORS === */}
        <circle cx="22" cy="33" r="2.5" fill="#e4e7ea" stroke="#c0c4c8" strokeWidth="0.5" />
        <circle cx="22" cy="33" r="1" fill="#27AE60" opacity={earGlow}>
          <animate attributeName="opacity" values={`${earGlow * 0.5};${earGlow};${earGlow * 0.5}`} dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="58" cy="33" r="2.5" fill="#e4e7ea" stroke="#c0c4c8" strokeWidth="0.5" />
        <circle cx="58" cy="33" r="1" fill="#27AE60" opacity={earGlow}>
          <animate attributeName="opacity" values={`${earGlow * 0.5};${earGlow};${earGlow * 0.5}`} dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </g>

      {/* === TRACKING FRAME (R4X corner brackets) — proximity-reactive === */}
      <g stroke="#27AE60" strokeWidth="1.2" opacity={isHovered ? 0.65 : bracketOpacity} strokeLinecap="round"
         style={{ transition: 'opacity 0.3s ease' }}>
        <path d="M8 8 L8 15" /><path d="M8 8 L15 8" />
        <path d="M72 8 L72 15" /><path d="M72 8 L65 8" />
        <path d="M8 74 L8 67" /><path d="M8 74 L15 74" />
        <path d="M72 74 L72 67" /><path d="M72 74 L65 74" />
      </g>
    </svg>
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
  const rawBotX = useMotionValue(getHomePos().x);
  const rawBotY = useMotionValue(getHomePos().y);
  const botX = useSpring(rawBotX, { stiffness: 8, damping: 30 });  // very sluggish — R4X body feel
  const botY = useSpring(rawBotY, { stiffness: 8, damping: 30 });

  // Layer 3: Head rotation — follows cursor with medium damping (like Target Head, damping 25)
  const rawHeadRotate = useMotionValue(0);
  const headRotateSpring = useSpring(rawHeadRotate, { stiffness: 60, damping: 12 });

  // Layer 4: Eye tracking — fastest response (like Cursor Target, damping 10)
  const rawEyeX = useMotionValue(0);
  const rawEyeY = useMotionValue(0);
  const eyeX = useSpring(rawEyeX, { stiffness: 120, damping: 18 });
  const eyeY = useSpring(rawEyeY, { stiffness: 120, damping: 18 });

  // Synced state values for SVG rendering
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [headRotate, setHeadRotate] = useState(0);
  const [botPos, setBotPos] = useState(getHomePos);
  const [proximity, setProximity] = useState(0);

  // ── Mouse tracking — drives all 3 layers ──
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Reset idle timer
      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsIdle(true), 2000);

      // Get current bot center for relative calculations
      const bx = botX.get() + BOT_SIZE / 2;
      const by = botY.get() + BOT_SIZE / 2;
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

      // Layer 2: Bot position — follow cursor if not chat-open
      if (!open) {
        // Follow cursor but offset: bot stays ~120px behind cursor, gravitating
        const followStrength = 0.35; // how aggressively bot follows (0=stay home, 1=stick to cursor)
        const home = getHomePos();
        const targetX = home.x + (e.clientX - home.x - BOT_SIZE / 2) * followStrength;
        const targetY = home.y + (e.clientY - home.y - BOT_SIZE / 2) * followStrength;

        // Clamp to viewport
        const clampedX = Math.max(8, Math.min(window.innerWidth - BOT_SIZE - 8, targetX));
        const clampedY = Math.max(8, Math.min(window.innerHeight - BOT_SIZE - 8, targetY));

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
      const home = getHomePos();
      rawBotX.set(home.x);
      rawBotY.set(home.y);
      rawHeadRotate.set(0);
    }
  }, [isIdle, open, rawBotX, rawBotY, rawHeadRotate]);

  // ── Handle window resize — update home position ──
  useEffect(() => {
    const handleResize = () => {
      if (isIdle || open) {
        const home = getHomePos();
        rawBotX.set(home.x);
        rawBotY.set(home.y);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isIdle, open, rawBotX, rawBotY]);

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
            className="fixed bottom-[6rem] right-4 sm:right-6 z-[52] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col"
            style={{
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
                <div className="w-9 h-9 rounded-full bg-[#1a1f25] flex items-center justify-center overflow-hidden border border-[#27AE60]/30">
                  <svg width="26" height="26" viewBox="18 18 44 48" fill="none">
                    <circle cx="40" cy="48" r="10" fill="#e8eaed" />
                    <rect x="25" y="26" width="30" height="17" rx="8.5" fill="#e8eaed" />
                    <ellipse cx="40" cy="24" rx="12" ry="10" fill="#ff9070" opacity="0.7" />
                    <rect x="29" y="30" width="22" height="11" rx="5.5" fill="#0d1117" opacity="0.9" />
                    <circle cx="36" cy="35.5" r="3" fill="#0a0e14" />
                    <circle cx="36" cy="35.5" r="1.8" fill="#2ECC71" />
                    <circle cx="44" cy="35.5" r="3" fill="#0a0e14" />
                    <circle cx="44" cy="35.5" r="1.8" fill="#2ECC71" />
                  </svg>
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
        className="fixed z-50 w-[76px] h-[76px] rounded-2xl flex items-center justify-center cursor-pointer"
        style={{
          left: botPos.x,
          top: botPos.y,
          background: 'radial-gradient(circle at 45% 40%, rgba(255,255,255,0.08) 0%, rgba(11,22,34,0.95) 70%)',
          border: isHovered ? '1.5px solid rgba(39,174,96,0.5)' : '1.5px solid rgba(255,255,255,0.1)',
          boxShadow: isHovered
            ? '0 12px 40px rgba(39,174,96,0.25), 0 0 30px rgba(39,174,96,0.1), inset 0 1px 0 rgba(255,255,255,0.06)'
            : '0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(39,174,96,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
          transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
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
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
