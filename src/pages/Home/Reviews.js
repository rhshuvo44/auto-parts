import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://auto-parts-server-one.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  const newReviews = [...reviews].reverse();
  return (
    <div className="p-10 m-auto w-auto">
      <h1 className="text-center font-bold text-5xl">Reviews</h1>
      <div className="divider"></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {newReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card w-96 bg-base-100 mt-5 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.img} alt={review.name} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{review.name}</h2>
                <p>{review.description}</p>
                <div className="card-actions justify-end">
                  <div className="rating">
                    {[...new Array(5)].map((arr, index) => {
                      return index < review.ratting ? (
                        <FontAwesomeIcon
                          icon={faStar}
                          size="lg"
                          color="orange"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faStar} size="lg" />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
