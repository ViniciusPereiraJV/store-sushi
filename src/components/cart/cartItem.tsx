"use client"
import {Cart} from "@/types/Cart"
import { CartQuantity } from "./item-quantity"

type Props = {
  item: Cart
}

export const CartItem = ({item} : Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <img src={item.product.image} alt={item.product.name}  className="w-full object-cover h-auto"/>
      </div>
      <div className="flex-1">
            <p className="text-md font-bold">{item.product.name}</p>
            <p className="text-xs opacity-55">R$ {item.product.price.toFixed(2)}</p>
      </div>
      <div>
        <CartQuantity cartItem={item}/>
      </div>
    </div>
  )
}
