
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image4 from "../../assets/Insta.jpg"
import image5 from "../../assets/14.jpg"
import image16 from "../../assets/img16.jpg"
import image8 from "../../assets/img8.jpg"
import image17 from "../../assets/img17.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper 
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper">

      <SwiperSlide>
        <img src={image4} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image16} alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image8} alt="Image 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image17} alt="Image 5" />
      </SwiperSlide>
    </Swiper>
    </>
  );
}
