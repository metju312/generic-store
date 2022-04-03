import * as React from 'react';
import FiltersSidebar from "../components/Filters/FiltersSidebar";
import ProductsList from "../components/Products/ProductsList";

function ProductsPage() {
  const products = [{name: "cos"}, {name: "cos2"}];

  return (
    <>
      <FiltersSidebar />
      <ProductsList products={products}/>
    </>
  );
}

export default ProductsPage;
