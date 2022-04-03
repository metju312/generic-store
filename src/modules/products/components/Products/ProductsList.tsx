import React from 'react';
import Product from "../../models/product.model";

type Props = {
  products: Product[]
};

const ProductsList = ({ products }: Props) => {
  console.log('ProductsList::products', products);
  return (
    <>
      {products.map(product => (
        <div key={product.name}>
          {product.name}
        </div>
      ))}
    </>
  );
};

export default ProductsList;
