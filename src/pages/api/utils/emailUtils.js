import fetch from 'node-fetch';

const BREVO_API_KEY = process.env.BREVO_API_KEY;

export async function sendEmailViaBrevo(recipient, subject, message) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'API-Key': BREVO_API_KEY 
    },
    body: JSON.stringify({
      sender: {
        name: "Events by Juna",
        email: "contact@eventsbyjuna.com"
      },
      to: [
        {
            email: "eventsbyjuna@gmail.com",
            name: "Events By Juna"
        },
      ],
      subject: subject,
      htmlContent: message
    }),
  };

  return await fetch('https://api.brevo.com/v3/smtp/email', requestOptions);
}