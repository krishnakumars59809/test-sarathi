import type { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = typeof err?.status === 'number' ? err.status : 500;
  const message = status === 500 ? 'Internal Server Error' : err?.message || 'Request failed';
  if (status >= 500) {
    console.error(err);
  }
  res.status(status).json({ error: message });
}