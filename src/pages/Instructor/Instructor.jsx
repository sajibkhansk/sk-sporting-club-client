import React from 'react';
import useClasses from '../../hooks/useClasses';

const Instructor = () => {
    const [classes] = useClasses();
    return (
        <>
            <div className="hero min-h-[500px]" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?w=996&t=st=1686344912~exp=1686345512~hmac=b473c6fbd2e1698112903c5bfd2f5ee6f5caac0f85b18c6f49ce67c5a955cd37" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl text-yellow-300 font-bold">Meet Our Instructor</h1>
                        <p className="mb-5  text-3xl"></p>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-2'>
                {
                    classes.map(item =>  <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2">
                    <figure className="col-span-1">
                      <img src={item.insImage} alt="Movie" className="w-full" />
                    </figure>
                    <div className="card-body col-span-1">
                      <h2 className="card-title">{item.instructor}</h2>
                      <p>Email: <span className="font-bold text-blue-500">{item.email}</span></p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select</button>
                      </div>
                    </div>
                  </div> 
                   )
                }
            </div>
        </>
    );
};

export default Instructor;