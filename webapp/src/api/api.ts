import { ownerDocument } from "@mui/material";
import {User, Product, Order} from "../shared/shareddtypes";
import {ProductCart} from "../shared/shareddtypes";

  /* istanbul ignore next */
export async function getPedidos(email: string): Promise<Order[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(`${apiEndPoint}/order/${email}`);
    return response.json();
}

  /* istanbul ignore next */
export async function getProductos(): Promise<Product[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(apiEndPoint + '/product/');
    return response.json();
}

  /* istanbul ignore next */
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

  /* istanbul ignore next */
export async function eliminarStock(p: ProductCart): Promise<boolean> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    var name = p.name
    let response = await fetch(`${apiEndPoint}/product/reduce/${name}`);

    if (response.status === 200)
        return true;
    else
        return false;
}
  /* istanbul ignore next */
export async function getProducto(name: string): Promise<Product> {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:8000/api'
    let response = await fetch(`${apiEndPoint}/product/${name}`);
    return await response.json();
}
