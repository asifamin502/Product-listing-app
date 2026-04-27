/* eslint-disable */

import Products from '../components/Products'
import { Helmet } from 'react-helmet-async';
 
type propstype={
  products:any;
 addtocart: (product: any) => void;
 searchedproduct: any[];
 loading: boolean
}
const Fragrances = ({addtocart, products, searchedproduct, loading}: propstype) => {

  const fragrancesproducts= products.filter((product:any)=>{
    return product.category==="fragrances"  })

  
  return (
    <div>

<Helmet>
  <title>Fragrances Page</title>
</Helmet>
<h2 className="all_product">Fragrances</h2>
{!loading && searchedproduct.length===0 ? 
<h3>No Product Found</h3> :  <Products products={fragrancesproducts} addtocart={addtocart}/>

}

     
    </div>
  )
   
  
}

export default Fragrances