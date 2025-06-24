"use client"
import { useCartStore } from "@/stores/cart-store"
import { Cart } from "@/types/Cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
    cartItem :Cart
}
export const CartQuantity = ({cartItem}: Props) => {
    const {upsertCartItem} = useCartStore()

    const handlePlusAction = ()=> {
        upsertCartItem(cartItem.product, 1)
    }
    const handleMinusAction = ()=> {
        upsertCartItem(cartItem.product, -1)
    }
    
  return (
    <div className="flex items-center gap-2">
        <Button onClick={handlePlusAction} variant="outline" size="icon" className="size-6">
            <PlusIcon className="size-3"/>
        </Button>
        <div> {cartItem.quantity}</div>
        <Button onClick={handleMinusAction} variant="outline" size="icon" className="size-6">
            <MinusIcon className="size-3"/>
        </Button>
    </div>
  )
}
