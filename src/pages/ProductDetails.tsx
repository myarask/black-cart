import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductGrid, SizeButtons, JumboButton } from "../components";
import { Products, Cart } from "../services";

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

  const handleAddToCart = () => {
    if (!size) return; // Handle case in which no size was selected

    // TODO: increment counter in app after adding item
    Cart.addItem(id, { size });
  };

  const {
    targetMarket,
    title,
    price,
    sizes,
    images,
    description,
  } = product.data;

  return (
    <ProductGrid>
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: "0",
          }}
        >
          {Object.values(images).map((image: any) => (
            <img src={image.small.src} alt={image.small.alt} />
          ))}
        </div>
      </section>
      <section>
        {Object.values(images).map((image: any) => (
          <img
            id="n-3"
            width="400px"
            src={image.big.src}
            alt={image.big.alt}
            style={{ margin: "1rem" }}
          />
        ))}
      </section>
      <article>
        <section style={{ position: "sticky", top: "0", background: "white" }}>
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
        <section>
          <JumboButton onClick={handleAddToCart}>Add to Cart</JumboButton>
        </section>
        <section>
          <h2>Description</h2>
          <p>{description}</p>
        </section>
      </article>
    </ProductGrid>
  );
};

export { ProductDetails };
