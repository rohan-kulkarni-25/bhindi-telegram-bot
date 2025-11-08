import dotenv from 'dotenv';

dotenv.config();

export const config = {
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
  },
  bhindi: {
    apiKey: process.env.BHINDI_API_KEY,
    apiUrl: process.env.BHINDI_API_URL || 'https://client-api.bhindi.io/api/chat/message',
  },
  nodeEnv: process.env.NODE_ENV || 'development',
};

// Validate required environment variables
const requiredEnvVars = ['TELEGRAM_BOT_TOKEN', 'BHINDI_API_KEY'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars.join(', '));
  console.error('Please check your .env file or Railway environment variables.');
  process.exit(1);
}
