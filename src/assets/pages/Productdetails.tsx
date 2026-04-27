/* eslint-disable */

import { useParams } from 'react-router-dom'
import './productdetails.css'
import { toast } from 'react-toastify';


type productdetailstype={
products:any;
  loading: boolean;
  
  addtocart:(product:any)=>void;

}

const Productdetails = ({products, addtocart, loading}: productdetailstype) => {
    const {id}=useParams();
    const productdetails= products.find((product:any)=> product.id===Number(id))
  return (
    <div className='product-details'>
{loading ? (<h4 className='product-notfound'>Error Here</h4>) :
(<> <h2 className='product-heading'>{productdetails.title}</h2> 
<img className='product-image' src={productdetails.thumbnail} alt={productdetails.title} width="100%"/>
<p className='product-description'>Description: {productdetails.description}</p>
<h4 className='product-category'>Category: {productdetails.category}</h4>
<h3 className='product-price'>Price: ${productdetails.price}</h3>
<h4 className='product-rating'>Rating: {productdetails.rating} out of 5</h4>
<h4 className='product-brand'>Brand: {productdetails.brand}</h4>
<h4 className='product-warrenty'>Warrenty: {productdetails.warrantyInformation}</h4>
<h5 className='product-shipping'>Shipping Time: {productdetails.shippingInformation}</h5>
<h5 className='product-availablestatus'>Stock: {productdetails.availabilityStatus}</h5>
<h5 className='product-returnpolicy'>Return Policy: {productdetails.returnPolicy}</h5>

<button className='cart-button' onClick={()=>{addtocart(productdetails);toast.success("Product Added to Cart")}}>Add To Cart</button>

{productdetails.reviews.map((review:any)=>(<div className='product-review'><li className='product-comment'>Comments: {review.comment}</li>
<li className='product-rating'>Rating: {review.rating} out of 5</li></div>))}
</>) }




    </div>
  )
}

export default Productdetails