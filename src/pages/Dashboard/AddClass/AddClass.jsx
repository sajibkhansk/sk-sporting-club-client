import React from 'react';
import { FaPlusSquare} from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
const AddClass = () => {
    const MySwal = withReactContent(Swal);
    const {user} = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/classes", {
            method:"POST",
            headers : {"Content-Type": "application/json"},
            body:JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            if(result.insertedId){
                MySwal.fire({
                    title: <strong>Class Added for verify</strong>,
                    icon: 'success'
                  })
                  reset();
            }
        })

    };
    return (
        <div>
            <div>
            <h1 className='text-2xl text-center font-bold flex text-red-500 items-center gap-2'>Add A Class <FaPlusSquare/>   </h1>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("class", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" placeholder="Instructor Name" value = {user?.displayName}
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">email*</span>
                    </label>
                    <input type="text" placeholder="email" value={user?.email}
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available sit*</span>
                    </label>
                    <input type="number" placeholder="Available sit"
                        {...register("available", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Image*</span>
                    </label>
                    <input type="text" placeholder="Instructor Image"
                        {...register("insImage", {  maxLength: 12000 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">price*</span>
                    </label>
                    <input type="text" placeholder="price"
                        {...register("price", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image*</span>
                    </label>
                    <input type="text" placeholder="Class Image"
                        {...register("image", {  maxLength: 1200})}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control invisible">
                    <label className="label">
                        <span className="label-text font-semibold">Status*</span>
                    </label>
                    <input type="text" placeholder="status" value="pending" 
                        {...register("status", {  maxLength: 120 })}
                        className="input input-bordered w-full  " />
                </div>
                <div className="form-control w-full mb-4 invisible">
                    <label className="label">
                        <span className="label-text font-semibold">sits</span>
                    </label>
                    <input type="number" placeholder="status" value="0" 
                        {...register("total", {  maxLength: 120 })}
                        className="input input-bordered w-full  " />
                </div>
                <input className="btn btn-sm btn-outline mt-4" type="submit" value="Add Item" />
            </form>
            </div>
        </div>
    );
};

export default AddClass;