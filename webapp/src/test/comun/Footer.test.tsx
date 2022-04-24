import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../components/comun/Footer";

test("Footer render ", async () => {

    const { getByText } = render(
      <Router>
        <Footer /> 
      </Router>
    );  
      //Producto 1
  expect(screen.getByText( "Universidad de Oviedo")).toBeInTheDocument();
  });