
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/theme-toggle'
import { CartSideBar } from '@/components/cart/sidebar'

export const Header = () => {
  return (
    <header className='flex justify-between items-center my-4 mx-4'>
        <div className='flex items-center gap-2'>
            <Logo/>
            <ModeToggle/>
        </div>
        <div className='flex items-center gap-2'>
            <CartSideBar/>
        </div>
    </header>
  )
}
