"use client"
import { Product } from '@/types/Product'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import { useCartStore } from '@/stores/cart-store'

type Props = {
    item: Product
}

export const ProductItem = ({item}: Props) => {
  const {toast} = useToast()
  const {upsertCartItem} = useCartStore(state => state)

  const handleAddButton = ()=>{
    upsertCartItem(item, 1)

    //todo add item on store
    toast({
      title:"Adicionado ao carrinho",
      description:item.name,
      action: <ToastAction altText='Close'>Close</ToastAction>
    })

   
    
  }

  return (
    <div className='bg-[#27272A] rounded-md p-4'>
        <div className='rounded-md overflow-hidden bg'>
            <img src={item.image} alt={item.name} className='w-full h-32 object-cover' />
        </div>
        <div className='mt-3 flex flex-col gap-2'>
            <p className='text-lg '>{item.name}</p>
            <p className='text-sl opacity-70 font-bold  '>R${item.price.toFixed(2)}</p>
            <Button onClick={handleAddButton}>Adicionar</Button>
        </div>
    </div>  
  )
}
