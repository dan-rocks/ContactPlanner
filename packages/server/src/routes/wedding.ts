import { Router } from "express";
import { rsvp } from "src/controllers/wedding";

const weddingRouter = Router()

weddingRouter.post("/rsvp", rsvp)