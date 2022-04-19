
import React from 'react';
import {fireEvent, render,screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from '../../components/comun/MenuBar';
import { Product } from '../../shared/shareddtypes';

test("HandleClose", async () => {
//Neceisto estar logeado
     

const { getByText } = render(

    <Router>
      <MenuBar cartItems={[]}/>
    </Router>
  );



});