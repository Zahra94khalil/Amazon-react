
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Search from './Search'
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {
  const cart = useSelector((state) =>state.cart.productNumber);

  return (
    <header className='min-w-[1000px]'>
      <div className='flex bg-[#131921] text-white h-[60px]'>
        <div className='flex items-center'>
            <Link to={"/"}>
              <img className="h-8 w-auto m-3" src="/images/amazon.png" alt=""/>
            </Link>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Deliver to</div>
                <div className='text-xs xl:text-base font-bold'>Iran</div>
            </div>
        </div>
        <div className='flex grow relative items-center'>
            <Search/>
        </div>
        <div className='flex items-center m-4'>
        <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Hello , sign in</div>
                <div className='text-xs xl:text-base font-bold'>Account & lists</div>
            </div>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>returns</div>
                <div className='text-xs xl:text-base font-bold'>& Orders</div>
            </div>
            <Link to={"/checkout"}>
              <div className='flex pr-3 pl-3'>
                <img src="/images/cart.avif" alt=""  className='h-[48px]'/>
                 <div className='relative'>
                  <div className='absolute right-[16px] font-bold m-2 text-orange-400'>
                    {cart}
                  </div>
                 </div>
                <div className='mt-7 text-xl xl:text-sm font-bold'>
                Cart
                </div>
              </div>
            </Link>
        </div>
      </div>
      <div className='flex items-center bg-amazon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
        <div className='flex items-center gap-1'>
         <HamburgerMenu/>
         <a href='#'>All</a>
        </div>
        <a href='#'>Today's Deal</a>
        <a href='#'>Customer Service</a>
        <a href='#'>Registry</a>
        <a href='#'>Gift Cards</a>
        <a href='#'>sell</a>
      </div>
    </header>
  )
}

export default NavBar