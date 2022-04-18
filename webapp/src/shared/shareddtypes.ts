
export interface ProductCart {
  id: string
  name: string;
  description: string;
  photo: string;
  price: string;
  amount: number;
}

export interface Product {
  id: string
  photo: string
  name: string
  price: string
  stock: string
  description: string
  categories: [string]
}

export enum ROLES {
  NORMAL = 0,
  ADMIN = 10
}

export interface User {
  id: string
  password: string
  email: string
  role: number
  products: [string]
}
