import { RequestHandler } from "express";
import UserModel from "src/models/user";
import { sendErrorRes } from "src/utils/sendErrorRes";
import crypto from 'crypto'
import VerificationTokenModel from "src/models/authVerificationToken";
import { transport } from "src/utils/mailer";


export const createNewUser: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) return sendErrorRes(res, "Missing required fields.", 400)
  
  const userAlreadyExists = await UserModel.findOne({ email })
  if (userAlreadyExists) return sendErrorRes(res, "User already exists.", 409)

  const user = await UserModel.create({ name, email, password })
  
  const verificationToken = crypto.randomBytes(36).toString('hex')
  await VerificationTokenModel.create({ owner: user._id, token: verificationToken })
  
  const link = `http://localhost:3000/auth/verify?id=${user._id}&t=${verificationToken}`

  transport.sendMail({
    from: "verification@contactPlanner.com",
    to: user.email,
    html: `<h1>Please click on this <a href="${link}">link</a> to verify your account!</h1>`
  })

  res.send({ message: "Please check your inbox!" })
};

export const RSVP: RequestHandler = async (req, res) => {
  
}