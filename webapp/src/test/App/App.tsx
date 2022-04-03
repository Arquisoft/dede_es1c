import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { Product } from "../../../../restapi/src/products/productModel";
import { ProductCart } from "../../shared/shareddtypes";
import MenuBar from "../../components/comun/MenuBar";
import App from "../../App";
import { CardActionArea } from '@mui/material';

test("Cickear al producto va a su pagina", async () => {

     
const { getByText } = render(

    <Router>
      <App />
    </Router>
  );

});



