# Mechanic Social Backend
Express.js server with TypeScript for the Mechanic Social application.

## Setup
Install dependencies:
```bash
  npm install
```

## Development
Start the development server with auto-restart on file changes:
```bash
  npm run dev
```
The server will run on `http://localhost:3000`


## Production
Build the TypeScript to JavaScript:
```bash
  npm run build
```
Start the compiled server:
```bash
  npm start
```

## Simple Project Structure
```
server/
├── src/
│   └── server.ts          # Main server file
├── dist/                  # Compiled JavaScript (generated)
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Scripts
- `npm run dev` — Start dev server with hot reload
- `npm run build` — Compile TypeScript to JavaScript
- `npm start` — Run compiled production server

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Language**: TypeScript 5.9.3
- **Dev Tools**: ts-node, nodemon