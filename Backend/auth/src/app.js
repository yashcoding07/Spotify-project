// imports
import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/api/auth", authRoutes)

export default app