import './Header.css'
import logo from '../../../src/assets/logo.png';
import moment from 'moment';

const Header = () => {
      return (
            <div className='my-7 flex flex-col items-center'>
                  <img src={logo} alt="" />
                  <p className='header-p'>Journalism Without Fear or Favour</p>
                  <p className='header-date'>{moment().format('dddd, MMMM D, yyyy')}</p>
            </div>
      );
};

export default Header;