import React from "react";
import { useForm } from "react-hook-form";

const Feedback = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert("feedback Submitted")
      };
    return (
        <div>
            <h1 className="text-center text-5xl">FeedBack</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

      <input className="textarea textarea-primary h-20 pt-5 " defaultValue="test" {...register("feedback")} />
      
      
      <input type="submit"  />
    </form>
        </div>
    );
};

export default Feedback;