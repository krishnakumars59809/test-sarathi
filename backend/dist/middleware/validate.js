export function validateBody(schema) {
    return (req, res, next) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: 'Invalid request body', details: parsed.error.flatten() });
        }
        // Attach parsed data for downstream handlers
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        req.validatedBody = parsed.data;
        next();
    };
}
