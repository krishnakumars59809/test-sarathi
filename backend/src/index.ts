import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import {
  parseAddStock,
  parseRecordSale,
  parseAddCredit,
  parseCheckBalance,
} from './flows';

const app = express();
app.use(express.json());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

// Health
app.get('/health', (_req, res) => res.json({ ok: true }));

// Parse route
const commandSchema = z.object({ command: z.string().min(1) });
app.post('/api/voice/parse', async (req, res) => {
  const parsed = commandSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid command' });
  const { command } = parsed.data;
  const lower = command.toLowerCase();
  try {
    if (lower.includes('stock') || lower.includes('add')) {
      const data = await parseAddStock(command);
      return res.json({ type: 'ADD_STOCK', data });
    }
    if (lower.includes('sale') || lower.includes('bech') || lower.includes('sold')) {
      const data = await parseRecordSale(command);
      return res.json({ type: 'RECORD_SALE', data });
    }
    if (lower.includes('credit') || lower.includes('udhaar')) {
      const data = await parseAddCredit(command);
      return res.json({ type: 'ADD_CREDIT', data });
    }
    if (lower.includes('balance') || lower.includes('khata')) {
      const data = await parseCheckBalance(command);
      return res.json({ type: 'CHECK_BALANCE', data });
    }
    return res.status(400).json({ error: 'Unknown intent' });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: 'AI processing failed', details: e?.message });
  }
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));


