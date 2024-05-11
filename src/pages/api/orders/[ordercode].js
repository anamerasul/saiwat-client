import { fetchOrderStatus } from "../Orderservice";

export default async function handler(req, res) {
  const { ordercode } = req.query;
  const orderStatus = await fetchOrderStatus(ordercode);
  if ( orderStatus && orderStatus !=false ) {   
         res.status(200).json({ orderStatus }); 
  } else { 
        return false
  }
 
}
