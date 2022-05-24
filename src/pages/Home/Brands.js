import React from 'react';
import 'swiper/css';
import "swiper/css/pagination";
import b1 from '../../image/catalog/brands/b1.jpg';
import b2 from '../../image/catalog/brands/b2.jpg';
import b3 from '../../image/catalog/brands/b3.jpg';
import b4 from '../../image/catalog/brands/b4.jpg';
import b5 from '../../image/catalog/brands/b5.jpg';
import b6 from '../../image/catalog/brands/b6.jpg';



const Brands = () => {
    return (
        <div className='py-20'>
            <h1 className='font-bold text-primary text-5xl'>Brands</h1>
            <div class="divider"></div>
        <div class="carousel flex justify-center carousel-center p-4 space-x-4 rounded-box">
        <div class="carousel-item">
          <img src={b1} class="rounded-box" alt=''/>
        </div> 
        <div class="carousel-item">
          <img src={b2} class="rounded-box" alt=''/>
        </div> 
        <div class="carousel-item">
          <img src={b3} class="rounded-box" alt=''/>
        </div> 
        <div class="carousel-item">
          <img src={b4} class="rounded-box" alt=''/>
        </div> 
        <div class="carousel-item">
          <img src={b5} class="rounded-box" alt=''/>
        </div> 
        <div class="carousel-item">
          <img src={b6} class="rounded-box" alt=''/>
        </div> 
        
      </div>
      </div>
    );
};

export default Brands;
