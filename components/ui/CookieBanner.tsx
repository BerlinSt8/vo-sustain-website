"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STORAGE_KEY = "vo-cookie-consent";
const EXPIRY_MS = 365 * 24 * 60 * 60 * 1000; // 12 Monate

function hasValidConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data?.timestamp) return false;
    const ts = new Date(data.timestamp).getTime();
    return isFinite(ts) && Date.now() - ts < EXPIRY_MS;
  } catch {
    return false;
  }
}

function saveConsent() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ essential: true, timestamp: new Date().toISOString() })
  );
}

export default function CookieBanner() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!hasValidConsent()) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    saveConsent();
    setVisible(false);
  }

  // SSR-Guard: render nothing until hydrated
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t.cookie.text}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "#0B1622",
            borderTop: "1px solid rgba(39, 174, 96, 0.3)",
            padding: "1rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {/* Text + Link */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.85rem",
                color: "#C8D0D8",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t.cookie.text}{" "}
              <Link
                href="/datenschutz"
                style={{
                  color: "#27AE60",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                {t.cookie.privacyLink}
              </Link>
            </p>

            {/* Accept Button */}
            <button
              onClick={handleAccept}
              autoFocus
              aria-label={t.cookie.accept}
              style={{
                background: "#27AE60",
                color: "#0B1622",
                border: "none",
                borderRadius: "6px",
                padding: "0.5rem 1.25rem",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                letterSpacing: "0.04em",
                flexShrink: 0,
              }}
            >
              {t.cookie.accept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
