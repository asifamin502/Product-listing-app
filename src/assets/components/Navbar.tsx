/* eslint-disable */
import { useState, type ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import { BsMenuButtonWide } from "react-icons/bs";
import { AiTwotoneFire } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { TfiShoppingCart } from "react-icons/tfi";
import Cart from "../components/Cart";

type propstype={
   addsearchome: (searchvalue: string) => void;
productlength: any;
setCarttoggle:any;
carttoggle:any;
cartproducts:any[];
decreaseQty: (id:number)=> void;
totalprice:number;
increaseQty: (id: number) => void;
}

const Navbar = ({addsearchome, productlength, setCarttoggle,carttoggle,cartproducts, increaseQty, decreaseQty, totalprice}:propstype) => {

  const [search, setSearch]= useState<string>('');
      
      const handlesearch=(e:ChangeEvent<HTMLInputElement>)=>{
    
          const value= e.target.value;
          setSearch(value);
  addsearchome(value);
  
      }
  
  


  const [toggle, setToggle]= useState<boolean>(false)
  return (
    <div>
    <nav className='nav'>
      <button className="mobile_button" onClick={()=>{setToggle(!toggle)}}><BsMenuButtonWide className='mobile_menuicon'/></button>
       <div className={toggle? "menu open" : "menu"}>
       <NavLink className="NavLink" to="/fragrances">Fragrances</NavLink>
       <NavLink className="NavLink" to="/cosmetics">Cosmetics</NavLink>
       <NavLink className="NavLink_home" to="/">Home</NavLink>
       <NavLink className="NavLink" to="/groceries">Groceries</NavLink>
       <NavLink className="NavLink" to="/furniture">Furniture</NavLink>
</div>

<button onClick={()=>{setCarttoggle(!carttoggle)}} className="cart_button">
  <AiTwotoneFire className={productlength>0 ? "cartavailable_logo" : "cartavailable_logo  empty"}/>
  <TfiShoppingCart className="cart_logo"/></button>
  <Cart cartproducts={cartproducts} carttoggle={carttoggle} setCarttoggle={setCarttoggle} increaseQty={increaseQty} decreaseQty={decreaseQty} totalprice={totalprice}/>


    </nav>
  
{/*   <Search addsearchome={addsearchome}/> */}
 <div className='search-div'>
    
        <input className='searchbox' value={search} type='search' onChange={handlesearch} placeholder='Search your Product...' />
     <BiSearchAlt className='search-icon' />
    </div>
  </div>
  )
}

export default Navbar