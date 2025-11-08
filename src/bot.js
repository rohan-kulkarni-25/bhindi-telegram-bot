import { Bot } from 'grammy';
import { config } from './config.js';
import { sendToBhindiAPI } from './services/bhindiApi.js';

const bot = new Bot(config.telegram.botToken);

// Welcome message
bot.command('start', async (ctx) => {
  await ctx.reply(
    '👋 Welcome to Bhindi Bot!\n\n' +
    'Send me any message and I\'ll process it through Bhindi API.\n\n' +
    'Commands:\n' +
    '/start - Show this message\n' +
    '/help - Get help'
  );
});

// Help command
bot.command('help', async (ctx) => {
  await ctx.reply(
    '🤖 How to use:\n\n' +
    '1. Send any text message\n' +
    '2. I\'ll forward it to Bhindi API\n' +
    '3. You\'ll get a link to view the response\n\n' +
    'That\'s it! Simple and powerful.'
  );
});

// Handle all text messages
bot.on('message:text', async (ctx) => {
  const userMessage = ctx.message.text;
  
  // Skip if it's a command
  if (userMessage.startsWith('/')) {
    return;
  }

  try {
    // Show typing indicator
    await ctx.replyWithChatAction('typing');
    
    // Send to Bhindi API
    const data = await sendToBhindiAPI(userMessage);
    
    // Extract chatId from response
    const chatId = data?.data?.chatId;
    
    if (chatId) {
      // Send Bhindi chat link
      await ctx.reply(`https://bhindi.io/c/${chatId}`);
    } else {
      // Fallback if chatId not found
      await ctx.reply('✅ Message processed, but no chat link available.');
      console.warn('No chatId in response:', data);
    }
    
  } catch (error) {
    console.error('Error processing message:', error);
    await ctx.reply(
      '❌ Sorry, something went wrong while processing your message.\n' +
      'Please try again later.'
    );
  }
});

// Error handling
bot.catch((err) => {
  console.error('Bot error:', err);
});

// Start the bot
bot.start({
  onStart: () => {
    console.log('✅ Bhindi Telegram Bot is running!');
    console.log(`📝 Environment: ${config.nodeEnv}`);
    console.log(`🔗 API URL: ${config.bhindi.apiUrl}`);
  },
});

// Graceful shutdown
process.once('SIGINT', () => {
  console.log('\n🛑 Shutting down bot...');
  bot.stop();
});

process.once('SIGTERM', () => {
  console.log('\n🛑 Shutting down bot...');
  bot.stop();
});
