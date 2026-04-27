/* eslint-disable */
import { useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { toast} from 'react-toastify';

type producttype = {
  product: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    rating: number;
    discountPercentage: number;
  };
 
   addtocart: (product: any) => void;
  

};





const Product = ({ product, addtocart}: producttype) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { thumbnail, title, description, price, discountPercentage } = product;



  return (
    <div className="product">
      <img className="product-image" src={thumbnail} alt={title} width="100%" />
      <h3 className="product-title">Product Name: {title}</h3>
      <p className="product-description">
        Product Description: {toggle ?  description.slice(0,10):description}
        <span onClick={()=>{setToggle(!toggle)}} className="seemore">{toggle ? "...See More" : " See Less"} </span>
      </p>
      <h3 className="product-price">Price: ${price}</h3>
      <h4 className="product-discount">Discount: {discountPercentage}%</h4>
      <h4 className="product-rating">Rating: {product.rating} out of 5</h4>
      <button onClick={() => {addtocart(product); toast.success("Product Added to Cart")}} className="add-to-cart">Add to Cart</button>

      <Link to={`/products/${product.id}`}>
      <button className="buy-now">View Product</button>
      </Link>
    </div>
  );
};

export default Product;
