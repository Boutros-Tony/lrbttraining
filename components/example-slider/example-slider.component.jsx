import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ImageComponent from '../image-component/image-component';

const ExampleSlider = () => {
    // Refs for the custom navigation buttons
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className="examples-slider">
              <Swiper
          modules={[Navigation]}
        
          slidesPerView={1}
          
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
         }}
        >
          
            <SwiperSlide>
            <img src='/assets/slide-1.jpg'   alt="Workers in high-visibility vests perform task-based work by installing kerb stones alongside a rural road, indicative of group task activities."  />
            </SwiperSlide>
            <SwiperSlide>
            <img src='/assets/slide-2.jpg' className="boq-ch3-img"  alt="Laborers in reflective gear are engaged in excavation work in a trench, representing task-based group activities in construction"  />
            </SwiperSlide>
            <SwiperSlide>
            <img src='/assets/slide-3.jpg' className="boq-ch3-img"  alt="Laborers in safety vests and hard hats working on a rocky terrain with tools, showcasing active construction work and task coordination"  />
            </SwiperSlide>
            <button role='button'  className="left-arr" ref={navigationPrevRef} >
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21849 0.164376C5.54194 0.423133 5.59438 0.895102 5.33562 1.21855L1.71044 5.75003L5.33562 10.2815C5.59438 10.605 5.54194 11.0769 5.21849 11.3357C4.89505 11.5944 4.42308 11.542 4.16432 11.2185L0.164321 6.21855C-0.0548108 5.94464 -0.0548108 5.55542 0.164321 5.28151L4.16432 0.281506C4.42308 -0.0419402 4.89505 -0.0943812 5.21849 0.164376Z" />
</svg>

                </button>
      <button className="right-arr" ref={navigationNextRef} >
      <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.281506 11.3356C-0.0419401 11.0769 -0.094381 10.6049 0.164376 10.2815L3.78956 5.74997L0.164377 1.21849C-0.0943797 0.895046 -0.0419387 0.423077 0.281508 0.16432C0.604954 -0.0944375 1.07692 -0.0419959 1.33568 0.28145L5.33568 5.28145C5.55481 5.55537 5.55481 5.94458 5.33568 6.21849L1.33568 11.2185C1.07692 11.5419 0.604953 11.5944 0.281506 11.3356Z" />
</svg>

      </button>
        </Swiper>
        </div>
    );
};

export default ExampleSlider;
