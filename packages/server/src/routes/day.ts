import { trpc } from "src/lib/tRPC";

export const dayRouter = trpc.router({
    getDays: trpc.procedure.query(() => {
        return {}
    })
})