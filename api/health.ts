// Defensive endpoint for Vercel Functions. This is not a DDoS mitigation layer; use Vercel Firewall/WAF for volumetric attacks.
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  return res.status(200).json({ ok: true, service: "nextdev-solutions-api" });
}
