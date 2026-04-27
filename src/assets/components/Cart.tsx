/* eslint-disable */

import "./cart.css"
import { RiCloseLargeFill } from "react-icons/ri";


type carttypes={
    carttoggle: boolean;
    cartproducts: any[];
    setCarttoggle:(value:boolean)=>void;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    totalprice: number;
    
}

const Cart = ({carttoggle,cartproducts, setCarttoggle, increaseQty, decreaseQty, totalprice}: carttypes) => {


   

  return (
    <div className={carttoggle? "cart show": "cart"}>
<button className="cart-close-button" onClick={()=>{setCarttoggle(false)}}><RiCloseLargeFill className='cart-close-icon'/></button>
{cartproducts.map((prdts)=>{
 return <div key={prdts.id}>
<h3>Product Title: {prdts.title}</h3>
<h5>Product quantity: {prdts.quantity}</h5>
<h5>Product Price: ${prdts.price}</h5>

<button onClick={()=>{increaseQty(prdts.id)}}>+</button>
<button onClick={()=>{decreaseQty(prdts.id)}}>-</button>

 </div> 
})}
<h4>Total Price: {totalprice}</h4>
     
    </div>
  )
}
        


export default Cart



