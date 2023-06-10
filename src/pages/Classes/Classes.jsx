import React, { useContext } from 'react';
import useClasses from '../../hooks/useClasses';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from "sweetalert2"
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Classes = () => {
    const [classes] = useClasses();
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const activeClasses = classes.filter(item => item.status === 'active');

    const handleAddToCart = item => {
      if (user && user.email) {
        const classItem = {
          itemId: item._id,
          image: item.image,
          available: item.available,
          class: item.class,
          status: item.status,
          userEmail: user.email,
          instructor: item.instructor,
          price: item.price
        };
    
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(classItem)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Classes added to the cart.',
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
          .catch(error => {
            // Handle any potential errors
            console.error(error);
          });
      } else {
        Swal.fire({
          title: 'Please log in to order the class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then(result => {
          if (result.isConfirmed) {
            navigate('/login', { state: { from: location } });
          }
        });
      }
    };
    
    return (
        <>
            <div className="hero min-h-[300px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5924.jpg?w=996&t=st=1686340832~exp=1686341432~hmac=a2f93f51978bf4e34ceaf8b3e77d24a4bbf3b8ba4a1433a849b1f76445d04708)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-yellow-300 font-bold">Available classes</h1>
                        <p className="mb-5  text-3xl">You have to login  before enroll this course</p>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-2'>
                {
                    activeClasses.map(item => <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2">
                    <figure className="col-span-1">
                      <img src={item.image} alt="Movie" className="w-full" />
                    </figure>
                    <div className="card-body col-span-1">
                      <h2 className="card-title">{item.class}</h2>
                      <p>Instructor: <span className="font-bold">{item.instructor}</span></p>
                      <p>Available Sits: <span className="font-bold text-green-600">{item.available}</span></p>
                      <p>Price: <span className="font-bold text-blue-500">${item.price}</span></p>
                      <div className="card-actions justify-end">
                        <button onClick={()=> handleAddToCart(item)} className="btn btn-primary">Select</button>
                      </div>
                    </div>
                  </div> )
                }
            </div>
        </>
    );
};

export default Classes;