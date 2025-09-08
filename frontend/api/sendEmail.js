// netlify/functions/sendEmail.js
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    let body;
    try {
      body = JSON.parse(event.body);
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON in request body' }) };
    }

    const { name, phone, email, seats, date, time, requests } = body;

    if (!name || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    // Nodemailer setup
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    } catch (transporterError) {
      console.error("Error setting up transporter:", transporterError);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to setup email transporter' }) };
    }

    // Send the email
    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Reservation from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSeats: ${seats}\nDate: ${date}\nTime: ${time}\nRequests: ${requests}`
      });
    } catch (sendError) {
      console.error("Error sending email:", sendError);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ message: 'Reservation sent successfully!' }) };

  } catch (error) {
    console.error("Unexpected error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};
