import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCart, Product } from "../../shared/shareddtypes";
import MenuBar from "../../components/comun/MenuBar";
import { CardActionArea } from '@mui/material';

test("Cickear al producto va a su pagina", async () => {
    const productos: Product[] = [
        {
         // @ts-ignore
        id:"1",
        photo: "",
        name: "Prueba1",
        price: "23",
        stock: "3",
        description: "Prueba del test producto renderizado producto 1",
        categories: ["acción"]
    },
    {
        // @ts-ignore
       id:"2",
       photo: "",
       name: "Prueba producto 2",
       price: "10",
       stock: "7",
       description: "Prueba del test producto renderizado producto 2",
       categories: ["deporte"]
   },
];
     

const { getByText } = render(

    <Router>
      <ProductView props={productos} handleAddToCart={() => {}} />
    </Router>
  );
const { container,getByRole } = render(<CardActionArea />);
//Clickear el producto
const linkEl = screen.getByRole('link', { name: 'Prueba1 23€' }); 
fireEvent.click(linkEl)
//Va a la página
expect(window.location.pathname).toEqual("/Producto/" + productos[0].name);
});

test("Añadir carrito desde homeview", async () => {

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
          amount:0,
      },
    ];
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
          categories: ["deporte"],
        },
      ];
    
    const { getByText } = render(
      <Router>
          <ProductView props={productos} handleAddToCart={() => {}} />
          <MenuBar cartItems={[]}/>
      </Router>
    );
    //Añadir al carrito
    fireEvent.click(screen.getAllByRole("button")[1]);
    //Ir al carrito
    fireEvent.click(screen.getByRole("link", { name: "Carrito" }));
    //Mirar si estan el producto
    expect(screen.getByText(productos[0].name)).toBeInTheDocument();
    expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  });

