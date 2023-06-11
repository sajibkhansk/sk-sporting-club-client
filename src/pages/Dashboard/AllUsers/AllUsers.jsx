import React from 'react';
import { FaTrash, FaUser, FaWallet } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
  const handleMakeAdmin = (row) => {
    fetch(`http://localhost:5000/users/admin/${row._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log('I am here');
          refetch();
        }
      });
  };

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center text-red-500 mb-2 uppercase font-bold'>----Manage Users----</h1>
      <div className='divider'></div>
      <div className='uppercase text-blue-400 font-bold flex justify-evenly '>
        <h2 className='text-2xl'>Total Users: {users.length}</h2>
        <h2 className='text-2xl'>Total Price: ${}</h2>
      </div>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead className='text-xl text-green-600'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((row, i) => (
              <tr key={row._id}>
                <th>{i + 1}</th>
                <td className='text-2xl text-orange-600'>{row.name}</td>
                <td className='text-2xl text-blue-600'>{row.email}</td>
                <th>
                  <button className='btn btn-success'>Make Instructor</button>
                </th>
                <th>
                  <button onClick={() => handleMakeAdmin(row)} className='btn btn-primary' disabled={row.role == 'admin'}> MAKE ADMIN
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
