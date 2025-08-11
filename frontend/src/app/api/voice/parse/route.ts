import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';

    const res = await fetch(`${backendUrl}/api/voice/parse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      // Avoid caching to ensure fresh AI responses
      cache: 'no-store',
    });

    const json = await res.json().catch(() => ({ error: 'Invalid JSON from backend' }));
    return NextResponse.json(json, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ error: 'Proxy error', details: err?.message }, { status: 500 });
  }
}