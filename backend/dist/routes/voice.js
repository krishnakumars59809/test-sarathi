import { Router } from 'express';
import { CommandSchema } from '../types/api.js';
import { validateBody } from '../middleware/validate.js';
import { parseVoiceCommand } from '../services/commandParserService.js';
export const voiceRouter = Router();
voiceRouter.post('/parse', validateBody(CommandSchema), async (req, res, next) => {
    try {
        const { command } = req.validatedBody;
        const result = await parseVoiceCommand(command);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
});
