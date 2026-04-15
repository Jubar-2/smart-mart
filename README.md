This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# smart-mart


src/
│
├── app/                          # 🔥 Core routing system
│
│   ├── (store)/                 # Public eCommerce
│   │   ├── layout.tsx           # Navbar + Footer
│   │   ├── page.tsx             # Home
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   │
│   │   ├── cart/page.tsx
│   │   ├── checkout/page.tsx
│   │   └── account/
│   │
│   ├── (admin)/                 # Admin Panel
│   │   ├── layout.tsx           # Sidebar layout
│   │   ├── dashboard/page.tsx
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── create/page.tsx
│   │   │   └── [id]/edit/page.tsx
│   │   │
│   │   ├── orders/
│   │   ├── customers/
│   │   └── settings/
│
│   ├── api/                     # Backend (Route Handlers)
│   │   ├── products/route.ts
│   │   ├── orders/route.ts
│   │   ├── auth/route.ts
│   │   └── upload/route.ts
│
│   └── layout.tsx               # Root layout
│
├── modules/                     # 🔥 Feature-based (VERY IMPORTANT)
│   ├── product/
│   │   ├── components/
│   │   ├── actions/             # 🔥 Server Actions (Next 16)
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types.ts
│   │   └── utils.ts
│   │
│   ├── order/
│   ├── cart/
│   ├── user/
│   └── payment/
│
├── components/                  # Shared UI
│   ├── ui/                      # shadcn/ui
│   ├── layout/                  # Navbar, Sidebar
│   └── shared/
│
├── lib/                         # Core logic
│   ├── db.ts
│   ├── auth.ts
│   ├── cache.ts                 # Next 16 caching helpers
│   └── utils.ts
│
├── store/                       # Zustand / global state
│   ├── cart.store.ts
│   └── user.store.ts
│
├── config/
│   ├── env.ts
│   └── site.ts
│
├── styles/
│   └── globals.css
│
└── types/
    └── index.ts