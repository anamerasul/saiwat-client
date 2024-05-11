
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      let name = req.body.fullName
      let email= req.body.email
      let details= req.body.details
      try {
        const response = await axios.post(process.env.customUR + '/contacts',
         { "data": { fullName : name, emailAd: email, details: details }}, {
            headers: {
              Authorization: 'Bearer ' + process.env.customTo,
            },
          });
        console.log('Response from external API:', response.data);
        res.status(200).json({ message: 'Form submitted successfully!' });
      } catch (error) {
        console.log(formData);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }