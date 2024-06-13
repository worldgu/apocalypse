'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import '../app/page.module.css'

import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import './simpleSliderStyles.css';
import { Repeat } from '@mui/icons-material';

export default function SimpleSlider () {
  return (
    <Swiper
      cssMode={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      // data-swiper-autoplay = "2000"
      
      style={{height: '672px'}}
    >
      <SwiperSlide>
        <div slot="container-start"
          className="parallax-bg"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // display: 'block',
            width: "100%",
            height: "100%",
            objectFit: 'cover',
            backgroundImage:
              'url(https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg)',
            backgroundRepeat: 'repeat'
          }}
          data-swiper-parallax="-23%">
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </div>
        {/* https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg */}
        {/* <img src="https://source.unsplash.com/random?wallpapers"/> */}
        </SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-1170x780.jpg"/></SwiperSlide>
    </Swiper>
  );
};