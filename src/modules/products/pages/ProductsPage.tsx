import * as React from 'react';
import FiltersSidebar from "../components/Filters/FiltersSidebar";
import ProductsList from "../components/Products/ProductsList";
import useProductsApi from "../api/useProductsApi";
import {useState} from "react";

function ProductsPage() {
  console.log('ProductsPage render')
  const { fetchProducts, createProduct } = useProductsApi();
  // const [products, setProducts] = useState([]);

  // createProduct().then(response => {
  //   console.log('ProductsPage::createProduct::response', response);
  // });
  fetchProducts().then(response => {
    console.log('ProductsPage::fetchProducts::response', response)
    // @ts-ignore
    // setProducts(response);
  });

  return (
    <>
      {/*<FiltersSidebar />*/}
      {/*<ProductsList products={products}/>*/}
    </>
  );
}

export default ProductsPage;
