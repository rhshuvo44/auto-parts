import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsTable = ({setProducts,product,index}) => {
    const {_id,name,minimumQuantity,availablQuantity,price}=product;
    
    const handleDelete=(id)=>{
        const deleteConfirm=window.confirm('Are you sure?')
        if(deleteConfirm){
          const url=`https://auto-parts-server-one.vercel.app/parts/${id}`
          fetch(url, {
            method: 'DELETE',
          })
          .then(res=>res.json())
          
          .then(data=>{
            const result=product.filter(item => item._id !== id);
            setProducts(result);
            toast('Deleted Success')
          })
        }
    }
    

    return (
        <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{minimumQuantity}</td>
      <td>{availablQuantity}</td>
      <td>{price}</td>
      <td><button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button></td>
    </tr>
    );
};

export default ManageProductsTable;