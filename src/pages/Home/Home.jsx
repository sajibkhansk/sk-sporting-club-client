import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import PopularInstructor from '../Classes/PopularInstructor';
import PopularClass from '../Classes/PopularClass';
import Goal from '../Classes/Goal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  useEffect(() => {
    AOS.init({
      offset: 200, // Adjust the offset value as needed
      duration: 800, // Adjust the duration value as needed
    });
  }, []);

  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
      >

        <div data-src="https://i.ibb.co/LCw7fxP/beautiful-handicap-woman-practicing-badminton-isolated-blue-background-neon-light-lifestyle-inclusiv.jpg" />
        <div data-src="https://i.ibb.co/Yh0X6Sc/soccer-players-action-professional-stadium.jpg" />
        <div data-src="https://i.ibb.co/SvGZMLR/Capture.png" />
      </AutoplaySlider>
      <div className="divider text-black font-mono text-3xl my-12">Popular Classes</div>
      <PopularClass></PopularClass>
      <div className="divider text-black font-mono text-3xl my-12">Popular Instructor</div>
      <PopularInstructor></PopularInstructor>
      <div className="divider text-black font-mono text-3xl my-12">How to Overcome</div>
      <div className="flex justify-center">
      <ul className="steps steps-vertical lg:steps-horizontal" data-aos="fade-right">
        <li className="step step-primary m-2">Enroll Class</li>
        <li className="step step-primary m-2">BE Punctual</li>
        <li className="step step-primary m-2">Hard Work</li>
        <li data-content="✓" className="step step-neutral m-2 step-success">Success</li>
      </ul>
    </div>
    </div>
  );
};

export default Home;
