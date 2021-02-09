import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductGrid, SizeButtons } from "../components";
import { Products } from "../services";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [size, setSize] = useState<null | number>(null);

  useEffect(() => {
    // This is a basic data-loading mechanism. React Query is a viable upgrade.
    Products.retrieve(id).then(setProduct);
  }, [id, setProduct]);

  if (!product) {
    // Loading product info. Should render progress indicator instead.
    return null;
  }

  const { targetMarket, title, price, sizes } = product.data;

  return (
    <ProductGrid>
      <section>1</section>
      <section>product details {id}</section>
      <article>
        <section>
          <div style={{ textAlign: "center" }}>{targetMarket}</div>
          <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
            {title}
          </h1>
          <h1 style={{ textAlign: "center" }}>
            {/* Polyfill needed for some browsers */}
            {new Intl.NumberFormat("en-CA", {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
              style: "currency",
              currency: price.currency,
            }).format(price.amount)}
          </h1>
        </section>
        <section>
          <SizeButtons sizes={sizes} size={size} setSize={setSize} />
        </section>
      </article>
    </ProductGrid>
  );
};

export { ProductDetails };
