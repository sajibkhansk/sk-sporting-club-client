import React from 'react';

import { FaTrash, FaUser, FaWallet} from 
'react-icons/fa';
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async () => {
        const res = await fetch ('http://localhost:5000/users')
        return res.json();
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleMakeAdmin = id =>{
        
    }
    // const action = (id) => {
    //   // Perform your admin-related actions here
    //     console.log(id);
    //   // Disable the button
    //   setIsButtonDisabled(true);
    // };
    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center text-red-500 mb-2 uppercase font-bold'>----Manage Users----</h1>
            <div className="divider"></div>
            <div className='uppercase text-blue-400 font-bold flex justify-evenly '>
            <h2 className='text-2xl'>Total Users: {users.length}</h2>
            <h2 className='text-2xl'>Total Price: ${}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-xl text-green-600'>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>email</th>
        <th>Make Instructor</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((row, i) => <tr
        key={row._id}>
            <th>
              {i+1}
            </th>
            
            <td className='text-2xl text-orange-600'>{row.name}</td>
            <td className='text-2xl text-blue-600'>{row.email}</td>
            <th>
            <button  className="btn btn-success ">Make Instructor</button>
            </th>
            <th>
            <button onClick={()=> handleMakeAdmin(row)} className="btn btn-primary ">Make Admin</button>
            </th>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
        
    );
};

export default AllUsers;