import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
import { generateMessage } from "@/lib/generate-message"


export const StepFinish = () => {
const {name} = useCheckoutStore(state => state)

const message = generateMessage()
const linkZap=`https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`
  return (
    <div className="text-center flex flex-col gap-5">
      <p>Show de bola <strong>{name}</strong></p>
      <p>Agora envie o pedido ao nosso whatsapp para concluir. Nosso atendente irá atualizar o status do pedido </p>
      <Button>
        <Link  target="_blank" href={linkZap}>Send to Whatsapp</Link>
      </Button>
    </div>
  )
}
