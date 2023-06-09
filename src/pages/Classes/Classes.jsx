import React from 'react';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const [classes] = useClasses();
    const activeClasses = classes.filter(item => item.status === 'active');
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
                        <button className="btn btn-primary">Select</button>
                      </div>
                    </div>
                  </div> )
                }
            </div>
        </>
    );
};

export default Classes;