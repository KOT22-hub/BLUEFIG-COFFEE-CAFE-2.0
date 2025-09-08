import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const { name, phone, email, seats, date, time, requests } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Reservation from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSeats: ${seats}\nDate: ${date}\nTime: ${time}\nRequests: ${requests}`,
    });

    return res.status(200).json({ message: "Reservation sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
