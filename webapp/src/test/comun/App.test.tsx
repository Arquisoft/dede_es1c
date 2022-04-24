import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import App from "../../App";


test("Render app", async () => {

     
 render(<App />);


});
