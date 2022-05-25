import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import PartCard from './PartCard';

const Parts = () => {
    const { isLoading,  data:parts } = useQuery('parts', () =>
    fetch(`http://localhost:5000/parts`).then(res =>
      res.json()
    )
  )

  if (isLoading) return <Looding/>
    return (
        <div className='p-10'>
            <h1 className='font-bold text-primary text-5xl text-center'>Products</h1>
            <div className="divider"></div>
            <div className='grid md:grid-cols-3 '>
                {
                    parts.map(part=><PartCard key={part._id} part={part}/>)
                    
                }
            </div>
            
        </div>
    );
};

export default Parts;