/* eslint-disable */

import Products from "../components/Products";
import { Helmet } from "react-helmet-async";


  type propstype={
products:any;
addtocart:(product:any)=>void;
searchedproduct:any;
loading:boolean

    
  }
const Cosmetics = ({products, addtocart, searchedproduct, loading}: propstype) => {



  const cosmeticsproducts=products.filter((product:any)=>
  { return product.category==="beauty"}
  )
  return <div>

<Helmet>
  <title>Cosmetics Page</title>
</Helmet>
<h2 className="all_product">Cosmetics</h2>
{!loading && searchedproduct.length===0 ? <h3>No Product Found</h3> :
   <Products products={cosmeticsproducts} addtocart={addtocart}/>}

  

  </div>;
};

export default Cosmetics;
