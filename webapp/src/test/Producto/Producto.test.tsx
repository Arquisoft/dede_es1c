import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";


import { Product } from "../../shared/shareddtypes";
import Producto from "../../components/producto/Producto";



test("Producto añadir carrito", async () => {

  const handleAddToCart=jest.fn();
   render(
    <Router>
      <Producto cartItems={[]} handleAddToCart={handleAddToCart} />
    </Router>
  );

  const carrito = screen.getByRole("button", { name: "Añadir carrito" });
  fireEvent.click(carrito);
  expect(handleAddToCart).toHaveBeenCalled();

});
test("Producto ir carrito", async () => {

  const handleAddToCart=jest.fn();
   render(
    <Router>
      <Producto cartItems={[]} handleAddToCart={handleAddToCart} />
    </Router>
  );

  const carrito = screen.getByRole("button", { name: "Comprar" });
  fireEvent.click(carrito);

});
