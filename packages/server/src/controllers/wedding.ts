import { RequestHandler } from "express";
import RSVPModel from "src/models/rsvp";
import { sendErrorRes } from "src/utils/sendErrorRes";

export const rsvp: RequestHandler = async (req, res) => {
  const { name, email, address } = req.body

  if (!name || !email || !address) return sendErrorRes(res, "Missing information", 422)

  const invalidEmail = await RSVPModel.findOne({ email })
  if (invalidEmail) return sendErrorRes(res, "Email already in use", 409)

  const user = await RSVPModel.create({ name, email, address })
  if (!user) return sendErrorRes(res, "Unable to save data. Try again later", 500)
  
  res.send({ message: "Information added to database successfully!" })
}