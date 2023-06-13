import React from 'react';
import { FaTrash, FaUser, FaWallet} from 
'react-icons/fa';
import Swal from "sweetalert2"
import useCart from '../../../hooks/useCart';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum , 0);
    const handleDelete = row => {
        console.log(row);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this course!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
     return (
        <div className='w-full'>
            <h1 className='text-3xl text-center text-red-500 mb-2 uppercase font-bold'>----Selected Course----</h1>
            <div className="divider"></div>
            <div className='uppercase text-blue-400 font-bold flex justify-evenly '>
            <h2 className='text-2xl'>Total Order: {cart.length}</h2>
            <h2 className='text-2xl'>Total Price: ${total}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-xl text-green-600'>
      <tr>
        <th>
         #
        </th>
        <th>Class</th>
        <th>Price</th>
        <th>Action</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((row, i) => <tr
        key={row._id}>
            <th>
              {i+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={row.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{row.class}</div>
                  <div className="text-sm opacity-100">{row.instructor}</div>
                </div>
              </div>
            </td>
            
            <td className='text-2xl text-orange-600'>${row.price}</td>
            <th>
              <button onClick={()=> handleDelete(row)} className="btn btn-circle btn-error btn-outline"><FaTrash></FaTrash></button>
            </th>
            <th>
            <Link to = "/dashboard/payment"><button className="btn btn-success btn-circle btn-outline"><FaWallet></FaWallet></button></Link>
            </th>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
        
    );
};

export default MySelectedClass;