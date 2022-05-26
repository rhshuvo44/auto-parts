import React, { useEffect, useState } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[reviews])
  return (
    <div className="p-10 m-auto w-auto">
      <h1 className="text-center font-bold text-5xl">Reviews</h1>
      <div className="divider"></div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       {
          reviews.map(review=><SwiperSlide>
            <div className="text-center">
            <h1 className="text-3xl my-5">{review.description}</h1>
            <p>{review.ratting}</p>
            </div>
            
          </SwiperSlide>)
        }
    </Swiper>
      {/* <div class="carousel rounded-box">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
       
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
