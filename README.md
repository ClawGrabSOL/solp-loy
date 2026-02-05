# 💰 Cryptoployed.fun

**Get paid in the crypto of your choice.**

Complete tasks. AI verifies your work. Choose your payout: BTC, ETH, SOL, or USDC.

## ✨ Features

- 🎯 **Task Marketplace** - Browse and claim available tasks
- 🤖 **AI Verification** - GPT-4 verifies submissions automatically
- 💵 **Multi-Crypto Payouts** - Choose BTC, ETH, SOL, or USDC
- ⚡ **Instant Payments** - Get paid immediately upon approval
- 📊 **Transparent Ledger** - All payouts visible on-chain

## 🚀 Quick Start

```bash
npm install
npm start
```

Open **http://localhost:3003**

## 🔧 Configuration

Create `.env.local`:

```env
# OpenAI for AI verification
OPENAI_API_KEY=sk-...

# Solana RPC
HELIUS_RPC=https://mainnet.helius-rpc.com/?api-key=YOUR_KEY

# Pool wallet (for SOL payouts)
POOL_PRIVATE_KEY=your_private_key_base58
```

## 📁 Structure

```
├── server.js           # Express backend + API
├── public/
│   ├── index.html      # Landing page
│   ├── tasks.html      # Task marketplace
│   └── payouts.html    # Payout ledger
```

## 🎨 Theme

- **Primary**: Teal (#00d4aa)
- **BTC**: Orange (#f7931a)
- **ETH**: Purple (#627eea)
- **SOL**: Violet (#9945ff)
- **USDC**: Blue (#2775ca)

## 💰 Supported Currencies

| Currency | Network |
|----------|---------|
| BTC | Bitcoin |
| ETH | Ethereum |
| SOL | Solana |
| USDC | Solana/Ethereum |

## 📜 License

MIT
