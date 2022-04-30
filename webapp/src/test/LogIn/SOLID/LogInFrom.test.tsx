import {fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "../../../components/LogIn/SOLID/LogInForm";



test("LoginForm render", async () => {

   render(
    <Router>
  <LoginForm/>
  </Router>
  );

  expect(screen.getByRole("img", { name: "logo" })).toBeVisible();
  
});


