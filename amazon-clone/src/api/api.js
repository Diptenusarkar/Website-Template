import axios from "axios";

export async function productsData(){
    // const products = await axios.get("https://fakestoreapiserver.vercel.app/amazonproducts");
    const products = await axios.get("https://fakestoreapi.com/products");

    return products
    
}