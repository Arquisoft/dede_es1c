import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import App from "../../App";


test("Cickear al producto va a su pagina", async () => {

     
const { getByText } = render(

    <Router>
      <App />
    </Router>
  );

});



