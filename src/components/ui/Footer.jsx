import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-slate-300'>
        <a className="bg-[#232F3E]/90 hover:bg-[#232F3E]/80 " href="#">
         <p class="text-center text-[12px] p-[14px] text-white">Back to top</p>
        </a>
        <div className='p-10 shrink-0 px-[90px] grid grid-cols-4 justify-around flex-row bg-[#232f3e]'>
         <div>
         <p className='text-white font-extraboldp-[2px]'>Get to Know Us</p>
          <ul className='flex flex-col'>
          <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Careers</a>
           </li> 
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Blog</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">About Amazon</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Investor Relations</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Amazon Devices</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Amazon Science</a>
           </li>
          </ul>
         </div>
         <div>
         <p className='text-white font-extraboldp-[2px]'>Make Money with Us</p>
          <ul className='flex flex-col'>
          <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Sell products on Amazon</a>
           </li> 
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Sell on Amazon Business</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Sell apps on Amazon</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Become an Affiliate</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Advertise Your Products</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Self-Publish with Us</a>
           </li>
          </ul>
         </div>
         <div>
         <p className='text-white font-extraboldp-[2px]'>Get to Know Us</p>
          <ul className='flex flex-col'>
          <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Careers</a>
           </li> 
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Blog</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">About Amazon</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Investor Relations</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Amazon Devices</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Amazon Science</a>
           </li>
          </ul>
         </div>
         <div>
         <p className='text-white font-extraboldp-[2px]'>Get to Know Us</p>
          <ul className='flex flex-col'>
          <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Careers</a>
           </li> 
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Blog</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">About Amazon</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Investor Relations</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Amazon Devices</a>
           </li>
           <li className='p-[2px]'>
            <a className='hover:underline text-sm' href="#">Amazon Science</a>
           </li>
          </ul>
         </div>
        </div>

        <hr className='border-slate-500 h-[0.5px]'/>
        <div className='bg-[#232F3E] p-[10px]'>
          <div className='flex items-center justify-center mx-auto max-w-[800px]'>
            <a className='p-1 mr-[8px] -ml-[24px]' href="/">
            <img width={100} height={100} src="/images/amazon.png" alt="logo" /></a>
            <div className='flex items-center justify-center gap-1'>
              <div className='p-1 shrink-0 cursor-pointer flex items-center justify-center gap-1 border-slate-400 border-2 rounded'>
                <img src="/images/glob.avif" width={17} height={17} alt="" />
                <p>ENGLISH</p>
              </div>
              <div className='p-1 shrink-0 cursor-pointer flex items-center justify-center gap-1 border-slate-400 border-2 rounded'>
                <p>
                  <span className='font-semibold text-white'>$</span>
                  USD - U.s Dollor
                </p>
              </div>
              <div className='p-1 shrink-0 cursor-pointer flex items-center justify-center gap-1 border-slate-400 border-2 rounded'>
                <img src="/images/USA-flag.avif" width={17} height={17} alt="" />
                <p>United States</p>
              </div>
             
            </div>
          </div>
        </div>
       
    </footer>
    
  )
}

export default Footer