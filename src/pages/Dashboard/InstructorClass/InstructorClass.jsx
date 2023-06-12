import React from 'react';
import useClasses from '../../../hooks/useClasses';

const InstructorClass = () => {
    const [classes] = useClasses();
    console.log(classes.length);
    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center text-red-500 mb-2 uppercase font-bold'>----Status of my classes----</h1>
            <div className="divider"></div>
            <div className='uppercase text-blue-400 font-bold flex justify-evenly '>
            <h2 className='text-2xl'>Total class: {classes.length}</h2>
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
        classes.map((row, i) => <tr
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
              <button onClick={()=> handleDelete(row)} className="btn btn-circle btn-error btn-outline"></button>
            </th>
            <th>
            <button className="btn btn-success btn-circle btn-outline"></button>
            </th>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
        
    );
};

export default InstructorClass;