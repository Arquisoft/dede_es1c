import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { Product } from "../../shared/shareddtypes";
import { ProductCart } from "../../shared/shareddtypes";


  test("Hay un producto", async () => {
    const carrito: ProductCart[] = [
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
    ];
    const { getByText } = render(
      <Router>
        <CarritoView props={carrito} handleRemoveFromCart={() => {}} />
      </Router>
    );

    //Producto 
    expect(screen.getByText(carrito[0].name)).toBeInTheDocument();
    expect(screen.getByText(carrito[0].price + "€")).toBeInTheDocument();

  });

  test("No hay producto", async () => {
    const carrito: ProductCart[] = [
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
    ];
    const { getByText } = render(
      <Router>
        <CarritoView props={[]} handleRemoveFromCart={() => {}} />
      </Router>
    );

    //Producto no está
    expect(screen.queryByText(carrito[0].name)).not.toBeInTheDocument();
    expect(screen.queryByText(carrito[0].price + "€")).not.toBeInTheDocument();

  });

  test("Eliminar producto", async () => {
    const carrito: ProductCart[] = [
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
    ];
    const producto: Product = 
        {
         // @ts-ignore
        id:"1",
        photo: "",
        name: "Prueba1",
        price: "23",
        stock: "3",
        description: "Prueba del test producto renderizado producto 1",
        categories: ["acción"]
    }

;
    const { getByText } = render(
      <Router>
        <CarritoView props={carrito} handleRemoveFromCart={() => {}} />
      </Router>
    );
    //Clickear el boton del producto
    fireEvent.click(screen.getAllByRole("button")[0]);
    //No hay nada
    expect(screen.getByText( "Carrito vacio")).toBeInTheDocument();

  });


