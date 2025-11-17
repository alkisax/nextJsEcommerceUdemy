import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import Menu from './menu'

const Header = () => {
  return (
    <>
      {/* full width bottom border */}
      <header className='w-full border-b flex-between'>
        {/* custom utility classes defined before flex justify-start items-center */}
        <div className='flex-start'>
          <Link
            href='/'
            className='flex-start'
          >
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            {/* σε sm κρύβετε, σε lg φένετε */}
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </header>
    </>
  )
}

export default Header
