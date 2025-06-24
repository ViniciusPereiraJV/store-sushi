import { products } from "@/data/products"
import { Cart } from "@/types/Cart"
import { Product } from "@/types/Product"
import {create} from "zustand"

type States = {
    cart : Cart[]
}

type Actions = {
    upsertCartItem: (product:Product, quantity : number) => void
}

type CartStore = States & Actions

const inicialState : States = {
    cart:[]
}

export const useCartStore = create<CartStore>()(set => ({
...inicialState,
//function sending the product and quantity
upsertCartItem:(product, quantity) => set(state => {
    let newCart = state.cart

//finding index of product that i want to insert into the cart and refresh the produtc

let productIndex = newCart.findIndex(item => item.product.id === product.id)

//checking if dont find inside the cart it´ll insert
if(productIndex < 0 ){
    newCart.push({product, quantity:0})
    //refresh 
    productIndex = newCart.findIndex(item => item.product.id === product.id)
}


newCart[productIndex].quantity += quantity;

//Remove item of the cart
if(newCart[productIndex].quantity <= 0){
    newCart = newCart.filter(item => item.product.id !== product.id)
}


    return{...state, cart:newCart}
})
}))