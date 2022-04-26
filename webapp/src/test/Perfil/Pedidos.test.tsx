import { fireEvent,render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import Pedidos from "../../components/perfil/Pedidos";


  test("Pedidos render ", async () => {

    const { getByText } = render(
      <Router>
<<<<<<< HEAD

=======
     <Pedidos webID={""} ped={[]}/>
>>>>>>> 679bcbff26451dd0d79f2e0be7dcdffe856982c2
      </Router>

    );
    expect(screen.getByText("Historico de pedidos:")).toBeInTheDocument();
  });

  