import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../services";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    Products.retrieve(id).then(setProduct);
  }, [id, setProduct]);

  // console.log(product);
  if (!product) {
    // Loading product info
    return null;
  }

  return <div>product details {id}</div>;
};

export { ProductDetails };
