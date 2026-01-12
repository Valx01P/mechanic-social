# Mechanic Social Frontend
Next.js 16 frontend built with React 19, TypeScript, and Tailwind CSS.

## Setup
Install dependencies:
```bash
npm install
```

## Development
Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
The app will auto-refresh as you make changes.

## Production
Build for production:
```bash
npm run build
```
Start the production server:
```bash
npm start
```

## Project Structure
```
client/
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles with Tailwind
├── public/                # Static assets
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.mjs     # PostCSS configuration
└── README.md              # This file
```

## Scripts
- `npm run dev` — Start dev server with hot reload
- `npm run build` — Build for production
- `npm start` — Run production server

## Tech Stack
- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Path Alias**: `@/*` maps to root directory

## Features
- App Router with TypeScript support
- Tailwind CSS for styling
- Optimized images with Next.js Image component
- Built-in SEO with metadata