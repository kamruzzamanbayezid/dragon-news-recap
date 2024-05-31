import img1 from '../../assets/1.png';
import './Newses.css';
import { CiCalendarDate } from "react-icons/ci";

const Newses = () => {
      return (
            <div className='mb-5 flex flex-col w-full'>
                  <img src={img1} alt="" />
                  <h2 className='title'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                  <div className='flex items-center justify-between'>
                        <span className='sports'>Sports</span>
                        <span className='date flex items-center gap-1'><CiCalendarDate /> Jan 4, 2022</span>
                  </div>
            </div>
      );
};

export default Newses;