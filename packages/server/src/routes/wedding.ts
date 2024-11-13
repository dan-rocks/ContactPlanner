import { Router } from "express";
import { rsvp } from "src/controllers/wedding";
import { RSVPSchema } from "src/utils/validationSchema";
import validate from "src/utils/validator";

const weddingRouter = Router()

weddingRouter.post("/rsvp", validate(RSVPSchema), rsvp)

export default weddingRouter