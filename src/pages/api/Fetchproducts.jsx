import axios from 'axios';

export async function Fetchproducts(categoryid) {
  try {
    const response = await axios.get(process.env.customUR + '/Products?populate=*&filters[category][id][$eq]='+categoryid, {
        headers: {
          Authorization: 'Bearer ' + process.env.customTo,
        },
    });
    return response.data.data 
  } catch (error) {
    return false;
  }
}
