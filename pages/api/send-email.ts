import type { NextApiRequest, NextApiResponse } from "next";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const nodemailer = require("nodemailer");

type Data = {
  status: number;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {name, email, message} = req.body;
  if(!name || !email) res.status(406).json({ status: 406, message: "Required fields are not provided" });
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `Portfolio Form Submission from ${name}`,
      text: `Email: ${email}
      Message: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 200, message: "Email Sent" });
  } catch (err) {
    res.status(500).json({ status: 500, message: JSON.stringify(err) });
  }
}
