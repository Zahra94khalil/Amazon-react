
import { useState, useEffect, useRef } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); 
  const buttonRef = useRef(null); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={toggleSidebar}
        className="text-gray-200 z-[61] relative"
      >
          <Bars3Icon className="h-8 w-8" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[50] transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
      
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-white z-[100] w-[320px] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        
        <div>
           <header className='bg-[#232f3e] flex items-center pl-[30px] gap-[10px] p-[8px]'>
             <img src="/images/profile.avif" alt="profile icon" width={35} height={35}/>
             <p className='text-white font-extrabold text-lg cursor-pointer'>Hello , sign in</p>
           </header>
           <main className='overflow-scroll relative h-screen'>
             <div className="text-gray-700">
               <p className='font-bold text-lg p-5 pb-1 pt-4 text-gray-700'>
               Digital Content & Devices
               </p>
               <ul>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm '>
                   Amazon Music
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                    Kindle E -readers & Books
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                    Amazon Appstore
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                </li>
               </ul>
               <hr className='boreder-[1px]' />

               <p className='font-bold text-lg p-5 pb-1 pt-4'>
               Digital Content & Devices
               </p>
               <ul>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                   Amazon Music
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                    Kindle E -readers & Books
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                    Amazon Appstore
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
               </ul>
               <hr className='boreder-[1px]' />

               <p className='font-bold text-lg p-5 pb-1 pt-4'>
               Digital Content & Devices
               </p>
               <ul>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                   Amazon Music
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                    Kindle E -readers & Books
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
                 <li className='cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm'>
                    Amazon Appstore
                   <img src="/images/arrow-right.avif" width={20} height={20} alt="" />
                 </li>
               </ul>
               <hr className='boreder-[1px]' />
            </div>
         </main>
         </div>
      </div>
    </div>
  );
}

export default Sidebar;

