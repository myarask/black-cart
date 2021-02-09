import React from "react";
import { Cart } from "./services";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";

// TODO: Co-locate tests with components
it("can select a shoe size and add to cart", async () => {
  render(<App />);

  const sizeButton = await screen.findByRole("button", { name: /10/i });

  await act(async () => {
    await fireEvent.click(sizeButton);
    await fireEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
  });

  // TODO: Mock services
  expect(Cart.addItem).toBeCalledWith("1", {
    size: 10,
  });
});
