export type Consent = {
  analytics: boolean;
  marketing: boolean;
  /** ISO string of when the decision was made */
  ts: string;
};

export const CONSENT_KEY = "ppConsent.v1";
export const CONSENT_EVENT = "pp:consent-change";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export function writeConsent(c: Omit<Consent, "ts">) {
  if (typeof window === "undefined") return;
  const value: Consent = { ...c, ts: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT, { detail: value }),
    );
  } catch {}
}
