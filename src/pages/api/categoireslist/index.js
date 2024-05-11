 import { Getcategories } from "../Getcategories";

export default async function handler( req, res) {
  const categoriesarray = await Getcategories( );
  if ( categoriesarray && categoriesarray !=false ) {   
         res.status(200).json({ categoriesarray }); 
  } else { 
        return false
  }
 
}
