function hasNonEmpty(value: string | undefined) {
  return Boolean(value && value.trim() && value !== 'undefined' && value !== 'null');
}

function canUseAi(): boolean {
  const enabled = process.env.ENABLE_AI === 'true';
  const key = process.env.GOOGLE_GENAI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  return enabled && hasNonEmpty(key);
}

export async function getAi() {
  const { genkit } = await import('genkit');
  const plugins: any[] = [];
  if (canUseAi()) {
    try {
      const mod = await import('@genkit-ai/googleai');
      plugins.push(mod.googleAI());
    } catch (err) {
      // ignore
    }
  }
  return genkit({ plugins });
}


