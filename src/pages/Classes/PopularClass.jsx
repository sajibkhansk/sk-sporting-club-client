import React, { useEffect } from 'react';
import useClasses from '../../hooks/useClasses';
import 'aos/dist/aos.css'; // Import the AOS stylesheets
import AOS from 'aos'; // Import the AOS library

const PopularClass = () => {
  const [classes] = useClasses();
  const sortedClasses = [...classes].sort((a, b) => {
    const totalSeatsA = parseInt(a.total);
    const totalSeatsB = parseInt(b.total);
    return totalSeatsB - totalSeatsA;
  });
  const top6Classes = sortedClasses.slice(0, 6);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS on component mount to apply animations

    return () => {
      AOS.refresh(); // Refresh AOS on component unmount to remove animations
    };
  }, []);

  return (
    <div className='grid md:grid-cols-2 gap-4'>
      {top6Classes.map((item, index) => (
        <div
          className="card card-side bg-base-100 shadow-xl grid grid-cols-2"
          key={item.class}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Set different animations based on index
        >
          <figure className="col-span-1">
            <img src={item.image} alt="Movie" className="w-full" />
          </figure>
          <div className="card-body col-span-1">
            <h2 className="card-title">{item.class}</h2>
            <p>
              Instructor: <span className="font-bold">{item.instructor}</span>
            </p>
            {
              <p>
                Total Enrolled: <span className="badge badge-secondary">Already enrolled {parseInt(item.total)}</span>
              </p>
            }
            <p>
              Price: <span className="font-bold text-blue-500">${parseInt(item.price)}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClass;
