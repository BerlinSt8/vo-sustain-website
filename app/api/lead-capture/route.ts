import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

interface LeadData {
  email: string;
  name?: string;
  company: string;
  state: string;
  recommendation: string;
  programs: number;
  timestamp: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Read existing leads
    let leads: LeadData[] = [];
    try {
      const existing = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // File doesn't exist yet — start fresh
    }

    // Deduplicate by email
    if (!leads.some((l) => l.email === body.email)) {
      leads.push({
        email: body.email,
        name: body.name,
        company: body.company,
        state: body.state,
        recommendation: body.recommendation,
        programs: body.programs,
        timestamp: body.timestamp || new Date().toISOString(),
      });

      // Ensure data directory exists
      await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
      await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
    }

    // Log to console for Vercel logs visibility
    console.log(`[LEAD] ${body.email} | ${body.company} | ${body.state} | ${body.recommendation} | ${body.programs} programmes`);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[LEAD-CAPTURE]", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
