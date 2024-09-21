import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from '../ui/Carousel';
import HomePageCard from '../ui/HomePageCard';


const HomePage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setCardData(data));
  }, []);

  return (
    <main className="bg-amazon-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-neutral-100">
        <Carousel/>
        <div className='grid grid-cols-5 xl:grid-cols-5 -mt-80 gap-2 px-4 '>
          {cardData?.map((card, i) => (
            <Link to={`/product/${i}`}>
            <HomePageCard 
              key={i} 
              title={card.title} 
              img={card.image} 
              link={card.link} 
              price={card.price}
              oldPrice={card.oldPrice}
              description={card.description}
              avgRating={card.avgRating}
              rating={card.ratings}
            />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default HomePage