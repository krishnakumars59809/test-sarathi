import { z } from 'zod';
export const CommandSchema = z.object({ command: z.string().min(1) });
