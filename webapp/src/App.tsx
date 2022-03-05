<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import {ProfileView} from "./components/perfil/ProfileView";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import { makeStyles } from "@material-ui/core/styles";
>>>>>>> laura/pantallainicio
import './App.css';


function App(): JSX.Element {
  

  return (
  
    <>
<<<<<<< HEAD
      <Container maxWidth="sm">
        <ProfileView/>
      </Container>
=======
<main>
     <Router>
      <HomeView/>
      <Switch>
        <Route exact path="./HomeView" component={HomeView} />
        <Route  path="./Carrito"render={() => <Carrito/>}/>
      </Switch>
      </Router>
      </main>
>>>>>>> laura/pantallainicio
    </>
    
  );
}

export default App;
