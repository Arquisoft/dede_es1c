import {User} from '../shared/shareddtypes';
import { Product } from "../../../restapi/src/products/productModel";
export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getProductos():Promise<Product[]>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(apiEndPoint+'/');

  return response.json();
}

export async function getProducto(name:string):Promise<Product>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(`${apiEndPoint}/${name}`);
  return await response.json();

}