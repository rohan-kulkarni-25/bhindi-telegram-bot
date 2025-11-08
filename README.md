# Bhindi Telegram Bot

A Telegram bot that forwards messages to Bhindi API for processing.

## Features

- 🤖 Simple and clean Grammy-based bot
- 🔄 Forwards messages to Bhindi API
- ⚡ Fast and lightweight
- 🚀 Ready for Railway deployment
- 🔒 Secure environment variable handling

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/rohan-kulkarni-25/bhindi-telegram-bot.git
cd bhindi-telegram-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
BHINDI_API_KEY=your_bhindi_api_key_here
BHINDI_API_URL=https://client-api.bhindi.io/api/chat/message
```

### 4. Run locally

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## Getting Your Credentials

### Telegram Bot Token

1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the bot token provided

### Bhindi API Key

Get your API key from [Bhindi Dashboard](https://bhindi.io)

## Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

### Manual Railway Deployment

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `BHINDI_API_KEY`
   - `BHINDI_API_URL` (optional)
4. Deploy!

Railway will automatically:
- Install dependencies
- Run `npm start`
- Keep your bot running 24/7

## Project Structure

```
bhindi-telegram-bot/
├── src/
│   ├── bot.js              # Main bot logic
│   ├── config.js           # Configuration management
│   └── services/
│       └── bhindiApi.js    # Bhindi API integration
├── .env.example            # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## Usage

1. Start a chat with your bot on Telegram
2. Send `/start` to see the welcome message
3. Send any text message
4. The bot will forward it to Bhindi API and reply with the response

## Commands

- `/start` - Show welcome message
- `/help` - Get help information

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `TELEGRAM_BOT_TOKEN` | Yes | - | Your Telegram bot token from BotFather |
| `BHINDI_API_KEY` | Yes | - | Your Bhindi API key |
| `BHINDI_API_URL` | No | `https://client-api.bhindi.io/api/chat/message` | Bhindi API endpoint |
| `NODE_ENV` | No | `production` | Environment mode |

## License

MIT
