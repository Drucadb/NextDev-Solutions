// Defensive Vercel Function: basic abuse controls only. Configure Vercel Firewall/WAF for real DDoS protection.
import type { VercelRequest, VercelResponse } from "@vercel/node";

type Entry = { count: number; resetAt: number };
const buckets = new Map<string, Entry>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;

function clientKey(req: VercelRequest) {
  return String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown").split(",")[0].trim();
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Access-Control-Allow-Origin", "https://nextdevsolutions.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  const now = Date.now();
  const key = clientKey(req);
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
  else if (current.count >= MAX_REQUESTS) return res.status(429).json({ error: "too_many_requests" });
  else current.count += 1;

  const body = typeof req.body === "object" && req.body ? req.body as Record<string, unknown> : {};
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (message.length < 10 || message.length > 2_000) return res.status(400).json({ error: "invalid_message" });

  return res.status(200).json({ ok: true, message: "Mensagem recebida. Retornaremos em breve." });
}
