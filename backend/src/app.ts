import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { voiceRouter } from './routes/voice.js';
import { errorHandler } from './middleware/error.js';

export function createApp() {
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

  app.get('/health', (_req, res) => res.json({ ok: true }));

  // Versioned API route
  app.use('/api/v1/voice', voiceRouter);
  // Backward compatibility with existing path
  app.use('/api/voice', voiceRouter);

  // Error handler should be last
  app.use(errorHandler);

  return app;
}