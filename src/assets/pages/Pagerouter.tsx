/* eslint-disable */

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cosmetics from './Cosmetics'
import Fragrances from './Fragrances'
import Groceries from './Groceries'
import Furniture from './Furniture'
import Navbar from '../components/Navbar'
import { ToastContainer, Flip } from 'react-toastify';



import './pagerouter.css'
import Productdetails from "./Productdetails";
import Footer from "../components/Footer";

const Pagerouter = () => {

    const url = "https://dummyjson.com/products";
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchedproduct, setSearchedproduct]= useState<any[]>(products)
  const [error, setError] = useState<Error | null>(null);




 
 const datafetch = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
    setSearchedproduct(data.products)
      setProducts(data.products);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error as Error);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  const errormessage = "Error occour Here. Please Check Your Internet Connection";
  const loadingmessage = "Loading here";

  /* searching */
 const addsearchome=(searchvalue: string)=>{

  const searchtext= searchvalue.toLowerCase()
  const searchedproducts= products.filter((product)=>{
    const productname= product.title.toLowerCase();
    return productname.startsWith(searchtext)
  })
  
setSearchedproduct(searchedproducts)
 }

/* cart */
 const [carttoggle, setCarttoggle]= useState<boolean>(false)
 const [cartproducts, setCartproducts]= useState<any[]>([]);
const addtocart=(product: any)=>{
const alreadyincart= cartproducts.find((cartproducts)=>
cartproducts.id===product.id)

if(alreadyincart){
  const updatecart=cartproducts.map((cartproduct)=>{
return cartproduct.id===product.id ? {...cartproduct, quantity: cartproduct.quantity+1 } : cartproduct})
setCartproducts(updatecart)
} else{
setCartproducts([...cartproducts, {...product, quantity:1}])
}


}// addtocart

 const increaseQty=(id:number)=>{
const updatecartquantity=cartproducts.map((cartproduct)=>{
  if(cartproduct.id===id){
    return {...cartproduct, quantity:cartproduct.quantity+1}
  }else{
    return cartproduct
  }
})

setCartproducts(updatecartquantity)
 }//increaseQty

const decreaseQty=(id:number)=>{
const updatecartquantity= cartproducts.map((cartproduct)=>{
if(id===cartproduct.id){
  return {...cartproduct, quantity: cartproduct.quantity-1}
}else{
  return cartproduct
}

}) 
const removeproduct=updatecartquantity.filter((item)=>{
  return item.quantity >0
})
setCartproducts(removeproduct)

}//decreaseQty

 const totalprice= cartproducts.reduce((sum, cartproduct)=>{
  return sum+ cartproduct.price * cartproduct.quantity;
 },0) // totalprice 

/* cart product available */

const productlength= cartproducts.length


/* Pagination */

const [page, setPage]=useState<number>(1);

const per_page_products=8;

const startpage= (page-1)*per_page_products;
const endpage= page*per_page_products

const showproduct=searchedproduct.slice(startpage,endpage)

  return (
<div>
    <div className="loadingmessage">
      {loading && loadingmessage}  
        </div>
      <div className="errormessage">
      {error && errormessage}
      </div>


        <BrowserRouter>
        <Navbar addsearchome={addsearchome} productlength={productlength} setCarttoggle={setCarttoggle} carttoggle={carttoggle} cartproducts={cartproducts} increaseQty={increaseQty} decreaseQty={decreaseQty} totalprice={totalprice}  />
        <Routes>
<Route path='/' element={<Home bannerproducts={products} products={searchedproduct} addtocart={addtocart} searchedproduct={searchedproduct} loading={loading}  setPage={setPage} page={page} showproduct={showproduct} />}/>
<Route path="/products/:id" element={<Productdetails products={products} addtocart={addtocart} loading={loading}/>}/>
<Route path='/fragrances' element={<Fragrances products={searchedproduct} addtocart={addtocart} searchedproduct={searchedproduct} loading={loading} />}/>
<Route path='/cosmetics' element={<Cosmetics products={searchedproduct} addtocart={addtocart} searchedproduct={searchedproduct} loading={loading} />}/>
<Route path='/groceries' element={<Groceries products={searchedproduct} addtocart={addtocart} searchedproduct={searchedproduct} loading={loading} />}/>
<Route path='/furniture' element={<Furniture products={searchedproduct} addtocart={addtocart} searchedproduct={searchedproduct} loading={loading} />}/>

      </Routes>
      <ToastContainer className="toast-container"
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Flip}
/>
        <Footer />
        </BrowserRouter>

         


   </div>
  )
}

export default Pagerouter