import { RequestHandler } from "express";

export const rsvp: RequestHandler = (req, res) => {
  const { name, email, address } = req.body
}