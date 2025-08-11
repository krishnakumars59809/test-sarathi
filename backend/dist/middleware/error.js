export function errorHandler(err, _req, res, _next) {
    const status = typeof err?.status === 'number' ? err.status : 500;
    const message = status === 500 ? 'Internal Server Error' : err?.message || 'Request failed';
    if (status >= 500) {
        console.error(err);
    }
    res.status(status).json({ error: message });
}
