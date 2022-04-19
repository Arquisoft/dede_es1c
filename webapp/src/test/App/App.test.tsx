import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import App from "../../App";
import userEvent from "@testing-library/user-event";


test("Todo renderiza", async () => {

 render(<App/>);


});


