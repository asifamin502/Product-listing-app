/* eslint-disable */

import Products from "../components/Products";
import { Helmet } from "react-helmet-async";

type proptypes = {
  products: any;
  loading: boolean;
  searchedproduct: any;
  addtocart: (product: any) => void;
};
const Groceries = ({
  products,
  loading,
  searchedproduct,
  addtocart,
}: proptypes) => {
  

  const groceriesproduct = products.filter(
    (product: any) => product.category === "groceries",
  );

  return (
    <div>

      <Helmet>
    <title>Groceries Page</title>
  </Helmet>
      <h2 className="all_product">Groceries</h2>
      {!loading && searchedproduct.length === 0 ? (
        <h3>No products Found</h3>
      ) : (
        <Products products={groceriesproduct} addtocart={addtocart} />
      )}
    </div>
  );
};

export default Groceries;
