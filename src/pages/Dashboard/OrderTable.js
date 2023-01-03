import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderTable = ({ setOrders, order, index }) => {
  const { _id, totalPrice, email, productName, quantity, phone, paid } = order;
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Are you sure?");
    if (deleteConfirm) {
      const url = `https://auto-parts-server-one.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          const result = order.filter((item) => item._id !== id);
          setOrders(result);
          toast("Deleted Success");
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td>
        {totalPrice && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-secondary text-white">Payment</button>
          </Link>
        )}
        {totalPrice && paid && <span className=" text-success">Paid</span>}
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;
