import { Swiper , SwiperSlide } from "swiper/react"
import { Navigation , Autoplay } from "swiper/modules";

import "swiper/css" ;
import "swiper/css/navigation"

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white relative z-10">
        <Swiper
           loop={true}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation , Autoplay]}
            autoplay={{
                delay:3500
            }}
            className="h-[50%]"
            >
              <SwiperSlide>
                <img src="/images/banner_image-01.jpg" alt="Banner 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/banner_image-02.jpg" alt="Banner 2" />
             </SwiperSlide>
              <SwiperSlide>
                <img src="/images/banner_image-03.jpg" alt="Banner 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/banner_image-04.jpg" alt="Banner 4" />
              </SwiperSlide>
              </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-stone-500"/>
    </div>
  )
}

export default Carousel