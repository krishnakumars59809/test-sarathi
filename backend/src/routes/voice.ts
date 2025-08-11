import { Router } from 'express';
import { CommandSchema, type CommandBody } from '../types/api.js';
import { validateBody, type RequestWithValidatedBody } from '../middleware/validate.js';
import { parseVoiceCommand } from '../services/commandParserService.js';

export const voiceRouter = Router();

voiceRouter.post('/parse', validateBody(CommandSchema), async (req, res, next) => {
  try {
    const { command } = (req as RequestWithValidatedBody<CommandBody>).validatedBody;
    const result = await parseVoiceCommand(command);
    res.json(result);
  } catch (err) {
    next(err);
  }
});