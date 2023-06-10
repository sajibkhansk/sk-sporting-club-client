import { FaGoogle, FaGithub, FaEye } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser, updateProfileData, logOut} =  useContext(AuthContext);
  const MySwal = withReactContent(Swal);

  const handleRegister = data => {
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        return updateProfileData(data.name, data.photoUrl);
      })
      .then(() => {
        const savedUser = { name: data.name, email: data.email };
        return fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(savedUser)
        });
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          logOut();
          MySwal.fire({
            title: '<strong>User Created!</strong>',
            html: '<i>Now you can Login!</i>',
            icon: 'success'
          });
          reset();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=826&t=st=1686312395~exp=1686312995~hmac=bc68dc9213ce2e34bc652da7cb93f207fb4324ed4adee2a1b9d208c5404bc619" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleRegister)} className="card-body">
              <div className="form-control">
                <h1 className='text-3xl mb-5'>Create Account!!!</h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="Name" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input {...register("photoUrl", { required: true})} type="text" placeholder="Photo Url" className="input input-bordered" required />

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: true})} type="text" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="password">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered"  />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lowercase, one number, and one special character.</p>}
                <label className="label">
                  <span className="password">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm Password" className="input input-bordered" />
               
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="SignUp" />
              </div>
            </form>
            
                  <p className='text-center my-3'> SignUp complete? want to  <Link to="/login" className='underline text-blue-500'>Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
