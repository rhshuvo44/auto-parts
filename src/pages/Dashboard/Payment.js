import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id}=useParams()
    return (
        <div className='p-10'>
            <h1 className='text-center text-2xl'>Payment : {id}</h1>
        </div>
    );
};

export default Payment;