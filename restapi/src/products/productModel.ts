import mongoose from 'mongoose';

interface Product {
    id: mongoose.ObjectId
    photo: string
    name: string
    price: string
    stock: string
    description: string
    categories: [string]
}

// Define the model
const Schema = new mongoose.Schema({
    photo: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    stock: {
        type: String,
    },
    description: {
        type: String,
    },
    categories: [String]

})
// Export the model
const ProductModel = mongoose.model<Product>('Product', Schema);

export {Product, ProductModel};