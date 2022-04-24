import {fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import LogInFragmento from "../../components/LogIn/LogInFragmento";


test("LogInFragmento render ", async () => {

  const { getByText } = render(
    <Router>
  <LogInFragmento/>
  </Router>
  );

  expect(screen.getByText("¿No tienes una cuenta SOLID? Registrate aqui")).toBeInTheDocument();
  
});

test("LogInFragmento registrar ", async () => {

  const { getByText } = render(
    <Router>
  <LogInFragmento/>
  </Router>
  );

  fireEvent.click(screen.getByRole('button', {name: "¿No tienes una cuenta SOLID? Registrate aqui"}));
  
});

test("LogInFragmento sobre DeDe ", async () => {

  const { getByText } = render(
    <Router>
  <LogInFragmento/>
  </Router>
  );

  fireEvent.click(screen.getByRole('button', {name: "Sobre DeDe"}));
  
});

test("LogInFragmento que es un POD ", async () => {

  const { getByText } = render(
    <Router>
  <LogInFragmento/>
  </Router>
  );

  fireEvent.click(screen.getByRole('button', {name: "¿Que es un POD?"}));
  
});

