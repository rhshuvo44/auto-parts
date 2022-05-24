import { faCircleCheck, faScrewdriverWrench, faStarHalfStroke, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
const BusinessSummary = () => {
  return (
    <div>
      <div className="stats w-full shadow p-10">
      
      <div className="stat">
        <div className="stat-figure text-secondary">
        <FontAwesomeIcon className='inline-block w-8 h-8 stroke-current' icon={faCircleCheck} />
        </div>
        <div className="stat-title">Sell Products</div>
        <div className="stat-value text-primary">120M+</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
        <FontAwesomeIcon className='inline-block w-8 h-8 stroke-current' icon={faUsers} />
        </div>
        <div className="stat-title">Customers</div>
        <div className="stat-value text-primary">1K+</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
        <FontAwesomeIcon className='inline-block w-8 h-8 stroke-current' icon={faStarHalfStroke} />
        </div>
        <div className="stat-title">Reviews</div>
        <div className="stat-value text-primary">33K+</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
        <FontAwesomeIcon className='inline-block w-10 h-10 stroke-current' icon={faScrewdriverWrench} />
        </div>
        <div className="stat-title">Parts</div>
        <div className="stat-value text-primary">200+</div>
      </div>
    </div>
    </div>
  );
};

export default BusinessSummary;
