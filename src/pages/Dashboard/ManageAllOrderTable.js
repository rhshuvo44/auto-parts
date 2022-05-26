import React from 'react';

const ManageAllOrderTable = ({order,index}) => {
    const {_id,name,totalPrice,email,productName,quantity,phone}=order;

    return (
        
    <tr>
    <th>{index + 1}</th>
    <td>{productName}</td>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>{quantity}</td>
    <td>{totalPrice}</td>
    <td><button  className="btn btn-secondary">Payment</button></td>
    <td><button  className="btn btn-primary">Delete</button></td>
  </tr>
    );
};

export default ManageAllOrderTable;