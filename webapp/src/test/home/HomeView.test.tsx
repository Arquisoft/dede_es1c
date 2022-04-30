import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCart, Product } from "../../shared/shareddtypes";
import MenuBar from "../../components/comun/MenuBar";
import { HomeView } from "../../components/home/HomeView";

test("HomeView render ", async () => {
    const handleAddToCart=jest.fn();
    const productos: Product[] = [
        {
          // @ts-ignore
          id: "1",
          photo: "",
          name: "Prueba producto 1",
          price: "23",
          stock: "3",
          description: "Prueba del test producto renderizado producto 1",
          categories: ["acción"],
        },
        {
          // @ts-ignore
          id: "2",
          photo: "",
          name: "Prueba producto 2",
          price: "10",
          stock: "7",
          description: "Prueba del test producto renderizado producto 2",
          categories: ["acción"],
        },
      ];
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
     <HomeView cartItems={carrito} handleAddToCart={handleAddToCart} products={productos}/> 
      </Router>
    );  
      //Producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

  //Producto 2
  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();
  });