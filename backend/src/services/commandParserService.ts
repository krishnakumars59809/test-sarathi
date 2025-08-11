import type { ParsedResult } from '../types/api.js';
import { parseAddStock, parseRecordSale, parseAddCredit, parseCheckBalance } from '../flows.js';

const isAddStock = (text: string) => text.includes('stock') || text.includes('add');
const isRecordSale = (text: string) => text.includes('sale') || text.includes('bech') || text.includes('sold');
const isAddCredit = (text: string) => text.includes('credit') || text.includes('udhaar');
const isCheckBalance = (text: string) => text.includes('balance') || text.includes('khata');

export async function parseVoiceCommand(command: string): Promise<ParsedResult> {
  const lower = command.toLowerCase();

  if (isAddStock(lower)) {
    const data = await parseAddStock(command);
    return { type: 'ADD_STOCK', data };
  }
  if (isRecordSale(lower)) {
    const data = await parseRecordSale(command);
    return { type: 'RECORD_SALE', data };
  }
  if (isAddCredit(lower)) {
    const data = await parseAddCredit(command);
    return { type: 'ADD_CREDIT', data };
  }
  if (isCheckBalance(lower)) {
    const data = await parseCheckBalance(command);
    return { type: 'CHECK_BALANCE', data };
  }

  throw Object.assign(new Error('Unknown intent'), { status: 400 });
}