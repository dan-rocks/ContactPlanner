import { Router } from "express";
import { rsvp } from "src/controllers/wedding";
import { trpc } from "src/lib/tRPC";
import { RSVPSchema } from "src/utils/validationSchema";

const weddingRouter = trpc.router({
    rsvp: trpc.procedure
    .input(RSVPSchema)
    .mutation(({ input }) => {
        return rsvp(input.name, input.email, input.address)
    })
})


export default weddingRouter