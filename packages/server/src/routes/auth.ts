import { Router } from "express";
import { createNewUser } from "../controllers/auth";
import { newUserSchema } from "src/utils/validationSchema";
import validate from "src/utils/validator";

const authRouter = Router()

authRouter.post('/sign-up', validate(newUserSchema), createNewUser)

export default authRouter