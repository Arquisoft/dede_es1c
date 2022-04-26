import { fireEvent, render, screen } from "@testing-library/react";
import { Carrito } from "../../components/carrito/Carrito";
import { BrowserRouter as Router } from "react-router-dom";
import { useSession } from "@inrupt/solid-ui-react";

test("Carrito vacio", () => {
  const handleRemoveFromCart=jest.fn();
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const carritoVacio = render(<Router> <Carrito cartItems={[]} handleRemoveFromCart={handleRemoveFromCart} /> </Router> );
  expect(carritoVacio).toBeTruthy();
});



