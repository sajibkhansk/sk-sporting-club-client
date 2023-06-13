import React, { useEffect } from 'react';
import useClasses from '../../hooks/useClasses';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularInstructor = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const [classes] = useClasses();
  const displayClasses = classes.slice(0, 6);

  return (
    <div className="mx-2">
      <div className="grid md:grid-cols-3 gap-4">
        {displayClasses.map((item) => (
          <div className="card w-96 bg-base-100 shadow-2xl image-full" key={item._id} data-aos="fade-up">
            <figure>
              <img src={item.insImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title absolute right-10 text-sm bottom-2 text-white">
                {item.instructor} <br /> {item.class} Expert
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
