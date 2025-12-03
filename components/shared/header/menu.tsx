import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import UserButton from './user-button'

const Menu = () => {
  return (
    <>
      <div className='flex justify-end gap-3'>
        <nav className='hidden md:flex w-full max-w-xs gap-1'>
          <ModeToggle />
          <Button
            asChild
            variant='ghost'
          >
            <Link href='/cart'>
              <ShoppingCartIcon /> Cart
            </Link>
          </Button>
          <UserButton />
        </nav>
        <nav className='md:hidden'>
          <Sheet>
            <SheetTrigger className='align-middle'>
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className='flex flex-col align-start'>
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
              {/* asChild → “Don’t render a <button> tag — instead, render my child (<Link>) but give it all the Button’s styling and behavior.” */}
              <Button
                asChild
                variant='ghost'
              >
                <Link href='/cart'>
                  <ShoppingCartIcon /> Cart
                </Link>
              </Button>
              <UserButton />
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  )
}

export default Menu
