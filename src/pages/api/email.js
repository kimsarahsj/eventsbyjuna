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
          res.status(200).json(response.data);
        } else {
          res.status(response.status).json({ error: response.data.message || 'An error occurred while sending the email.' });
          //res.status(response.status).json({ error: response});
        }

        res.status(200).json({success: true});
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while sending the email.' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  