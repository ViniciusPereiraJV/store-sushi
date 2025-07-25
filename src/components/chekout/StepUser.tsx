import { Steps } from '@/types/Steps'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import {z} from "zod" 
import {zodResolver} from "@hookform/resolvers/zod"
import { useCheckoutStore } from '@/stores/checkout-store'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


type Props = {
    setStep: Dispatch<SetStateAction<Steps>>
}

const formSchema = z.object({
    name:z.string().min(2, "Fill the inputs")
})

export const StepUser = ({setStep} : Props) => {
    const { name, setName} = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{name}
    })

    const onSubmit = (value:z.infer<typeof formSchema>) =>{
        setName(value.name)
        setStep("adress")
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <FormField 
                control={form.control} 
                name="name" 
                render={({field})=> (
                    <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            autoFocus
                            placeholder='What´s your name?'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <Button type='submit' variant="outline">Next</Button>
        </form>

    </Form>
  )
}
