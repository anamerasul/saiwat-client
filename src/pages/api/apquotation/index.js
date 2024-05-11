
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      let name = req.body.fullName
      let email= req.body.email
      let details= req.body.details
      let phone = req.body.phoneNumber
      let company = req.body.companyname
      let category = req.body.category
      let city =req.body.city

      try {
        const response = await axios.post(process.env.customUR + '/quotations',
         { "data": { fullName : name, phoneNum: phone ,email: email, city:city, companyname:company, category:category ,details: details }}, {
            headers: {
              Authorization: 'Bearer ' + process.env.customTo,
            },
          });
        res.status(200).json({ message: 'Form submitted successfully!' });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }