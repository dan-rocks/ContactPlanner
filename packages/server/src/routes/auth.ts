import { trpc } from "src/lib/trpc";
import { signUpSchema } from "src/utils/validationSchema";

export const authRouter = trpc.router({
    signUp: trpc.procedure
    .input(signUpSchema)
    .mutation(() => {
        return {}
    })
})