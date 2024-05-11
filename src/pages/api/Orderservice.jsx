import axios from 'axios';

export async function fetchOrderStatus(ordercd) {
  try {
    const response = await axios.get(process.env.customUR + '/orders?filters[Ordercode][$eq]='+ordercd, {
        headers: {
          Authorization: 'Bearer ' + process.env.customTo,
        },
    });
    return response.data.data[0].attributes.Orderstatus
  } catch (error) {
    return false;
  }
}
