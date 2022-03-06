import mongoose from 'mongoose';

export interface Product {
    id: string
    name: string
}

// Define the model
const Schema = new mongoose.Schema({
    name: {
        type: String,
    },
})
// Export the model
export const ProductModel = mongoose.model<Product>('Product', Schema);
