import React from "react";
import { toast } from "react-toastify";

const MakeAdminTable = ({ setUsers, user, index }) => {
    const{_id,email}=user;
    const handleAdmin=(id)=>{
      
    }
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Are you sure?");
    if (deleteConfirm) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          const result = user.filter((item) => item._id !== id);
          setUsers(result);
          toast("Deleted Success");
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <td>
        <button onClick={() => handleAdmin(_id)} className="btn btn-secondary">
          Make Admin
        </button>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MakeAdminTable;
