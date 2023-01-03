import React from "react";
import { toast } from "react-toastify";

const MakeAdminTable = ({ setUsers, user, index }) => {
    const{_id,email,role}=user;
    const handleAdmin=()=>{
      fetch(`https://auto-parts-server-one.vercel.app/user/admin/${email}`,{
  method: "PUT",
  headers: {
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
})
.then(res=>{
  if(res.status===403){
    toast.error('Failed to make an admin')
  }
  return res.json()})
.then(data=>{
if(data.modifiedCount >0){
  toast.success("Successfully made an admin");

}  

})
    }
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Are you sure?");
    if (deleteConfirm) {
      const url = `https://auto-parts-server-one.vercel.app/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          const result = user.filter((item) => item._id !== id);
          setUsers(result);
          toast.success("Deleted Success");
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <td>
        { role !== 'admin' && <button onClick={handleAdmin} className="btn btn-xs">
          Make Admin
        </button>}
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-xs">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MakeAdminTable;
