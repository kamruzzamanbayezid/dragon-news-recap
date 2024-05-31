import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../COmponents/Loading/Loading';

const PrivateRoute = ({ children }) => {

      const { user, isLoading } = useContext(AuthContext);
      const location = useLocation()

      if (isLoading) {
            return <Loading />
      }

      if (user) {
            return children;
      }

      return <Navigate to='/login' state={location?.pathname} />;
};

PrivateRoute.propTypes = {
      children: PropTypes.node
};

export default PrivateRoute;