/* eslint-disable */

import Product from './Product';
import './products.css';



type productstype={
    products: any[];
  
    addtocart: (product: any[]) => void;
    

}

const Products = ({products, addtocart}: productstype) => {
  return (
    <div className="products-container">
      {products.map(product=><Product key={product.id} product={product} addtocart={addtocart} />)}
    {/*   {products.find(product=><Productdetails key={product.id} product={product} addtocart={addtocart}/>)} */}
    
    </div>
  )
}

export default Products