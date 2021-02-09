import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductGrid } from "../components";
import { Products } from "../services";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    Products.retrieve(id).then(setProduct);
  }, [id, setProduct]);

  if (!product) {
    // Loading product info. Should render progress indicator instead.
    return null;
  }

  return (
    <ProductGrid>
      <div>1</div>
      <div>product details {id}</div>
      <div>1</div>
    </ProductGrid>
  );
};

export { ProductDetails };
