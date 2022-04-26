import { ownerDocument } from "@mui/material";
import {User, Product, Order} from "../shared/shareddtypes";
import {ProductCart} from "../shared/shareddtypes";


/* export async function getUsers(): Promise<User[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(apiEndPoint + '/');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
<<<<<<< HEAD
}
export async function getProductos(): Promise<Product[]> {
=======
} */
export async function getPedidos(email: string): Promise<Order[]> {
>>>>>>> 679bcbff26451dd0d79f2e0be7dcdffe856982c2
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(`${apiEndPoint}/order/${email}`);
    return response.json();
}

export async function getProductos(): Promise<Product[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(apiEndPoint + '/product/');
    return response.json();
}
export async function saveOrder( o:Order):Promise<boolean>{ 
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(`${apiEndPoint}/order/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                            'email': o.email,
                            'fecha': o.fecha,
                            'name': o.name,
                            'description': o.description,
                            'photo': o.photo,
                            'price': o.price,
                            'amount': o.amount,  
        })
    });

    if (response.status === 200)
        return true;
    else
        return false;
} 
<<<<<<< HEAD
export async function removeCart(): Promise<boolean> {
=======

/* export async function addCart( p:Product):Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/user'
  
  let response = await fetch(apiEndPoint+'/product', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'id':p.id,
                           })
    });
  if (response.status===200)
    return true;
  else
    return false;

} */
/* export async function loginUsuario(u: User): Promise<boolean> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(apiEndPoint + '/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': u.email, "password": u.password,
        })
    });
    console.log(response.body);
    if (response.status === 200)
        return true;
    else
        return false;
} */

/* export async function removeCart(): Promise<boolean> {
>>>>>>> 679bcbff26451dd0d79f2e0be7dcdffe856982c2
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(apiEndPoint + '/product');

    return response.json();
} */

export async function eliminarStock(p: ProductCart): Promise<boolean> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    var name = p.name
    let response = await fetch(`${apiEndPoint}/product/reduce/${name}`);

    if (response.status === 200)
        return true;
    else
        return false;
}
<<<<<<< HEAD
=======

>>>>>>> 679bcbff26451dd0d79f2e0be7dcdffe856982c2
export async function getProducto(name: string): Promise<Product> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(`${apiEndPoint}/product/${name}`);
    return await response.json();
}
