import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://guarded-oasis-40937.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <div className="p-10 m-auto w-auto">
      <h1 className="text-center font-bold text-5xl">Reviews</h1>
      <div className="divider"></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center">
              <h1 className="text-3xl my-5">{review.description}</h1>
              <div class="rating">{ review.ratting }</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
