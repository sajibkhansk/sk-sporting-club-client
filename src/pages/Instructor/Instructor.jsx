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
                    classes.map(item => <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                      </div>
                    </div>
                  </div> )
                }
            </div>
        </>
    );
};

export default Instructor;