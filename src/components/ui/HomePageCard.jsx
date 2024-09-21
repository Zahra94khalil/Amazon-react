import ProductRating from "./ProductRating";
const HomePageCard = ({ title, img, description , price , oldPrice  , rating , avgRating}) => {
    return (
      <div className="col-span-1 cursor-pointer bg-white p-3 relative z-10">
       <div className="flex flex-col gap-0">
        <div>
          <img 
          className='object-cover p-10 h-full w-full'
          sizes="100vw"
          src={img} alt="" />
        </div>
        <h2 className='text-xl mb-2'>
        {title}
        </h2>
        <hr className="border-slate-300 mb-2 w-full border" />
        <div className='self-start'>
          <div className='flex gap-[1px]'>
            <p className='self-start mt-[7px]'>$</p>
            <p className='self-stretch font-semibold text-[25px]'>{price}</p>
            <p className='self-start font-semibold mt-[7px]'>99</p>
          </div>
        </div>
        <p className='line-through self-start -mt-[7px] text-[13px]'>$ {oldPrice}</p>
        <p className='text-sm mt-2'>{description}</p>
        <p><ProductRating avgRating={avgRating} rating={rating} /></p>
        <p className="hover:text-red-600 hover:-translate-y-[1px] mt-3 ml[3px]">see more...</p>
       </div>
      </div>
    );
  };
  
  export default HomePageCard;