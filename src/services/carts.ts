import { axios, mock } from "./_axios";

type Options = {
  size: number;
};

// For demo purposes
mock.onPost("/carts/addItem").reply(200);

const Cart = {
  addItem: (productId: string, options: Options) =>
    axios.post("/cart/addItem", { productId, options }),
};

export { Cart };
