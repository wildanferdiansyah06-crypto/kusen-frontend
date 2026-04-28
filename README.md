# Kusen E-commerce Platform

Platform e-commerce modern untuk produk kusen kayu yang dibangun dengan Next.js 16.

## 🚀 Stack Teknologi

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Backend**: Next.js API Routes & Server Actions  
- **Database**: Mock Data (Ready for database integration)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, Lucide Icons
- **Deployment**: Vercel-ready

## 📦 API Endpoints

### Product Management
- `GET /api/kusen` - Daftar semua produk
- `GET /api/kusen/[id]` - Detail produk spesifik

### Cart Management  
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `GET /api/cart/count` - Get cart item count

## 🛠 Setup Development

1. **Install dependencies**
```bash
npm install
```

2. **Environment variables**
```bash
# Opsional - untuk database integration
# NEXT_PUBLIC_API_URL=
```

3. **Configure Database (Opsional)**
```bash
# Jika mau database integration, setup sesuai kebutuhan
# Saat ini menggunakan mock data
```

4. **Run development server**
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasil.

## 🚀 Deploy ke Vercel

### Langkah 1: Deploy Langsung
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau connect repository GitHub ke Vercel untuk auto-deployment.

### Langkah 2: Database Integration (Opsional)
- Bisa tambahkan database seperti Supabase, Vercel Postgres, atau Sanity
- Update API endpoints untuk connect ke database
- Environment variables di Vercel dashboard

## 📁 Struktur Project

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API Routes
│   │   ├── kusen/      # Product endpoints
│   │   └── cart/       # Cart endpoints
│   └── (pages)/        # Page components
├── components/         # Reusable UI components
├── lib/               # Utility functions & API client
└── styles/            # Global styles
```

## 🔄 Mock Data System

Aplikasi ini menggunakan mock data sehingga bisa langsung dijalankan tanpa setup database. Siap untuk diintegrasikan dengan database apa saja.

## 🎯 Features

- ✅ Product catalog dengan filtering & search
- ✅ Shopping cart dengan session management
- ✅ Responsive design untuk mobile & desktop
- ✅ SEO optimized dengan static generation
- ✅ TypeScript untuk type safety
- ✅ Modern UI dengan Tailwind CSS

## 📝 Development Notes

- API routes menggunakan mock data (ready untuk database integration)
- Cart menggunakan in-memory storage (bisa diupgrade ke database)
- Semua API endpoints memiliki error handling yang proper
- Clean project structure tanpa dependencies yang tidak perlu
