import axios from 'axios';

export async function Getcategories( ) {
  try {
    const response = await axios.get(process.env.customUR + '/categories', {
        headers: {
          Authorization: 'Bearer ' + process.env.customTo,
        },
    });
    return response.data.data 
  } catch (error) {
    return false;
  }
}
