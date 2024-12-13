import express from "express";
import { appRouter } from "./routes";
import "src/db";
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from "cors";

const app = express();

app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(function (req, res, next) {
	console.log(req.method, req.url);
	next();
} as express.RequestHandler);

// app.use(function (err, req, res, next) {
//   res.status(500).json({ message: err.message });
// } as express.ErrorRequestHandler)

app.use(
	trpcExpress.createExpressMiddleware({
		router: appRouter,
	})
);

app.listen(3050, () => {
	console.log("Server is running on http://localhost:3050");
});

export * from './routes'