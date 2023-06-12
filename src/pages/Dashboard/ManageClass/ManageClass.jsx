import { useContext, useState } from 'react';
import useClasses from '../../../hooks/useClasses';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaCheck, FaComment } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const ManageClass = () => {
  const { user } = useContext(AuthContext);
  const [deniedClasses, setDeniedClasses] = useState([]);
  const [classes] = useClasses();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, row) => {
    console.log(data.feedback);
    fetch(`http://localhost:5000/classes/${row._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback: data.feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Feedback Sent!', 'success');
        } else {
          Swal.fire('Error!', 'Failed to send feedback', 'error');
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire('Error!', 'Failed to send feedback', 'error');
      });
  };

  const myClasses = classes.filter((row) => {
    return row.status === 'pending';
  });
  const handleApprove = (row) => {
    console.log('Approve');
    console.log(row.email);
    fetch(`http://localhost:5000/classes/${row._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire('Approved Success!', 'The Class is running From Now!', 'success');
        }
      });
  };
  const handleDeny = (row) => {
    // Check if the class has already been denied
    if (deniedClasses.includes(row._id)) {
      return; // Class already denied, do nothing
    }

    // Update the denied classes state
    setDeniedClasses([...deniedClasses, row._id]);

    Swal.fire({
      icon: 'error',
      title: 'Your class has been denied',
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center text-red-500 mb-2 uppercase font-bold">----Pending Classes----</h1>
      <div className="divider"></div>
      <div className="uppercase text-blue-400 font-bold flex justify-evenly ">
        <h2 className="text-2xl">Total class: {myClasses.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-green-600">
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Ins. Email</th>
              <th>Price</th>
              <th>Available Sit</th>
              <th>Feedback</th>
              <th>Approve</th>
              <th>Denied</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((row, i) => (
              <tr key={row._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={row.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{row.class}</div>
                      <div className="text-sm opacity-100">{row.instructor}</div>
                    </div>
                  </div>
                </td>

                <td className="text-sm font-bold">{row.email}</td>
                <th className="text-purple-600">${row.price}</th>
                <th>
                  <div>
                    <h1>{row.available}</h1>
                  </div>
                </th>
                <th>
                  <h1>Feedback</h1>
                </th>
                <th>
                  <button
                    disabled={deniedClasses.includes(row._id)}
                    onClick={() => handleApprove(row)}
                    className="btn btn-circle btn-success btn-outline"
                  >
                    <FaCheck />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeny(row)}
                    className="btn btn-circle btn-error btn-outline"
                    disabled={deniedClasses.includes(row._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-circle btn-outline"
                    onClick={() => window.my_modal_1.showModal()}
                  >
                    <FaComment />
                  </button>

                  <dialog id="my_modal_1" className="modal">
                    <form
                      onSubmit={handleSubmit((data) => {
                        onSubmit(data, row);
                        window.my_modal_1.close();
                      })}
                      className="modal-box"
                    >
                      <h3 className="font-bold text-3xl text-red-500">Feed Back!</h3>
                      <p className="py-4">Press ESC key or click the button below to close</p>
                      <div className="modal-action">
                        <input className="textarea textarea-info mx-5 h-[100px] w-[300px]" {...register('feedback')} />
                        <input className="btn btn-outline" type="submit" />
                      </div>
                    </form>
                  </dialog>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
