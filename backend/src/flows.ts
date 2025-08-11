import { z } from 'zod';

function hasNonEmpty(value: string | undefined) {
  return Boolean(value && value.trim() && value !== 'undefined' && value !== 'null');
}

function canUseAi(): boolean {
  const enabled = process.env.ENABLE_AI === 'true';
  const key = process.env.GOOGLE_GENAI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  return enabled && hasNonEmpty(key);
}

// ADD_STOCK
const AddStockInputSchema = z.object({
  voiceCommand: z.string().describe('The voice command transcribed to text.'),
});
const AddStockOutputSchema = z.object({
  intent: z.literal('ADD_STOCK'),
  product_name: z.string(),
  quantity: z.number(),
});
export type AddStockOutput = z.infer<typeof AddStockOutputSchema>;

export async function parseAddStock(voiceCommand: string): Promise<AddStockOutput> {
  if (!canUseAi()) throw new Error('AI disabled');
  const { getAi } = await import('./ai.js');
  const ai = await getAi();
  const addStockPrompt = ai.definePrompt({
    name: 'processVoiceCommandPrompt',
    input: { schema: AddStockInputSchema },
    output: { schema: AddStockOutputSchema },
    prompt: `Given the user request: "{{voiceCommand}}", convert it into a JSON command.
The valid intents are "ADD_STOCK".
Extract entities like "product_name" and "quantity".
Return a JSON string.
{
  "intent": "ADD_STOCK",
  "product_name": "STRING",
  "quantity": INTEGER
}`,
  });
  const { output } = await addStockPrompt({ voiceCommand });
  if (!output) throw new Error('No AI output');
  return output;
}

// RECORD_SALE
const RecordSaleInputSchema = z.object({
  transcribedText: z.string(),
});
const RecordSaleOutputSchema = z.object({
  intent: z.literal('RECORD_SALE'),
  product: z.string(),
  quantity: z.number(),
  amount: z.number(),
});
export type RecordSaleOutput = z.infer<typeof RecordSaleOutputSchema>;

export async function parseRecordSale(transcribedText: string): Promise<RecordSaleOutput> {
  if (!canUseAi()) throw new Error('AI disabled');
  const { getAi } = await import('./ai.js');
  const ai = await getAi();
  const recordSalePrompt = ai.definePrompt({
    name: 'processVoiceCommandRecordSalePrompt',
    input: { schema: RecordSaleInputSchema },
    output: { schema: RecordSaleOutputSchema },
    prompt: `Given the user request: "{{transcribedText}}", extract a JSON object with fields intent=RECORD_SALE, product, quantity, and amount.`,
  });
  const { output } = await recordSalePrompt({ transcribedText });
  if (!output) throw new Error('No AI output');
  return output;
}

// ADD_CREDIT
const AddCreditInputSchema = z.object({
  voiceCommand: z.string(),
});
const AddCreditOutputSchema = z.object({
  intent: z.literal('ADD_CREDIT'),
  party_name: z.string(),
  amount: z.number(),
});
export type AddCreditOutput = z.infer<typeof AddCreditOutputSchema>;

export async function parseAddCredit(voiceCommand: string): Promise<AddCreditOutput> {
  if (!canUseAi()) throw new Error('AI disabled');
  const { getAi } = await import('./ai.js');
  const ai = await getAi();
  const addCreditPrompt = ai.definePrompt({
    name: 'processVoiceCommandAddCreditPrompt',
    input: { schema: AddCreditInputSchema },
    output: { schema: AddCreditOutputSchema },
    prompt: `Given the user request: "{{voiceCommand}}", extract JSON with intent=ADD_CREDIT, party_name, amount.`,
  });
  const { output } = await addCreditPrompt({ voiceCommand });
  if (!output) throw new Error('No AI output');
  return output;
}

// CHECK_BALANCE
const CheckBalanceInputSchema = z.object({
  transcribedText: z.string(),
});
const CheckBalanceOutputSchema = z.object({
  intent: z.literal('CHECK_BALANCE'),
  party_name: z.string(),
});
export type CheckBalanceOutput = z.infer<typeof CheckBalanceOutputSchema>;

export async function parseCheckBalance(transcribedText: string): Promise<CheckBalanceOutput> {
  if (!canUseAi()) throw new Error('AI disabled');
  const { getAi } = await import('./ai.js');
  const ai = await getAi();
  const checkBalancePrompt = ai.definePrompt({
    name: 'processVoiceCommandCheckBalancePrompt',
    input: { schema: CheckBalanceInputSchema },
    output: { schema: CheckBalanceOutputSchema },
    prompt: `Given the user request: "{{transcribedText}}", extract JSON with intent=CHECK_BALANCE and party_name.`,
  });
  const { output } = await checkBalancePrompt({ transcribedText });
  if (!output) throw new Error('No AI output');
  return output;
}


