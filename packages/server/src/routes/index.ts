import { trpc } from "src/lib/trpc";
import { authRouter } from "./auth";
import { dayRouter } from "./day";

export const appRouter = trpc.router({
    day: dayRouter,
    auth: authRouter
})

export type AppRouter = typeof appRouter