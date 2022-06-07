import * as React from 'react';
import FiltersSidebar from "../components/Filters/FiltersSidebar";
import ProductsList from "../components/Products/ProductsList";
import useProductsApi from "../api/useProductsApi";
import {useEffect, useState} from "react";

function ProductsPage() {
  const { fetchProducts, createProduct } = useProductsApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(response => {
      console.log('ProductsPage::fetchProducts::response', response)
      // @ts-ignore
      setProducts(response);
    });
  }, []);

  return (
    <>
      <FiltersSidebar />
      <ProductsList products={products}/>
    </>
  );
}

export default ProductsPage;
