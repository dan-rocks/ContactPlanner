import { trpc } from "src/lib/trpc";

export const dayRouter = trpc.router({
    getDays: trpc.procedure.query(() => {
        return {}
    })
})