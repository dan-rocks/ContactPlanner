import { initTRPC } from '@trpc/server'

export const trpc = initTRPC.create()

// This is for making the public and private procedures
// export const publicProcedure = trpc.procedure
// export const privateProcedure = trpc.procedure.use(isAuthenticated)
// export const adminProcedure = privateProcedure.use(isAdmin)
