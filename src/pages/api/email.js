import { sendEmailViaBrevo } from './utils/emailUtils'; // Import the utility function
import { isServer } from './utils/helpers'; // Import the server check function


export default async function handler(req, res) {
    if (!isServer(req)) {
      //return res.status(403).json({ error: 'Access forbidden' });
    }
  
    if (req.method === 'POST') {
      try {
        const { recipient, subject, message } = req.body;

        const response = await sendEmailViaBrevo(recipient, subject, message);
  
        if (response.ok) {
          res.status(200).json(response);
        } else {
          res.status(response.status).json({ error: 'An error occurred while sending the email.' });
        }
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while sending the email.' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  