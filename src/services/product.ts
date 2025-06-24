import { products } from "@/data/products";
import { Product } from "@/types/Product";

export const getAllProdutcs = async ():Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            resolve(products)
        }, 2000)
    })

}