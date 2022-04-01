import React from 'react';

import {fireEvent, render,screen } from "@testing-library/react";
import Producto from "../../components/producto/Producto";
import { BrowserRouter as Router } from "react-router-dom";
import { Product } from "../../../../restapi/src/products/productModel";
import ProductView from "../../components/home/ProductView";

import MenuBar from "../../components/comun/MenuBar";

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

  const linkEl = screen.getByRole("link", { name: "Prueba1 23€" });
  fireEvent.click(linkEl);

  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();

});




test("Añadir carrito desde producto", async () => {


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
        <Producto cartItems={[]} handleAddToCart={() => {}} />
  
  
    </Router>
  );
  //Ir al producto
  const linkEl = screen.getByRole("link", { name: "Prueba producto 1 23€" });
  fireEvent.click(linkEl);
  //Añadir al carrito
  fireEvent.click(screen.getByRole("button", { name: "Añadir carrito" }));
  //Ir al carrito
  fireEvent.click(screen.getAllByRole("link", { name: "Carrito" })[0]);
  //Carrito
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

});
