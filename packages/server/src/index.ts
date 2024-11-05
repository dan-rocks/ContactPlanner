import express from 'express'
import authRouter from './routes/auth'
import "src/db"

const app = express()

app.use(express.json()) // Body parser
app.use(express.urlencoded({ extended: false }))

app.use("/auth", authRouter)
app.use(function (err, req, res, next) {
  res.status(500).json({ message: err.message });
} as express.ErrorRequestHandler)

app.listen(3050, () => {
  console.log("Server is running on http://localhost:3050")
});