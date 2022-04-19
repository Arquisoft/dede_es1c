import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCart, Product } from "../../shared/shareddtypes";
import MenuBar from "../../components/comun/MenuBar";

test("Logeado perfil handleMenu ", async () => {

    const { getByText } = render(
      <Router>
      <MenuBar cartItems={[]}/> 
      </Router>
    );  
  });

  test("Logeado perfil handleClose ", async () => {

    const { getByText } = render(
      <Router>
      <MenuBar cartItems={[]}/> 
      </Router>
    );
  });
  
  