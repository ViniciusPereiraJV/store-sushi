"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "./cartItem"
import { useState } from "react"
import { CheckoutDialog } from "../chekout/dialog"


export const CartSideBar = () => {
    const {cart} = useCartStore(state => state)
    const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false)

    let subtotal = 0

    for(let item of cart) {
        subtotal += item.quantity * item.product.price
    }

  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button className="relative">
                <RocketIcon className="mr-1"/>
                <p>Cart</p>
                {cart.length > 0 && 
                    <div className="absolute size-4 rounded-full bg-red-600 -right-1 -top-1 flex justify-center items-center text-white font-bold">{cart.length}</div>
                }
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Car</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-5 my-2">
                {cart.map((item)=> (
                    <CartItem key={item.product.id} item={item}/>
                ))}
            </div>
            <Separator className="my-4"/>
            <div className="flex justify-between items-center">
                <div>Subtotal:</div>
                <div>R$ {subtotal.toFixed(2)}</div>
            </div>
            <Separator className="my-4"/>
            <div className="text-center">
                <Button onClick={()=> setCheckoutOpen(true)} disabled={cart.length === 0}>Done</Button>
            </div>

            <CheckoutDialog
            open={checkoutOpen}
            onOpenChange={setCheckoutOpen}/>
        </SheetContent>
    </Sheet>
  )
}
