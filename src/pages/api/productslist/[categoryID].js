import { Fetchproducts } from "../Fetchproducts";

export default async function handler(req, res) {
  const { categoryID } = req.query;
  const productsarray = await Fetchproducts(categoryID);
  if ( productsarray && productsarray !=false ) {   
         res.status(200).json({ productsarray }); 
  } else { 
        return false
  }
 
}
