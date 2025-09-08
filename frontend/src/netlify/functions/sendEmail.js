// netlify/functions/sendEmail.js
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, phone, email, seats, date, time, requests } = JSON.parse(event.body);

    if (!name || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Reservation from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSeats: ${seats}\nDate: ${date}\nTime: ${time}\nRequests: ${requests}`
    });

    return { statusCode: 200, body: JSON.stringify({ message: 'Reservation sent successfully!' }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
