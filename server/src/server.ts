import express, { type Request, type Response } from "express"

const app = express()
const PORT = 3001

/**
http://localhost:3001
*/
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "yo", timestamp: new Date().toISOString() })
})

/**
http://localhost:3001/health
*/
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})