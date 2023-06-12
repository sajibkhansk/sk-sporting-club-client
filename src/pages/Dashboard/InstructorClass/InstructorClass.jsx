import { useContext } from 'react';
import useClasses from '../../../hooks/useClasses';
import { AuthContext } from '../../../Providers/AuthProvider';

const InstructorClass = () => {
  
  const  { user} = useContext(AuthContext);
    const [classes] = useClasses();
    const myClasses = classes.filter((row) => {
      return row.email === user.email && row.status === "pending";
    });
    console.log(myClasses.length);
    console.log(classes.length);
    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center text-red-500 mb-2 uppercase font-bold'>----Status of my classes----</h1>
            <div className="divider"></div>
            <div className='uppercase text-blue-400 font-bold flex justify-evenly '>
            <h2 className='text-2xl'>Total class: {myClasses.length}</h2>
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
        <th>Status</th>
        <th>Update</th>
        <th>Total Student</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
      {
        myClasses.map((row, i) => <tr
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
            
            <td className='text-2xl text-orange-600'><div className="badge badge-accent">{row.status}</div></td>
            <th>
              <button onClick={()=> handleDelete(row)} className="btn btn-sm btn-info">update</button>
            </th>
            <th>
            <div>
              <h1>{row.total}</h1>
            </div>
            </th>
            <th>
              <h1>{row.feedback}</h1>
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