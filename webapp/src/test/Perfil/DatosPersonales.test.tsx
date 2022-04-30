import { fireEvent,render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import DatosPersonales from "../../components/perfil/DatosPersonales";
import Pedidos from "../../components/perfil/Pedidos";
import { Order } from "../../shared/shareddtypes";


  test("DatosPersonales render", async () => {
   render(
      <Router>
     <DatosPersonales webID={"https://uo270762.inrupt.net/profile/card#me"}/>
      </Router>

    );
    expect(screen.getByText("¡Bienvenido!")).toBeInTheDocument();

  });

  