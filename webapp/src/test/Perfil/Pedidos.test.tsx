import { fireEvent,render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import Pedidos from "../../components/perfil/Pedidos";


  test("Pedidos render ", async () => {

    const { getByText } = render(
      <Router>
     <Pedidos webID={""} ped={[]}/>
      </Router>

    );
    expect(screen.getByText("Historico de pedidos:")).toBeInTheDocument();
  });

  