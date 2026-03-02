"use client";

import { useState } from "react";
import type { QuickCheckInput } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Props {
  onSubmit: (data: QuickCheckInput) => void;
  isLoading: boolean;
}

const BUNDESLAENDER = [
  "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen",
  "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen",
  "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland",
  "Sachsen ★", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen ★",
];

const UNTERNEHMENSFORMEN = [
  "GmbH", "UG (haftungsbeschränkt)", "AG", "GbR", "OHG", "KG",
  "GmbH & Co. KG", "Einzelunternehmen", "e.K.", "Sonstiges",
];

// EU-KMU-Definition: < 250 MA, < 50 Mio. € Umsatz
// Keine genauen Zahlen – nur KMU-Kategorien (Datenschutz + Nutzererfahrung)
const MITARBEITERZAHL_OPTIONEN = [
  { value: "Kleinstunternehmen (unter 10 Mitarbeitende)", label: "Kleinstunternehmen – unter 10 Mitarbeitende" },
  { value: "Kleinunternehmen (10 bis 49 Mitarbeitende)", label: "Kleinunternehmen – 10 bis 49 Mitarbeitende" },
  { value: "Mittleres Unternehmen (50 bis 249 Mitarbeitende)", label: "Mittleres Unternehmen – 50 bis 249 Mitarbeitende" },
  { value: "Großunternehmen (250 oder mehr Mitarbeitende)", label: "Großunternehmen – 250 oder mehr Mitarbeitende" },
];

const UMSATZ_OPTIONEN = [
  { value: "Kleinstunternehmen (unter 2 Mio. € Umsatz)", label: "Unter 2 Mio. € Jahresumsatz" },
  { value: "Kleinunternehmen (2 bis unter 10 Mio. € Umsatz)", label: "2 bis unter 10 Mio. € Jahresumsatz" },
  { value: "Mittleres Unternehmen (10 bis unter 50 Mio. € Umsatz)", label: "10 bis unter 50 Mio. € Jahresumsatz" },
  { value: "Großunternehmen (50 Mio. € oder mehr Umsatz)", label: "50 Mio. € oder mehr Jahresumsatz" },
];

const INVESTITION_OPTIONEN = [
  { value: "< 50.000 €", label: "< 50.000 €" },
  { value: "50.000–200.000 €", label: "50.000 – 200.000 €" },
  { value: "200.000–1 Mio. €", label: "200.000 – 1 Mio. €" },
  { value: "> 1 Mio. €", label: "> 1 Mio. €" },
];

const PROJEKTSTART_OPTIONEN = [
  { value: "sofort (< 1 Monat)", label: "Sofort (< 1 Monat)" },
  { value: "in 1–3 Monaten", label: "In 1–3 Monaten" },
  { value: "in 3–6 Monaten", label: "In 3–6 Monaten" },
  { value: "in 6–12 Monaten", label: "In 6–12 Monaten" },
  { value: "in > 12 Monaten", label: "In mehr als 12 Monaten" },
];

const PROJEKTKATEGORIEN = [
  { value: "Photovoltaik / Erneuerbare Energien", icon: "◎" },
  { value: "Energieeffizienz (Gebäude/Prozesse)", icon: "◈" },
  { value: "Energiespeicher", icon: "▣" },
  { value: "Kreislaufwirtschaft / Ressourceneffizienz", icon: "↺" },
  { value: "Dekarbonisierung / Wasserstoff", icon: "⊘" },
  { value: "CSRD / Nachhaltigkeitsberichterstattung", icon: "≡" },
];

const DEMINIMIS_OPTIONEN = [
  { value: "Nein", label: "Nein" },
  { value: "Ja, unter 100.000 €", label: "Ja, unter 100.000 €" },
  { value: "Ja, 100.000–300.000 €", label: "Ja, 100.000–300.000 €" },
  { value: "Ja, über 300.000 €", label: "Ja, über 300.000 €" },
  { value: "Weiß nicht", label: "Weiß nicht / Unsicher" },
];

const labelStyle: React.CSSProperties = {
  fontFamily: "'Roboto Mono', monospace",
  fontSize: "0.65rem",
  color: "rgba(255,255,255,0.45)",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
  fontWeight: 500,
};

const fieldGroupStyle: React.CSSProperties = {
  marginBottom: "1.25rem",
};

