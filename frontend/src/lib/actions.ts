'use server';

import { z } from 'zod';

const commandSchema = z.string().min(1, { message: 'Command cannot be empty.' });

type VoiceCommandResult =
  | { type: 'ADD_STOCK'; data: any }
  | { type: 'RECORD_SALE'; data: any }
  | { type: 'ADD_CREDIT'; data: any }
  | { type: 'CHECK_BALANCE'; data: any }
  | { error: string; details?: string };

export async function handleVoiceCommand(command: string): Promise<VoiceCommandResult> {
  const validation = commandSchema.safeParse(command);
  if (!validation.success) return { error: 'Invalid command' };

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL || 'http://localhost:4000';
  try {
    const res = await fetch(`${backendUrl}/api/voice/parse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command }),
      cache: 'no-store',
    });
    const json = await res.json();
    if (!res.ok) return { error: json?.error || 'Backend error', details: json?.details };
    return json as VoiceCommandResult;
  } catch (e: any) {
    return { error: 'Backend unreachable', details: e?.message };
  }
}
