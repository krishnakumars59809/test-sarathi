import type { ParsedResult } from '../types/api.js';
import { parseAddStock, parseRecordSale, parseAddCredit, parseCheckBalance } from '../flows.js';

const isAddStock = (text: string) => text.includes('stock') || text.includes('add');
const isRecordSale = (text: string) => text.includes('sale') || text.includes('bech') || text.includes('sold');
const isAddCredit = (text: string) => text.includes('credit') || text.includes('udhaar');
const isCheckBalance = (text: string) => text.includes('balance') || text.includes('khata');

function hasAiKey(): boolean {
  return Boolean(process.env.GOOGLE_GENAI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY);
}

function toInt(value: string | undefined, defaultValue = 1): number {
  const n = Number((value || '').replace(/[,₹]/g, ''));
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : defaultValue;
}

function fallbackParse(command: string): ParsedResult {
  const lower = command.toLowerCase();
  const numberMatches = command.match(/\d+[\d,]*/g) || [];
  const words = command.replace(/\d+[\d,]*/g, '').trim().split(/\s+/);
  const productGuess = words.filter(w => /[a-z]/i.test(w)).slice(0, 3).join(' ') || 'item';

  if (isAddStock(lower)) {
    const quantity = toInt(numberMatches[0], 1);
    return { type: 'ADD_STOCK', data: { intent: 'ADD_STOCK', product_name: productGuess, quantity } } as ParsedResult;
  }
  if (isRecordSale(lower)) {
    const quantity = toInt(numberMatches[0], 1);
    const amount = toInt(numberMatches[1], 0);
    return { type: 'RECORD_SALE', data: { intent: 'RECORD_SALE', product: productGuess, quantity, amount } } as ParsedResult;
  }
  if (isAddCredit(lower)) {
    const amount = toInt(numberMatches[0], 0);
    const party_name = productGuess || 'Party';
    return { type: 'ADD_CREDIT', data: { intent: 'ADD_CREDIT', party_name, amount } } as ParsedResult;
  }
  if (isCheckBalance(lower)) {
    const party_name = productGuess || 'Party';
    return { type: 'CHECK_BALANCE', data: { intent: 'CHECK_BALANCE', party_name } } as ParsedResult;
  }
  throw Object.assign(new Error('Unknown intent'), { status: 400 });
}

export async function parseVoiceCommand(command: string): Promise<ParsedResult> {
  const lower = command.toLowerCase();

  // Try AI parse if key exists, else fallback early
  const tryAi = hasAiKey();

  try {
    if (isAddStock(lower)) {
      if (tryAi) {
        const data = await parseAddStock(command);
        return { type: 'ADD_STOCK', data };
      }
      return fallbackParse(command);
    }
    if (isRecordSale(lower)) {
      if (tryAi) {
        const data = await parseRecordSale(command);
        return { type: 'RECORD_SALE', data };
      }
      return fallbackParse(command);
    }
    if (isAddCredit(lower)) {
      if (tryAi) {
        const data = await parseAddCredit(command);
        return { type: 'ADD_CREDIT', data };
      }
      return fallbackParse(command);
    }
    if (isCheckBalance(lower)) {
      if (tryAi) {
        const data = await parseCheckBalance(command);
        return { type: 'CHECK_BALANCE', data };
      }
      return fallbackParse(command);
    }
    throw Object.assign(new Error('Unknown intent'), { status: 400 });
  } catch (err) {
    // On AI failure, fallback in dev
    return fallbackParse(command);
  }
}