import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';

export function validateBody<T>(schema: ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request body', details: parsed.error.flatten() });
    }
    // Attach parsed data for downstream handlers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req as any).validatedBody = parsed.data;
    next();
  };
}

export type RequestWithValidatedBody<T> = Request & { validatedBody: T };