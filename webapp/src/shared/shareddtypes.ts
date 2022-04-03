export type User = {
    name:string;
    email:string;
  }

export type Producto = {
  id: string
  photo: string
  name: string
  price: string
  stock: string
};

export type ProductCart = {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
  amount: number;
}