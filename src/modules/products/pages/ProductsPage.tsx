import * as React from 'react';
import FiltersSidebar from "../components/Filters/FiltersSidebar";
import ProductsList from "../components/Products/ProductsList";
import useProductsManagement from "../managements/useProductsManagement";

function ProductsPage() {
  const { fetchProducts } = useProductsManagement();

  return (
    <>
      <FiltersSidebar />
      <ProductsList products={fetchProducts()}/>
    </>
  );
}

export default ProductsPage;
