import { z } from 'zod';

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
});

// Validate environment variables at runtime
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

try {
  envSchema.parse(process.env);
} catch (err) {
  if (err instanceof z.ZodError) {
    throw new Error(
      `❌ Invalid environment variables: ${err.errors.map((e) => e.path).join(', ')}`
    );
  }
} 