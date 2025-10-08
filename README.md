# TestXX - Modern Full-Stack Application

Ultra-modern full-stack starter with interactive frontend and powerful backend.

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Turbopack** - Lightning-fast bundler

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe API development
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **ts-node** - TypeScript execution
- **Concurrently** - Run multiple processes

## 📁 Project Structure

```
testxx/
├── app/              # Next.js frontend (App Router)
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── server/           # Express backend
│   ├── index.ts      # API server
│   └── tsconfig.json # Backend TypeScript config
├── public/           # Static assets
├── .env.local        # Environment variables
└── package.json      # Dependencies & scripts
```

## 🛠️ Getting Started

### Development

**Run frontend only (port 3000):**
```bash
npm run dev
```

**Run backend only (port 3001):**
```bash
npm run server
```

**Run both frontend + backend:**
```bash
npm run dev:all
```

### Production

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```

## 📡 API Endpoints

The backend provides these default endpoints:

- `GET /api/health` - Health check
- `GET /api/test` - Test endpoint

Access at: `http://localhost:3001/api/...`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js frontend (port 3000) |
| `npm run server` | Start Express backend (port 3001) |
| `npm run dev:all` | Start both frontend & backend |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **API Health:** http://localhost:3001/api/health

## 📚 Next Steps

This is a clean, production-ready starter. Ready for your custom implementation:

1. Add your React components in `/app`
2. Create API routes in `/server`
3. Install additional packages as needed
4. Build your amazing application! 🚀

---

**Ready to build something amazing!** 🎉

