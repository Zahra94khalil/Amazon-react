
import ProductRating from './ProductRating';

const ProductDetails = ({product} , ratings) => {
  return (
    <div className='mb-1'>
        <div className='text-2xl xl:text-3xl font-medium mb-1'>{product.title}</div>
        <p className="py-2 text-xl">{product.description}</p>
        <p className="hover:text-red-500 hover:underline cursor-pointer">visit the {product.brand} store</p>
        <div className="flex gap-[0.5px]">
        <div className='text-sm xl:text-base  mb-1 mt-1'> <ProductRating avgRating={product.avgRating} /></div>
         <div className="flex items-center">
           <p className="hover:text-red-500 hover:underline text-sm">{product.ratings}&nbsp;ratings</p>
           <p>&nbsp;|</p>
           <p className="hover:text-red-500 hover:underline text-sm">&nbsp;Search this page</p>
         </div>
        </div>
        <p className="text-[12px]">6K+ bought in past month</p>
        <hr className="border-[1px] border-gray-200 mt-2" />
        <div className='text-[14px]'>
          <p className='text-gray-600'>Style: <span className='font-semibold'>{product.modelName}</span></p>
        </div>
        <div className='flex gap-3'>
          <span className='flex flex-col rounded-sm border border-[#ed613a] p-2 mt-2'>
            <p className='text-[14px]'>{product.modelName}</p>
            <p className='text-[14px] text-red-700'>${product.price}</p>
          </span>
          <span className='flex flex-col rounded-sm border border-[#222222] p-2 mt-2'>
            <p className='text-[14px]'>{product.modelName}</p>
            <p className='text-[14px] text-red-700'>${product.oldPrice}</p>
          </span>
        </div>
        <div className='p-1 overflow-hidden max-h[240px] w-[80%] shrink'>
          <div className="flex gap-1 justify-start">
            <div className='flex gap-4 mt-2'>
              <div className="flex flex-col gap-2 font-[500]  text-[14px]">
                <p>Brand</p>
                <p>Model Name</p>
                <p>Screen Size</p>
                <p>CPU</p>
                <p>RAM</p>
              </div>
              <div className="flex flex-col gap-2 font-[400] text-[14px]">
                <p>{product.brand}</p>
                <p>{product.modelName}</p>
                <p>{product.screenSize}</p>
                <p>{product.cpu}</p>
                <p>{product.ram}</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-slate-800'/>
        <h2 className='mt-2 font-bold'>About this item</h2>
        <ol className='flex flex-col overflow-hidden gap-[2px] max-h-[385px] text-[14px] font-semibold text-[#0F1111] p-3 list-disc '>
          <li><p>Purposeful Design: Travel with ease and look great doing it with the Aspire's 3 thin, light design.</p></li>
          <li><p>Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest AMD Ryzen 3 7320U Processor </p></li>
          <li><p>Visibly Stunning: Experience sharp details and crisp colors on the 15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.</p></li>
          <li><p>Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe solid-state drive storage to store your files and media</p></li>
          <li><p>The HD front-facing camera uses Acer’s TNR (Temporal Noise Reduction) technology for high-quality imagery in low-light conditions. Acer PurifiedVoice technology with AI Noise Reduction filters out any extra sound for clear communication over online meetings.</p></li>
          <li><p>Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.</p></li>
          <li><p>Improved Thermals: With a 78% increase in fan surface area, enjoy an improved thermal system and an additional 17% thermal capacity. Allowing for longer, more efficient work sessions while not plugged in.</p></li>
        </ol>
        <div className="flex flex-col mt-2">
          <a className="flex gap-1 items-center" href="#">
            <img src="/images/note.avif" alt="" width={25} height={25} />
            <p className="text-[#007185] text-[14px] hover:text-red-600 hover:underline">Report an issue with this product or seller</p>
          </a>
          <p className="text-[14px] text-[#0F1111] leading-[20px]">
            <span className="font-bold">Note:</span>
            Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
          </p>
        </div>
    </div>
  )
}

export default ProductDetails;