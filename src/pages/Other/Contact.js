import { faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className='p-10'>
            
            <h1 className='text-center font-bold text-5xl'>Contact Address</h1>
            <div className="divider"></div> 
            <div className="py-20 text-center">
            <h5 className='text-2xl mb-5'><FontAwesomeIcon icon={faMapLocation} /> 722/1, West Shewrapara, Mirpur, Dhaka-1216.</h5>
            <h5 className='text-2xl'><FontAwesomeIcon icon={faPhone} /> Helpline : 01700000000 , 01700000001 , 01700000003</h5>
            </div>
            
        </div>
    );
};

export default Contact;