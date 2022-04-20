import { fireEvent, render, screen } from "@testing-library/react";
import ProductView from "../../components/home/ProductView";
import {Carrito} from "../../components/carrito/Carrito";
import CarritoView from "../../components/carrito/CarritoView";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCart, Product } from "../../shared/shareddtypes";


test("No hay producto", async () => {

  const { getByText } = render(
    <Router>
     <CarritoView props={[]} handleRemoveFromCart={() => {}} address={"nada"} />
    </Router>
  );
  //No hay productos
  expect(screen.getByText( "Carrito vacio")).toBeInTheDocument();

});


  test("Hay un producto", async () => {
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
    const { getByText } = render(
      <Router>
       <CarritoView props={carrito} handleRemoveFromCart={() => {}} address={"nada"} />
      </Router>
    );

    //Producto 
    expect(screen.getByText(carrito[0].name)).toBeInTheDocument();
    expect(screen.getByText(carrito[0].price + "€")).toBeInTheDocument();

  });


  test("Eliminar producto", async () => {
    const handleRemoveFromCart=jest.fn();
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

  render(
      <Router>
        <CarritoView props={carrito} handleRemoveFromCart={handleRemoveFromCart} address={"nada"} />
      </Router>
    );
    //Clickear el boton del producto
    fireEvent.click(screen.getByRole('button', {name: "Eliminar"}));

    //No hay nada
    //expect(screen.getByText( "Carrito vacio")).toBeInTheDocument();

  });

  test("No logeado", async () => {
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

    const { getByText } = render(
      <Router>
        <CarritoView props={carrito} handleRemoveFromCart={() => undefined} address={"nada"} />
      </Router>
    );
      //No hay nada
      expect(screen.getByRole('button', {name: "LogIn"})).toBeInTheDocument();
     // fireEvent.click(screen.getByRole('button', {name: "LogIn"}));
  

  });


