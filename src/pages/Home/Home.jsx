import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const Home = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
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
        </div>
    );
};

export default Home;
