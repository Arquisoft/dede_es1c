import { fireEvent,render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import Pedidos from "../../components/perfil/Pedidos";
import { Order } from "../../shared/shareddtypes";




  test("Pedidos render", async () => {
    const orders: Order[] = [
      {
        email: "",
        fecha: "",
        name: "",
        description: "",
        photo: "",
        price: "",
        amount: 2,
        
      }]
   render(
      <Router>
     <Pedidos webID={"https://uo270762.inrupt.net/profile/card#me"} ped={orders}/>
      </Router>

    );
    expect(screen.getByText("Historico de pedidos:")).toBeInTheDocument();
    expect(screen.getByText("Cantidad: 2")).toBeInTheDocument();
  });

  