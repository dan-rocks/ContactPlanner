import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d317d6bac5715a",
    pass: "707d77b1e16335"
  }
});

export const mail = async (to: string, link: string): Promise<void> => {
  const mailOptions = {
    to: to,
    from: "verification@contactPlanner.com",
    html: `<h1>Click this <a href="${link}">link</a> to verify your email!`
  }
  await transport.sendMail(mailOptions)
}