import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrderTable = ({setOrders,order,index}) => {
    const {_id,totalPrice,email,productName,quantity,phone}=order;
    const navigate=useNavigate()

    const handlePayment=(id)=>{
      navigate('/payment')
    }
    const handleDelete=(id)=>{
        const deleteConfirm=window.confirm('Are you sure?')
        if(deleteConfirm){
          const url=`http://localhost:5000/orders/${id}`
          fetch(url, {
            method: 'DELETE',
          })
          .then(res=>res.json())
          
          .then(data=>{
            const result=order.filter(item => item._id !== id);
            setOrders(result);
            toast('Deleted Success')
          })
        }
    }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td><button onClick={()=>handlePayment(_id)} className="btn btn-secondary">Payment</button></td>
      <td><button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button></td>
    </tr>
  );
};

export default OrderTable;
