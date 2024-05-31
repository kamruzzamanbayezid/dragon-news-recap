import Marquee from "react-fast-marquee";
import './Slider.css'

const Slider = () => {
      return (
            <div className="flex items-center gap-6 slider">
                  <button className="slider-btn">Latest</button>
                  <Marquee pauseOnHover={true}>
                        <p className="mr-6">I can be a React component, multiple React components, or just some text.</p>
                        <p className="mr-6">I can be a React component, multiple React components, or just some text.</p>
                        <p className="mr-6">I can be a React component, multiple React components, or just some text.</p>
                  </Marquee>
            </div>
      );
};

export default Slider;