import { z } from 'zod';
import type {
  AddStockOutput,
  RecordSaleOutput,
  AddCreditOutput,
  CheckBalanceOutput,
} from '../flows.js';

export const CommandSchema = z.object({ command: z.string().min(1) });
export type CommandBody = z.infer<typeof CommandSchema>;

export type ParsedResult =
  | { type: 'ADD_STOCK'; data: AddStockOutput }
  | { type: 'RECORD_SALE'; data: RecordSaleOutput }
  | { type: 'ADD_CREDIT'; data: AddCreditOutput }
  | { type: 'CHECK_BALANCE'; data: CheckBalanceOutput };