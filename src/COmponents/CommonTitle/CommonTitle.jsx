import PropTypes from 'prop-types';
import './CommonTitle.css'

const CommonTitle = ({title}) => {
      return (
            <div>
                  <h2 className='title-style'>{title}</h2>
            </div>
      );
};

CommonTitle.propTypes = {
      title: PropTypes.string
};

export default CommonTitle;