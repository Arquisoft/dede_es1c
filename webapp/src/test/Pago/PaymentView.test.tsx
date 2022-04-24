import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import PaymentView from "../../components/Pago/PaymentView";
import { ProductCart } from "../../shared/shareddtypes";


test("PaymentView render ", async () => {
    const carrito: ProductCart[] = [
        {
          // @ts-ignore
          id: "1",
          photo: "",
          name: "Prueba producto 1",
          price: "23",
            // @ts-ignore
          stock: "3",
          description: "Prueba del test producto renderizado producto 1",
          categories: ["acción"],
            amount:1,
        },
      ];
  
    const { getByText } = render(
      <Router>
        <PaymentView cartItems={carrito}/>
      </Router>
      );  
});