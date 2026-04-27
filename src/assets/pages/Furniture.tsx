/* eslint-disable */

import Products from "../components/Products";
import { Helmet } from "react-helmet-async";

type propstype={
  products:any;
  addtocart:(product:any)=>void;
  searchedproduct:any;
  loading:boolean;
}
const Furniture = ({products, addtocart, searchedproduct, loading}: propstype) => {
  
  const furnitureproducts= products.filter((product:any)=>
product.category==="furniture"  
  )
  
  return <div>

    <Helmet>
      <title>Furniture Page</title>
    </Helmet>
<h2 className="all_product">Furniture</h2>
{!loading && searchedproduct.length===0 ? 
<h3>No Product Found</h3> :
<Products addtocart={addtocart} products={furnitureproducts}/>
}

  </div>;
};

export default Furniture;
