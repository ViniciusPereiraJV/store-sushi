
import { TabsList, TabsTrigger, Tabs, TabsContent } from '@/components/ui/tabs'
import { getAllProdutcs } from '@/services/product'
import { ProductItem } from './item'
import { Product } from '@/types/Product'
import { Empty } from './empty'

type Tabs = {
  title:string,
  value:string,
  produtcs:Product[]
}

export const ProdutcsTab = async () => {
  const produtcs = await getAllProdutcs()

  const tabs : Tabs[] = [
    {
      title:"Sushi",
      value:"sushi",
      produtcs: produtcs.filter(item => item.category === "sushi")
    },
    {
      title:"Temaki",
      value:"temaki",
      produtcs: produtcs.filter(item => item.category === "temaki")
    },
    {
      title:"Combinados",
      value:"pack",
      produtcs: produtcs.filter(item => item.category === "pack")
    },
    {
      title:"Bebidas",
      value:"beverage",
      produtcs: produtcs.filter(item => item.category === "beverage")
    },
  ]



  return (
    <Tabs defaultValue='sushi'>
        <TabsList className='flex'>
          {tabs.map((item)=> (
            <TabsTrigger className='flex-1' key={item.value} value={item.value}>{item.title}</TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((item)=> (
          <TabsContent className='mt-6' key={item.value} value={item.value}>
            {item.produtcs.length > 0 &&
            //mobile first the grid
            <div className='grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
              {item.produtcs.map((product) => (
                <ProductItem key={product.id} item={product}/>
              ))}
            </div>
            }

            {item.produtcs.length === 0 && <Empty/>}
          </TabsContent>
        ))}
    </Tabs>
  )
}
