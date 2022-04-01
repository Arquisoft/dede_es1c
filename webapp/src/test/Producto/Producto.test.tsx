/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';

import { fireEvent, render } from "@testing-library/react";

import ProductView from "../../components/home/ProductView";
import { BrowserRouter as Router } from "react-router-dom";
import { Product } from "../../../../restapi/src/products/productModel";

test("Producto renderizado homeview", async () => {
    const productos: Product[] = [
        {
         // @ts-ignore
        id:"1",
        photo: "",
        name: "Prueba producto 1",
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
     

const { getAllByText } = render(
    <Router>
      <ProductView props={productos} handleAddToCart={() => {}} />
    </Router>
  );


  expect(getAllByText(productos[0].name).length).toEqual(1);
  expect(getAllByText(productos[0].description).length).toEqual(2);

    });