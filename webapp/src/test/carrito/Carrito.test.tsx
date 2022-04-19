import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCart, Product } from "../../shared/shareddtypes";

test("Carrito vacio ", async () => {

    const { getByText } = render(
      <Router>
       <Carrito cartItems={[]} handleRemoveFromCart={()=>{}}/>
      </Router>
    );
    jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValueOnce('1');
    expect(localStorage.__proto__.getItem).toBeCalledWith('carrito');
  
  });


  