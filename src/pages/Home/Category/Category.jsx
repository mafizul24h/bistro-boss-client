import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import image1 from './../../../assets/home/slide1.jpg'
import image2 from './../../../assets/home/slide2.jpg'
import image3 from './../../../assets/home/slide3.jpg'
import image4 from './../../../assets/home/slide4.jpg'
import image5 from './../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <div className='mb-24'>
      <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'Order Online'} />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Food" />
          <h2 className='text-2xl drop-shadow-lg uppercase text-center text-white font-semibold -mt-8'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Food" />
          <h2 className='text-2xl drop-shadow-lg uppercase text-center text-white font-semibold -mt-8'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Food" />
          <h2 className='text-2xl drop-shadow-lg uppercase text-center text-white font-semibold -mt-8'>Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Food" />
          <h2 className='text-2xl drop-shadow-lg uppercase text-center text-white font-semibold -mt-8'>Desert</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="Food" />
          <h2 className='text-2xl drop-shadow-lg uppercase text-center text-white font-semibold -mt-8'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Food" />
          <h2 className='text-2xl drop-shadow-lg uppercase text-center text-white font-semibold -mt-8'>Pizza</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;