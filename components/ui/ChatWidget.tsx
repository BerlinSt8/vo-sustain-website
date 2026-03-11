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
const BOT_SIZE = 84;
const HOME_MARGIN = 16; // distance from edge

function getHomePos() {
  if (typeof window === 'undefined') return { x: 0, y: 0 };
  return {
    x: window.innerWidth - BOT_SIZE - HOME_MARGIN,
    y: window.innerHeight - BOT_SIZE - HOME_MARGIN,
  };
}

// ─── R4X-Style Fördinand Bot — 3D Premium SVG with eye-tracking + head tilt ──
function FordinandBot({
  eyeX, eyeY, headRotate, isHovered, proximity,
}: {
  eyeX: number; eyeY: number; headRotate: number; isHovered: boolean; proximity: number;
}) {
  const domeGlow = 0.5 + proximity * 0.5;
  const earGlow = 0.2 + proximity * 0.65;
  const bracketOpacity = 0.06 + proximity * 0.4;
  const eyeScale = isHovered ? 1.2 : 1;
  const smileWidth = isHovered ? 3 : 2;

  return (
    <svg width="72" height="72" viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* ═══ 3D LIGHTING SYSTEM ═══ */}

        {/* Key light: top-left warm light source */}
        <radialGradient id="fd-key-light" cx="0.3" cy="0.2" r="0.8">
          <stop offset="0%" stopColor="#fff8f0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fff8f0" stopOpacity="0" />
        </radialGradient>

        {/* ── Iridescent Dome — multi-layer glass ── */}
        <linearGradient id="fd-dome-iris" x1="0.05" y1="0" x2="0.95" y2="1">
          <stop offset="0%" stopColor="#ff9ecd" stopOpacity="0.9" />
          <stop offset="15%" stopColor="#ffb3d9" stopOpacity="0.85" />
          <stop offset="30%" stopColor="#c8a8e6" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#7ec8e3" stopOpacity="0.78" />
          <stop offset="60%" stopColor="#a8e6cf" stopOpacity="0.82" />
          <stop offset="75%" stopColor="#ffe066" stopOpacity="0.75" />
          <stop offset="90%" stopColor="#ffb07a" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff9ecd" stopOpacity="0.65" />
        </linearGradient>
        {/* Dome refraction — secondary color layer offset */}
        <linearGradient id="fd-dome-refract" x1="0.9" y1="0.1" x2="0.1" y2="0.9">
          <stop offset="0%" stopColor="#88d8f7" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#ffc8e8" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#a8e6cf" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffe088" stopOpacity="0.25" />
        </linearGradient>
        {/* Dome warm inner glow */}
        <radialGradient id="fd-dome-inner" cx="0.42" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#ffe4c8" stopOpacity="0.65" />
          <stop offset="40%" stopColor="#ffb8a0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff88b8" stopOpacity="0" />
        </radialGradient>
        {/* Dome primary specular */}
        <radialGradient id="fd-dome-spec" cx="0.3" cy="0.25" r="0.3">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* ── Body — 3D cream material with subsurface scattering ── */}
        <radialGradient id="fd-body" cx="0.38" cy="0.25" r="0.75">
          <stop offset="0%" stopColor="#faf3ea" />
          <stop offset="25%" stopColor="#f4ebe0" />
          <stop offset="50%" stopColor="#ebe0d2" />
          <stop offset="75%" stopColor="#ddd2c2" />
          <stop offset="100%" stopColor="#c8bda8" />
        </radialGradient>
        {/* Body rim-light (warm edge from key light) */}
        <radialGradient id="fd-body-rim" cx="0.2" cy="0.15" r="0.9">
          <stop offset="0%" stopColor="#fff8f0" stopOpacity="0.25" />
          <stop offset="40%" stopColor="#fff8f0" stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        {/* Body bottom shadow (ambient occlusion) */}
        <radialGradient id="fd-body-ao" cx="0.5" cy="0.85" r="0.5">
          <stop offset="0%" stopColor="#a09080" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#a09080" stopOpacity="0" />
        </radialGradient>
        {/* Subsurface scattering — warm light bleeding through thin edges */}
        <radialGradient id="fd-sss" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#ffd8b8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffd8b8" stopOpacity="0" />
        </radialGradient>

        {/* ── Head gradient ── */}
        <radialGradient id="fd-head" cx="0.4" cy="0.25" r="0.7">
          <stop offset="0%" stopColor="#faf3ea" />
          <stop offset="40%" stopColor="#f0e6d8" />
          <stop offset="80%" stopColor="#e2d6c6" />
          <stop offset="100%" stopColor="#d4c8b6" />
        </radialGradient>

        {/* ── Eye iris gradient (realistic) ── */}
        <radialGradient id="fd-iris-l" cx="0.45" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#3de88a" />
          <stop offset="40%" stopColor="#2ECC71" />
          <stop offset="70%" stopColor="#1a9a50" />
          <stop offset="100%" stopColor="#0d6e35" />
        </radialGradient>
        <radialGradient id="fd-iris-r" cx="0.45" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#3de88a" />
          <stop offset="40%" stopColor="#2ECC71" />
          <stop offset="70%" stopColor="#1a9a50" />
          <stop offset="100%" stopColor="#0d6e35" />
        </radialGradient>

        {/* ═══ FILTER SYSTEM ═══ */}

        {/* Eye emission glow — bright, focused */}
        <filter id="fd-eye-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Eye halo — soft green ambient around eyes */}
        <filter id="fd-eye-halo" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        {/* Dome ambient glow — dreamy, wide */}
        <filter id="fd-dome-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* 3D drop shadow — multi-layer for depth */}
        <filter id="fd-shadow-deep" x="-20%" y="-10%" width="140%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#08101a" floodOpacity="0.3" />
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#08101a" floodOpacity="0.15" />
        </filter>
        {/* Contact shadow (ambient occlusion between elements) */}
        <filter id="fd-contact-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#08101a" floodOpacity="0.2" />
        </filter>

        {/* Verde LED glow — intense, focused */}
        <filter id="fd-led-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Ambient backlight (full-bot glow) */}
        <filter id="fd-backlight" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* ═══ AMBIENT BACKLIGHT — 3D "floating" effect ═══ */}
      <ellipse cx="60" cy="62" rx="35" ry="40" fill="#27AE60" opacity={0.04 + proximity * 0.06} filter="url(#fd-backlight)" />
      <ellipse cx="60" cy="38" rx="25" ry="22" fill="#ffb3d9" opacity={0.03 + proximity * 0.04} filter="url(#fd-backlight)" />

      {/* ═══ GROUND SHADOW — soft, realistic ═══ */}
      <ellipse cx="60" cy="120" rx="28" ry="5" fill="#08101a" opacity="0.18">
        <animate attributeName="rx" values="28;26;28" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="60" cy="120" rx="16" ry="2.5" fill="#08101a" opacity="0.1" />

      {/* ═══ BODY — 3D round, chubby, cream with proper lighting ═══ */}
      <g filter="url(#fd-shadow-deep)">
        {/* Main body sphere */}
        <ellipse cx="60" cy="92" rx="26" ry="24" fill="url(#fd-body)" />
        {/* Subsurface scattering — warm edge glow */}
        <ellipse cx="60" cy="92" rx="26" ry="24" fill="url(#fd-sss)" />
        {/* Key light highlight — top-left 3D curvature */}
        <ellipse cx="50" cy="80" rx="16" ry="12" fill="white" opacity="0.14" />
        {/* Secondary highlight — softer, wider */}
        <ellipse cx="54" cy="84" rx="20" ry="14" fill="url(#fd-body-rim)" />
        {/* Ambient occlusion — bottom shadow */}
        <ellipse cx="60" cy="108" rx="20" ry="6" fill="url(#fd-body-ao)" />
        {/* Rim light — thin bright edge (key light side) */}
        <path d="M38 76 Q34 88 38 104" stroke="white" strokeWidth="0.8" fill="none" opacity="0.08" />
        {/* Panel line — horizontal belt (3D curved) */}
        <path d="M36 93 Q60 89 84 93" stroke="#ccc0ae" strokeWidth="0.7" fill="none" opacity="0.4" />
        {/* Panel line — vertical center seam */}
        <line x1="60" y1="72" x2="60" y2="93" stroke="#ccc0ae" strokeWidth="0.5" opacity="0.2" />
        {/* Panel accents — technical detail */}
        <path d="M46 80 L52 84" stroke="#ccc0ae" strokeWidth="0.4" fill="none" opacity="0.18" />
        <path d="M74 80 L68 84" stroke="#ccc0ae" strokeWidth="0.4" fill="none" opacity="0.18" />
      </g>

      {/* ═══ CHEST LED — verde heartbeat with 3D glow ═══ */}
      <circle cx="60" cy="88" r="4" fill="none" stroke="#27AE60" strokeWidth="0.7" opacity="0.2">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="88" r="2.5" fill="#27AE60" opacity={0.4 + proximity * 0.45} filter="url(#fd-led-glow)">
        <animate attributeName="opacity" values={`${0.3 + proximity * 0.3};${0.6 + proximity * 0.35};${0.3 + proximity * 0.3}`} dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="88" r="1.2" fill="#5eff9e" opacity={0.3 + proximity * 0.3} />

      {/* ═══ LEFT ARM — resting, 3D shading ═══ */}
      <g filter="url(#fd-contact-shadow)">
        <ellipse cx="32" cy="90" rx="6" ry="4.5" fill="#ede4d6" transform="rotate(20, 32, 90)" />
        <ellipse cx="32" cy="90" rx="5" ry="3.5" fill="url(#fd-body-rim)" transform="rotate(20, 32, 90)" />
        <circle cx="27.5" cy="93" r="3.8" fill="#f0e8dc" />
        <ellipse cx="26" cy="91.5" rx="2" ry="1.5" fill="white" opacity="0.08" />
      </g>

      {/* ═══ RIGHT ARM — waving with 3D depth ═══ */}
      <g transform="translate(87, 78)" filter="url(#fd-contact-shadow)">
        <animateTransform attributeName="transform" type="rotate" values="-10,0,0;15,0,0;-10,0,0" dur="2s" repeatCount="indefinite" additive="sum" />
        {/* Upper arm */}
        <ellipse cx="2" cy="-6" rx="5.5" ry="4" fill="#ede4d6" transform="rotate(-35, 2, -6)" />
        <ellipse cx="0" cy="-8" rx="3" ry="2" fill="white" opacity="0.06" transform="rotate(-35, 0, -8)" />
        {/* Forearm */}
        <ellipse cx="5" cy="-16" rx="4.5" ry="3" fill="#ede4d6" transform="rotate(-12, 5, -16)" />
        <ellipse cx="3.5" cy="-17.5" rx="2.5" ry="1.5" fill="white" opacity="0.06" transform="rotate(-12, 3.5, -17.5)" />
        {/* Hand — 3D sphere */}
        <circle cx="7" cy="-22" r="4" fill="#f0e8dc" />
        <ellipse cx="5.5" cy="-24" rx="2" ry="1.5" fill="white" opacity="0.1" />
        {/* Fingers — small spheres */}
        <circle cx="4.5" cy="-26.5" r="1.5" fill="#f0e8dc" />
        <circle cx="7.5" cy="-27" r="1.5" fill="#f0e8dc" />
        <circle cx="10" cy="-26" r="1.3" fill="#f0e8dc" />
      </g>

      {/* ═══ HEAD GROUP — rotates toward cursor (R4X Target Head) ═══ */}
      <g transform={`rotate(${headRotate}, 60, 54)`}>

        {/* ── Neck — 3D connector with shadow ── */}
        <rect x="50" y="67" width="20" height="7" rx="4.5" fill="#ede4d6" />
        <rect x="52" y="67.5" width="16" height="1.5" rx="0.75" fill="white" opacity="0.06" />
        <rect x="50" y="72" width="20" height="1.5" rx="0.75" fill="#c8bda8" opacity="0.15" />

        {/* ── Ambient occlusion — head/body junction shadow ── */}
        <ellipse cx="60" cy="68" rx="14" ry="3" fill="#08101a" opacity="0.06" />

        {/* ── Head base — 3D rounded capsule ── */}
        <g filter="url(#fd-shadow-deep)">
          <rect x="30" y="38" width="60" height="32" rx="16" fill="url(#fd-head)" />
          {/* Key light highlight on head */}
          <ellipse cx="52" cy="43" rx="20" ry="7" fill="white" opacity="0.1" />
          {/* Head bottom ambient occlusion */}
          <rect x="36" y="64" width="48" height="3" rx="1.5" fill="#c0b5a0" opacity="0.1" />
          {/* Rim light — thin edge on key-light side */}
          <path d="M34 46 Q30 54 34 64" stroke="white" strokeWidth="0.6" fill="none" opacity="0.07" />
        </g>

        {/* ── Ear pads — 3D headphone style ── */}
        {/* Left ear */}
        <g filter="url(#fd-contact-shadow)">
          <ellipse cx="28" cy="54" rx="6.5" ry="7" fill="#ede4d6" />
          <ellipse cx="28" cy="54" rx="5" ry="5.5" fill="#e4dace" />
          <ellipse cx="27" cy="52" rx="3" ry="2.5" fill="white" opacity="0.06" />
          <circle cx="28" cy="54" r="2.2" fill="#27AE60" opacity={earGlow} filter="url(#fd-led-glow)">
            <animate attributeName="opacity" values={`${earGlow * 0.3};${earGlow};${earGlow * 0.3}`} dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="28" cy="54" r="1" fill="#5eff9e" opacity={earGlow * 0.5} />
        </g>
        {/* Right ear */}
        <g filter="url(#fd-contact-shadow)">
          <ellipse cx="92" cy="54" rx="6.5" ry="7" fill="#ede4d6" />
          <ellipse cx="92" cy="54" rx="5" ry="5.5" fill="#e4dace" />
          <ellipse cx="91" cy="52" rx="3" ry="2.5" fill="white" opacity="0.06" />
          <circle cx="92" cy="54" r="2.2" fill="#27AE60" opacity={earGlow} filter="url(#fd-led-glow)">
            <animate attributeName="opacity" values={`${earGlow * 0.3};${earGlow};${earGlow * 0.3}`} dur="2.8s" repeatCount="indefinite" begin="1.2s" />
          </circle>
          <circle cx="92" cy="54" r="1" fill="#5eff9e" opacity={earGlow * 0.5} />
        </g>

        {/* ── Face visor — deep dark plate with 3D depth ── */}
        <rect x="37" y="45" width="46" height="22" rx="11" fill="#060a10" opacity="0.95" />
        {/* Visor inner depth — recessed feel */}
        <rect x="39" y="47" width="42" height="18" rx="9" fill="#0d1420" opacity="0.5" />
        {/* Visor edge shine — top rim catch light */}
        <rect x="41" y="45.5" width="38" height="1.2" rx="0.6" fill="white" opacity="0.05" />
        {/* Visor bottom edge — subtle */}
        <rect x="43" y="65" width="34" height="0.8" rx="0.4" fill="white" opacity="0.03" />

        {/* ── EYES — 3D emissive, large, alive ── */}
        {/* Eye ambient halo (soft green glow behind eyes) */}
        <ellipse cx="50" cy="56" rx="8" ry="6" fill="#27AE60" opacity={0.06 + proximity * 0.08} filter="url(#fd-eye-halo)" />
        <ellipse cx="70" cy="56" rx="8" ry="6" fill="#27AE60" opacity={0.06 + proximity * 0.08} filter="url(#fd-eye-halo)" />

        <g filter="url(#fd-eye-glow)">
          {/* ─ Left eye ─ */}
          {/* Socket — deep black with subtle blue rim */}
          <circle cx="50" cy="56" r={7.5 * eyeScale} fill="#040810" />
          <circle cx="50" cy="56" r={7.5 * eyeScale} stroke="#1a3050" strokeWidth="0.4" fill="none" opacity="0.3" />
          {/* Iris — radial gradient for 3D depth */}
          <circle cx={50 + eyeX * 3} cy={56 + eyeY * 2.2} r={5.5 * eyeScale} fill="url(#fd-iris-l)">
            <animate attributeName="opacity" values="1;0.82;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          {/* Iris ring detail */}
          <circle cx={50 + eyeX * 3} cy={56 + eyeY * 2.2} r={5.5 * eyeScale} stroke="#0d6e35" strokeWidth="0.4" fill="none" opacity="0.4" />
          {/* Pupil — deep center */}
          <circle cx={50 + eyeX * 3.2} cy={56 + eyeY * 2.4} r={2 * eyeScale} fill="#061a0c" opacity="0.7" />
          {/* Primary catchlight — large, bright */}
          <circle cx={47.5 + eyeX * 1.5} cy={53 + eyeY * 0.7} r={2 * eyeScale} fill="white" opacity="0.92" />
          {/* Secondary catchlight — opposite side, smaller */}
          <circle cx={52 + eyeX * 2} cy={54 + eyeY * 0.9} r={0.9 * eyeScale} fill="white" opacity="0.5" />
          {/* Eye emission glow ring */}
          <circle cx={50 + eyeX * 3} cy={56 + eyeY * 2.2} r={6 * eyeScale} stroke="#2ECC71" strokeWidth="0.5" fill="none" opacity={0.15 + proximity * 0.2} />

          {/* ─ Right eye ─ */}
          <circle cx="70" cy="56" r={7.5 * eyeScale} fill="#040810" />
          <circle cx="70" cy="56" r={7.5 * eyeScale} stroke="#1a3050" strokeWidth="0.4" fill="none" opacity="0.3" />
          <circle cx={70 + eyeX * 3} cy={56 + eyeY * 2.2} r={5.5 * eyeScale} fill="url(#fd-iris-r)">
            <animate attributeName="opacity" values="1;0.82;1" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <circle cx={70 + eyeX * 3} cy={56 + eyeY * 2.2} r={5.5 * eyeScale} stroke="#0d6e35" strokeWidth="0.4" fill="none" opacity="0.4" />
          <circle cx={70 + eyeX * 3.2} cy={56 + eyeY * 2.4} r={2 * eyeScale} fill="#061a0c" opacity="0.7" />
          <circle cx={67.5 + eyeX * 1.5} cy={53 + eyeY * 0.7} r={2 * eyeScale} fill="white" opacity="0.92" />
          <circle cx={72 + eyeX * 2} cy={54 + eyeY * 0.9} r={0.9 * eyeScale} fill="white" opacity="0.5" />
          <circle cx={70 + eyeX * 3} cy={56 + eyeY * 2.2} r={6 * eyeScale} stroke="#2ECC71" strokeWidth="0.5" fill="none" opacity={0.15 + proximity * 0.2} />
        </g>

        {/* ── Smile — friendly, reactive ── */}
        <path
          d={`M55 ${isHovered ? 63 : 63.5} Q60 ${isHovered ? 67 : 65.5} 65 ${isHovered ? 63 : 63.5}`}
          stroke="#2ECC71" strokeWidth={isHovered ? 1.2 : 0.9} fill="none" strokeLinecap="round"
          opacity={isHovered ? 0.5 : 0.25}
          style={{ transition: 'all 0.3s ease' }}
        />

        {/* ── DOME — 3D iridescent glass hemisphere ── */}
        {/* Layer 1: Base iridescent fill with glow */}
        <ellipse cx="60" cy="36" rx="24" ry="22" fill="url(#fd-dome-iris)" filter="url(#fd-dome-glow)" opacity={domeGlow}>
          <animate attributeName="opacity" values={`${domeGlow};${domeGlow * 0.8};${domeGlow}`} dur="3.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Layer 2: Refraction — offset color layer for glass depth */}
        <ellipse cx="62" cy="34" rx="22" ry="20" fill="url(#fd-dome-refract)" opacity={domeGlow * 0.6} />
        {/* Layer 3: Inner warm glow (like light trapped inside) */}
        <ellipse cx="58" cy="33" rx="16" ry="14" fill="url(#fd-dome-inner)" opacity={0.45 + proximity * 0.3} />
        {/* Layer 4: Primary specular — large glass highlight */}
        <ellipse cx="60" cy="34" rx="22" ry="20" fill="url(#fd-dome-spec)" />
        {/* Layer 5: Sharp specular — top-left bright arc */}
        <ellipse cx="50" cy="24" rx="10" ry="6" fill="white" opacity="0.3" />
        {/* Layer 6: Secondary specular — right side */}
        <ellipse cx="72" cy="32" rx="5" ry="3" fill="white" opacity="0.12" />
        {/* Layer 7: Tertiary micro-highlight */}
        <ellipse cx="54" cy="20" rx="4" ry="2" fill="white" opacity="0.18" />
        {/* Dome rim — where glass meets head casing */}
        <ellipse cx="60" cy="49" rx="22" ry="3.5" fill="#d8cebe" opacity="0.5" />
        <ellipse cx="60" cy="48" rx="20" ry="1.2" fill="white" opacity="0.07" />
        {/* Dome bottom rim shadow */}
        <ellipse cx="60" cy="50" rx="20" ry="2" fill="#08101a" opacity="0.06" />
      </g>

      {/* ═══ TRACKING BRACKETS (R4X signature) ═══ */}
      <g stroke="#27AE60" strokeWidth="1.2" opacity={isHovered ? 0.5 : bracketOpacity} strokeLinecap="round"
         style={{ transition: 'opacity 0.4s ease' }}>
        <path d="M4 4 L4 14" /><path d="M4 4 L14 4" />
        <path d="M116 4 L116 14" /><path d="M116 4 L106 4" />
        <path d="M4 126 L4 116" /><path d="M4 126 L14 126" />
        <path d="M116 126 L116 116" /><path d="M116 126 L106 126" />
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
                  <svg width="26" height="26" viewBox="20 18 80 84" fill="none">
                    <defs>
                      <linearGradient id="hd-dome" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ff9ecd" stopOpacity="0.8" />
                        <stop offset="40%" stopColor="#a8e6cf" stopOpacity="0.7" />
                        <stop offset="80%" stopColor="#ffe066" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="60" cy="76" rx="18" ry="16" fill="#f0e6d8" />
                    <rect x="36" y="40" width="48" height="26" rx="13" fill="#f0e6d8" />
                    <ellipse cx="60" cy="38" rx="18" ry="16" fill="url(#hd-dome)" opacity="0.7" />
                    <ellipse cx="52" cy="30" rx="7" ry="4" fill="white" opacity="0.25" />
                    <rect x="41" y="47" width="38" height="16" rx="8" fill="#060a10" opacity="0.92" />
                    <circle cx="52" cy="55" r="5" fill="#040810" />
                    <circle cx="52" cy="55" r="3.5" fill="#2ECC71" />
                    <circle cx="50" cy="53" r="1.3" fill="white" opacity="0.9" />
                    <circle cx="68" cy="55" r="5" fill="#040810" />
                    <circle cx="68" cy="55" r="3.5" fill="#2ECC71" />
                    <circle cx="66" cy="53" r="1.3" fill="white" opacity="0.9" />
                    <circle cx="60" cy="76" r="2" fill="#27AE60" opacity="0.5" />
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
        className="fixed z-50 w-[84px] h-[84px] rounded-2xl flex items-center justify-center cursor-pointer"
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
