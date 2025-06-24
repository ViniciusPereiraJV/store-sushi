import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = ()=> {
    const {name, adress} = useCheckoutStore(state => state)
    const {cart} = useCartStore(state => state)
    
    let orderProducts = [];
    for(let item of cart){
        orderProducts.push(`${item.quantity}x ${item.product.name}`)
    }
    return `\u{1F4CD} *Dados do Cliente:*\n` +  // 📍
    `👤 *Nome:* ${name}\n` +
    `\u{1F3E0} *Endereço:* ${adress.street}, ${adress.number}${adress.complement ? ` (${adress.complement})` : ""}\n` +  // 🏠
    `\u{1F3D8} *Bairro:* ${adress.district}\n` +  // 🏘️
    `\u{1F4CD} *Cidade:* ${adress.city} - ${adress.state.toUpperCase()}\n` +
    `\n------------------------------\n\n` +
    `\u{1F6D2} *PEDIDO:*\n` +  // 🛒
    orderProducts.map(item => `\u{1F37D} ${item}`).join("\n");  // 🍽️
    
}