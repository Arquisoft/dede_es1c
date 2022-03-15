import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { useState, useEffect} from 'react';

import { Product } from "../../restapi/src/products/model";
import  {getProductos} from './api/api';
import './App.css';

import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import Producto from "./components/producto/Producto";
import Footer from "./components/comun/Footer";
import { ProductCart } from "./shared/shareddtypes";

function App(): JSX.Element {
  const [cartItems,setCartItems]= useState<ProductCart[]>([]);

  const [products, setProducts] = useState<Product[]>([]);

  const refreshProducts = async () => {
    setProducts(await getProductos());
  }
  useEffect(()=>{
    refreshProducts();
  },[]);

  const handleRemoveFromCart = (clickedItem: ProductCart) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if ( item.name === clickedItem.name) {
          if (item.amount === 1) return ack;
          //Añdadir stock
        addStock(clickedItem);
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
           //Añdadir stock
          addStock(clickedItem);
          return [...ack, item];
        }
      }, [] as ProductCart[])
    );
  };
 //Añadir stock local
  const addStock = (clickedItem: ProductCart) => {
    const existProduct = products.find(item => item.name === clickedItem.name);
    if (existProduct) {
    var newProduct=products.indexOf(existProduct);
    const newTodosP = [...products];
    const stock=Number(newTodosP[newProduct].stock)+1;
    newTodosP[newProduct].stock=stock+"";
    setProducts(newTodosP);}

  };

  
  //Eliminar stock local
  const removeStock = (clickedItem: Product) => {
    //Tengo que encontrar el del producto local
    var newProduct=products.indexOf(clickedItem);
    const newTodosP = [...products];
    const stock=Number(newTodosP[newProduct].stock)-1;
    newTodosP[newProduct].stock=stock+"";
    setProducts(newTodosP);
  
  };



  //Añadir al carrito
  const handleAddToCart = (clickedItem: Product) => {
    //Tiene stock a cero?? pero del que devuelve no del producto de BD
    const existProductClicked = products.find(item => item.name === clickedItem.name);
    if(existProductClicked){
    if(Number(existProductClicked.stock)!==0){
    const existProduct = cartItems.find(item => item.name === clickedItem.name);
     var index:number=0;
      // Hay un producto?
      if (existProduct) {

        return cartItems.map(item => {
       
            if ( item.name === clickedItem.name) {
              const newTodos = [...cartItems];
              const amountt= item.amount+1;
              newTodos[index].amount=amountt; 
              setCartItems(newTodos);
              index=index+1;
              //Quitar stock al producto
              removeStock(existProductClicked);
             
            }

            index=index+1;
            return item;
        })
    } else {
         //Quitar stock al producto
      removeStock(existProductClicked);
      index=index+1;
       const {id, name, photo,description, price } = clickedItem;
       setCartItems([...cartItems, {id, name, photo, price, description,amount:1 }]);
      }
  }
  else{
    alert("No hay más stock para "+""+ clickedItem.name);
  }}
}
  
  return (

    <>
<main>
     <Router>
      <Switch>
        <Route exact path='/' render={() => <HomeView cartItems={cartItems} handleAddToCart={handleAddToCart} products={products}/>} />
        <Route  path="/Carrito"render={() => <Carrito cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />}/>
       <Route  path="/Producto/:name" render={() => <Producto cartItems={cartItems} handleAddToCart={handleAddToCart}/>}/>
      </Switch>
      </Router>
      <Footer/>
      </main>
    </>
    
  );
}

export default App;
