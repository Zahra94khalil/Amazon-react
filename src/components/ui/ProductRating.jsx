import { StarIcon } from '@heroicons/react/24/outline';

const ProductRating = (props) => {
    const starNumber = props.avgRating;
    const ratingNumber = props.rating;

  return (
    <div className='flex'>
        {Array.from({length:starNumber} , (_,i) =><StarIcon key={i} className='stroke-[#f1b61f] fill-[#f1b61f] h-[20px]'/>)}
        {Array.from({length:5-starNumber} , (_,i) =><StarIcon key={i} className='stroke-[#f1b61f] h-[20px]'/>)}
        <span className='ml-3 text-blue-500'>{ratingNumber}</span>
    </div>
  )
}

export default ProductRating