import { axios, mock } from "./_axios";

// For demo purposes
mock.onGet("/products/1").reply(200, {
  id: 1,
  productType: "shoe",
  title: "Capri Triple White",
  description:
    "Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks fresh or curiously banged up: your choice. ",
  price: {
    amount: 268,
    currency: "CAD",
  },
  sizes: [7, 8, 9, 10, 11, 12, 13],
  targetMarket: "Men's",
  images: {
    // Lots of redundency, but there may be cases where alt definitions are different.
    1: {
      small: {
        src:
          "https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_80x@2x.progressive.png.jpg?v=1593118532",
        alt: "Low Top Leather Sneaker in White | Capri Triple White | KOIO",
      },
      big: {
        src:
          "https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_1200x.progressive.png.jpg?v=1593118532",
        alt: "Low Top Leather Sneaker in White | Capri Triple White | KOIO",
      },
    },
    2: {
      small: {
        src:
          "https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-2_80x@2x.progressive.png.jpg?v=1593118532",
        alt: "Low Top Leather Sneaker in White | Capri Triple White | KOIO",
      },
      big: {
        src:
          "https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-2_1200x.progressive.png.jpg?v=1593118532",
        alt: "Low Top Leather Sneaker in White | Capri Triple White | KOIO",
      },
    },
    3: {
      small: {
        src:
          "https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-3_80x@2x.progressive.png.jpg?v=1593118532",
        alt: "Low Top Leather Sneaker in White | Capri Triple White | KOIO",
      },
      big: {
        src:
          "https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-3_1200x.progressive.png.jpg?v=1593118532",
        alt: "Low Top Leather Sneaker in White | Capri Triple White | KOIO",
      },
    },
  },
});

const Products = {
  retrieve: (id: string) => axios.get(`/products/${id}`),
};

export { Products };
