import { axios, mock } from "./_axios";

// For demo purposes
mock.onGet("/products/1").reply(200, {
  id: 1,
  title: "Capri Triple White",
  price: {
    amount: 268,
    currency: "CAD",
  },
  targetMarket: "Men's",
  description:
    "Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks fresh or curiously banged up: your choice. ",
});

const Products = {
  retrieve: (id: string) => axios.get(`/products/${id}`),
};

export { Products };
