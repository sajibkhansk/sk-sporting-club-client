
import { FaGoogle, FaGithub, FaEye } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
  const {signIn, googleProvider, signWithGoogle } =useContext(AuthContext);
  const location = useLocation();
  const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] =useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleLogin = data => {
    signIn(data.email, data.password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace : true})
        })
        .catch(error=>{
          MySwal.fire({
            icon: 'error',
            title: 'Incorrect Password',
            html: <i>Try with correct password!</i>,
          })
          reset();
        })
  }
  const handleLoginWithGoogle = () => {
    signWithGoogle(googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
    return (
      <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=826&t=st=1686300768~exp=1686301368~hmac=b04385c593629409de96ec63a863f8b91ee90f870135b3a6945df8ba52594a29" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <h1 className='text-5xl mb-5'>Login Now !!!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")} type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="password">Password</span>
                </label>
                <div>
                  <input type={showPassword ? 'text' : 'password'} {...register("password")} placeholder="password" className="input input-bordered" />
                  <button type="button" className="btn btn-outline ms-4" onClick={togglePasswordVisibility}>
                    <span><FaEye /></span>
                  </button>
                </div>
                <div></div>
                
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Login" />
              </div>
            </form>
            <div>
            <div className="divider">Login With Google</div>
            <div className="w-full text-center my-4">
                <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
            <p className='text-center my-3'> Dont Have account?  <Link to="/signup" className='underline text-blue-500'>Sign Up</Link></p>
        </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default Login;