export default function QuickCheckForm({ onSubmit, isLoading }: Props) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuickCheckInput>({
    unternehmensname: "",
    bundesland: "",
    unternehmensform: "",
    mitarbeiterzahl: "",
    jahresumsatz: "",
    branche: "",
    projektkategorien: [],
    projektbeschreibung: "",
    investitionssumme: "",
    projektstart: "",
    deminimisErhalten: "",
  });

  const set = (field: keyof QuickCheckInput, value: string | string[]) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleKategorie = (val: string) => {
    const current = form.projektkategorien;
    set("projektkategorien", current.includes(val) ? current.filter((v) => v !== val) : [...current, val]);
  };

  const step1Valid =
    form.unternehmensname.trim() && form.bundesland && form.unternehmensform &&
    form.mitarbeiterzahl && form.jahresumsatz && form.branche.trim();

  const step2Valid =
    form.projektkategorien.length > 0 &&
    form.projektbeschreibung.trim().length >= 50 &&
    form.investitionssumme && form.projektstart && form.deminimisErhalten;

  const btnPrimary: React.CSSProperties = {
    width: "100%",
    padding: "0.9rem",
    background: "var(--verde)",
    border: "none",
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 4px 20px rgba(39,174,96,0.25)",
  };

  const btnDisabled: React.CSSProperties = {
    ...btnPrimary,
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.3)",
    cursor: "not-allowed",
    boxShadow: "none",
  };

  return (
    <div>
      {/* Step indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2rem" }}>
        {[1, 2].map((s) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "26px", height: "26px", borderRadius: "50%",
                background: step > s ? "var(--verde)" : step === s ? "transparent" : "transparent",
                border: `2px solid ${step > s ? "var(--verde)" : step === s ? "var(--verde)" : "rgba(255,255,255,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem",
                color: step > s ? "white" : step === s ? "var(--verde-bright)" : "rgba(255,255,255,0.3)",
                fontWeight: 600, cursor: s < step ? "pointer" : "default",
                transition: "all 0.3s ease",
                animation: step === s ? "pulse-verde 2.5s ease-in-out infinite" : "none",
              }}
              onClick={() => s < step && setStep(s)}
            >
              {step > s ? "✓" : s}
            </div>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.78rem", color: step === s ? "white" : "rgba(255,255,255,0.35)", fontWeight: step === s ? 600 : 400, transition: "color 0.3s, font-weight 0.3s" }}>
              {s === 1 ? t.quickCheckForm.stepCompany : t.quickCheckForm.stepProject}
            </span>
            {s < 2 && (
              <div style={{ width: "32px", height: "2px", margin: "0 8px", background: "rgba(255,255,255,0.1)", borderRadius: "1px", overflow: "hidden", position: "relative" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, height: "100%",
                  width: step > 1 ? "100%" : "0%",
                  background: "var(--verde)",
                  transition: "width 0.4s ease",
                  borderRadius: "1px",
                }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ marginBottom: "2rem" }}>
        <div className="progress-fill" style={{ width: step === 1 ? "50%" : "100%" }} />
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div key="step1" style={{ animation: "stepFadeIn 0.3s ease forwards" }}>
          <div className="stagger-1" style={fieldGroupStyle}>
            <label style={labelStyle}>{t.quickCheckForm.companyName}</label>
            <input type="text" placeholder={t.quickCheckForm.companyNamePlaceholder} value={form.unternehmensname} onChange={(e) => set("unternehmensname", e.target.value)} />
          </div>

          <div className="stagger-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={labelStyle}>{t.quickCheckForm.state}</label>
              <select value={form.bundesland} onChange={(e) => set("bundesland", e.target.value)}>
                <option value="">{t.quickCheckForm.statePlaceholder}</option>
                {BUNDESLAENDER.map((b) => (
                  <option key={b} value={b.replace(" ★", "")}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.quickCheckForm.legalForm}</label>
              <select value={form.unternehmensform} onChange={(e) => set("unternehmensform", e.target.value)}>
                <option value="">{t.quickCheckForm.legalFormPlaceholder}</option>
                {UNTERNEHMENSFORMEN.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="stagger-3" style={{ marginBottom: "1.25rem" }}>
            <label style={labelStyle}>{t.quickCheckForm.companySize}</label>
            <select value={form.mitarbeiterzahl} onChange={(e) => set("mitarbeiterzahl", e.target.value)}>
              <option value="">{t.quickCheckForm.companySizePlaceholder}</option>
              {MITARBEITERZAHL_OPTIONEN.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.28)", marginTop: "6px", letterSpacing: "0.06em" }}>
              {t.quickCheckForm.companySizeHint}
            </p>
          </div>

          <div className="stagger-4" style={{ marginBottom: "1.25rem" }}>
            <label style={labelStyle}>{t.quickCheckForm.revenue}</label>
            <select value={form.jahresumsatz} onChange={(e) => set("jahresumsatz", e.target.value)}>
              <option value="">{t.quickCheckForm.revenuePlaceholder}</option>
              {UMSATZ_OPTIONEN.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.28)", marginTop: "6px", letterSpacing: "0.06em" }}>
              {t.quickCheckForm.revenueHint}
            </p>
          </div>

          <div className="stagger-5" style={fieldGroupStyle}>
            <label style={labelStyle}>{t.quickCheckForm.industry}</label>
            <input type="text" placeholder={t.quickCheckForm.industryPlaceholder} value={form.branche} onChange={(e) => set("branche", e.target.value)} />
          </div>

          <div className="stagger-6">
            <button
              onClick={() => setStep(2)}
              disabled={!step1Valid}
              style={step1Valid ? btnPrimary : btnDisabled}
              onMouseEnter={(e) => { if (step1Valid) { e.currentTarget.style.background = "var(--verde-dark)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(39,174,96,0.35)"; e.currentTarget.style.transform = "scale(1.01)"; } }}
              onMouseLeave={(e) => { if (step1Valid) { e.currentTarget.style.background = "var(--verde)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(39,174,96,0.25)"; e.currentTarget.style.transform = "scale(1)"; } }}
            >
              {t.quickCheckForm.nextStep}
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div key="step2" style={{ animation: "stepFadeIn 0.3s ease forwards" }}>
          <div className="stagger-1" style={fieldGroupStyle}>
            <label style={labelStyle}>{t.quickCheckForm.categories}</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {PROJEKTKATEGORIEN.map((k) => {
                const checked = form.projektkategorien.includes(k.value);
                return (
                  <label
                    key={k.value}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "10px 12px",
                      background: checked ? "rgba(39,174,96,0.1)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${checked ? "var(--verde)" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: "var(--radius)", cursor: "pointer",
                      transition: "all 0.15s",
                      boxShadow: checked ? "0 0 12px rgba(39,174,96,0.1)" : "none",
                    }}
                    onMouseEnter={(e) => { if (!checked) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; } }}
                    onMouseLeave={(e) => { if (!checked) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; } }}
                  >
                    <input type="checkbox" className="checkbox-custom" checked={checked} onChange={() => toggleKategorie(k.value)} />
                    <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>{k.icon}</span>
                    <span style={{ fontSize: "0.82rem", color: checked ? "var(--verde-bright)" : "rgba(255,255,255,0.7)", lineHeight: 1.3, fontWeight: checked ? 600 : 400 }}>
                      {k.value}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="stagger-2" style={fieldGroupStyle}>
            <label style={labelStyle}>
              {t.quickCheckForm.description}{" "}
              <span style={{ color: form.projektbeschreibung.length >= 50 ? "var(--verde-bright)" : "rgba(255,255,255,0.3)" }}>
                ({form.projektbeschreibung.length}/50 {t.quickCheckForm.descriptionMin})
              </span>
            </label>
            <textarea
              rows={4}
              placeholder={t.quickCheckForm.descriptionPlaceholder}
              value={form.projektbeschreibung}
              onChange={(e) => set("projektbeschreibung", e.target.value)}
              style={{ resize: "vertical" }}
            />
          </div>

          <div className="stagger-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={labelStyle}>{t.quickCheckForm.investmentSum}</label>
              <select value={form.investitionssumme} onChange={(e) => set("investitionssumme", e.target.value)}>
                <option value="">{t.quickCheckForm.investmentPlaceholder}</option>
                {INVESTITION_OPTIONEN.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.quickCheckForm.plannedStart}</label>
              <select value={form.projektstart} onChange={(e) => set("projektstart", e.target.value)}>
                <option value="">{t.quickCheckForm.startPlaceholder}</option>
                {PROJEKTSTART_OPTIONEN.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="stagger-4" style={fieldGroupStyle}>
            <label style={labelStyle}>{t.quickCheckForm.deMinimis}</label>
            <select value={form.deminimisErhalten} onChange={(e) => set("deminimisErhalten", e.target.value)}>
              <option value="">{t.quickCheckForm.deMinimisPlaceholder}</option>
              {DEMINIMIS_OPTIONEN.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div className="stagger-5" style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => setStep(1)}
              style={{ padding: "0.9rem 1.4rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, borderRadius: "var(--radius)", cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              {t.quickCheckForm.back}
            </button>
            <button
              onClick={() => { if (step2Valid) onSubmit(form); }}
              disabled={!step2Valid || isLoading}
              style={step2Valid && !isLoading ? { ...btnPrimary, flex: 1 } : { ...btnDisabled, flex: 1 }}
              onMouseEnter={(e) => { if (step2Valid && !isLoading) { e.currentTarget.style.background = "var(--verde-dark)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(39,174,96,0.35)"; e.currentTarget.style.transform = "scale(1.01)"; } }}
              onMouseLeave={(e) => { if (step2Valid && !isLoading) { e.currentTarget.style.background = "var(--verde)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(39,174,96,0.25)"; e.currentTarget.style.transform = "scale(1)"; } }}
            >
              {isLoading ? (
                <>
                  <span className="spinner" style={{ width: "16px", height: "16px", borderWidth: "2px" }} />
                  {t.quickCheckForm.analyzing}
                </>
              ) : (
                t.quickCheckForm.analyze
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
