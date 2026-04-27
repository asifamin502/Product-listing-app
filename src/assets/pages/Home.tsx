/* eslint-disable */

import "./home.css";
import Products from "../components/Products";

import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";



 type propstype={
products:any;
 addtocart: (product: any) => void;
 loading: boolean;
 searchedproduct:any;
bannerproducts:any;
showproduct:any[];
page:any;
setPage:any
 }


const Home = ({ addtocart, loading, searchedproduct, showproduct, page, setPage}:propstype) => {




  return (
    <div>



    {/*  <Banner bannerproducts={bannerproducts}/>  */} 
<h2 className="all_product">All Products</h2>
{!loading && searchedproduct.length===0? 
<h3 className="notfound">No Product Found</h3> 
  :
  <Products products={showproduct} addtocart={addtocart} />
  }
  <div className="pagination">
<button disabled={page===1} onClick={()=>setPage(page-1)}><FcPrevious className="next-button"/></button>
<button disabled={page*8 >= searchedproduct.length} onClick={()=>setPage(page+1)}><FcNext className="prev-button"/></button>
</div>


    

    </div>

  
    
  );
}

export default Home;
