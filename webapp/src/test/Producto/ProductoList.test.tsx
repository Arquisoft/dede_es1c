import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import userEvent from "@testing-library/user-event";
import { Product } from "../../shared/shareddtypes";
import ProductView from "../../components/home/ProductView";


test("Productos renderizados homeview", async () => {
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
    </Router>
  );

  //Producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

  //Producto 2
  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();
});

test("Filtro por nombre", async () => {
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
    </Router>
  );

  //Clickear el search
  const linkEl = screen.getByRole("textbox", { name: "search" });
  fireEvent.change(linkEl, { target: { value: "Prueba producto 1" } });
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  //No sale el producto 2
  expect(screen.queryByText(productos[1].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[1].price + "€")).not.toBeInTheDocument();
});

test("Filtro por nombre despues categoria", async () => {
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
    </Router>
  );

  //Clickear el search
  const linkEl = screen.getByRole("textbox", { name: "search" });
  fireEvent.change(linkEl, { target: { value: "Prueba producto 1" } });
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  //No sale el producto 2
  expect(screen.queryByText(productos[1].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[1].price + "€")).not.toBeInTheDocument();

  //Clickear categoria
  const categoria = screen.getByRole("textbox", { name: "Categoría" });
  //Existe categoria
  expect(categoria).toBeVisible();
  //Pulsamos
  const autoCompleteDropdown = screen.getByRole("button", { name: "Open" });
  fireEvent.click(autoCompleteDropdown);
  // Autocomplete dropdown view.
  expect(screen.getByRole("presentation")).toBeVisible();
  //Cogemos accion
  fireEvent.click(screen.getByText("acción"));
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  //No sale el producto 2
  expect(screen.queryByText(productos[1].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[1].price + "€")).not.toBeInTheDocument();

  //Quitamos el categoria y salen los dos
  fireEvent.click(autoCompleteDropdown);
  fireEvent.click(screen.getAllByRole("option")[0]);

  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
    //No está el producto por que sigue filtro de nombre
  expect(screen.queryByText(productos[1].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[1].price + "€")).not.toBeInTheDocument();

});

test("Filtro por categoria despues nombre", async () => {
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

  const { getByText } = render(
    <Router>
      <ProductView props={productos} handleAddToCart={() => {}} />
    </Router>
  );

  //Clickear categoria
  const categoria = screen.getByRole("textbox", { name: "Categoría" });
  //Existe categoria
  expect(categoria).toBeVisible();
  //Pulsamos
  const autoCompleteDropdown = screen.getByRole("button", { name: "Open" });
  fireEvent.click(autoCompleteDropdown);
  // Autocomplete dropdown view.
  expect(screen.getByRole("presentation")).toBeVisible();
  //Cogemos accion
  fireEvent.click(screen.getByText("acción"));
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  //No sale el producto 2
  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();

  //Clickear el search
  const linkEl = screen.getByRole("textbox", { name: "search" });
  fireEvent.change(linkEl, { target: { value: "Prueba producto 1" } });
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  //No sale el producto 2
  expect(screen.queryByText(productos[1].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[1].price + "€")).not.toBeInTheDocument();
  //No ponemos nada en el search
   //Clickear el search
   fireEvent.change(linkEl, { target: { value: "" } });
   //Sale el producto 1
   expect(screen.getByText(productos[0].name)).toBeInTheDocument();
   expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
   //Sale el producto 2
   expect(screen.getByText(productos[1].name)).toBeInTheDocument();
   expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();

});

test("Filtro por nombre sin nada", async () => {
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
    </Router>
  );

  //Clickear el search
  const linkEl = screen.getByRole("textbox", { name: "search" });
  fireEvent.change(linkEl, { target: { value: "Prueba producto 1" } });
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();
  //No sale el producto 2
  expect(screen.queryByText(productos[1].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[1].price + "€")).not.toBeInTheDocument();

  //Clickear el search sin valor
  fireEvent.change(linkEl, { target: { value: "" } });
  //Salen los prodcutos
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();
});

test("Filtro por categoria sin nada", async () => {
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

  const { getByText } = render(
    <Router>
      <ProductView props={productos} handleAddToCart={() => {}} />
    </Router>
  );

  //Clickear categoria
  const categoria = screen.getByRole("textbox", { name: "Categoría" });
  //Existe categoria
  expect(categoria).toBeVisible();
  //Pulsamos
  const autoCompleteDropdown = screen.getByRole("button", { name: "Open" });
  fireEvent.click(autoCompleteDropdown);
  // Autocomplete dropdown view.
  expect(screen.getByRole("presentation")).toBeVisible();
  //Cogemos accion
  fireEvent.click(screen.getByText("acción"));
  //Sale el producto 1
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();

  //Quitamos el categoria y salen los dos
  fireEvent.click(autoCompleteDropdown);
  fireEvent.click(screen.getAllByRole("option")[0]);
  
  expect(screen.getByText(productos[0].name)).toBeInTheDocument();
  expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();

  
  expect(screen.getByText(productos[1].name)).toBeInTheDocument();
  expect(screen.getByText(productos[1].price + "€")).toBeInTheDocument();
});

 
test("Filtro por categoria no existe producto", async () => {
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
  ];

  const { getByText } = render(
    <Router>
      <ProductView props={productos} handleAddToCart={() => {}} />
    </Router>
  );

  //Clickear categoria
  const categoria = screen.getByRole("textbox", { name: "Categoría" });
  //Existe categoria
  expect(categoria).toBeVisible();
  //Pulsamos
  const autoCompleteDropdown = screen.getByRole("button", { name: "Open" });
  fireEvent.click(autoCompleteDropdown);
  // Autocomplete dropdown view.
  expect(screen.getByRole("presentation")).toBeVisible();
  //Cogemos accion
  fireEvent.click(screen.getByText("deportes"));
  //Sale el producto 1
  expect(screen.queryByText(productos[0].name)).not.toBeInTheDocument();
  expect(screen.queryByText(productos[0].price + "€")).not.toBeInTheDocument();

});

test("Añadir al carrito", async () => {
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
  ];
  const handleAddToCart=jest.fn();
  const { getByText } = render(
    <Router>
      <ProductView props={productos} handleAddToCart={handleAddToCart} />
    
    </Router>
  );
  const add = screen.getByRole("button", { name: "" });
  fireEvent.click(add);
  expect(handleAddToCart).toHaveBeenCalled();
});

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
userEvent.click(linkEl);

expect(screen.getByText(productos[0].name)).toBeInTheDocument();
expect(screen.getByText(productos[0].price + "€")).toBeInTheDocument();



});

