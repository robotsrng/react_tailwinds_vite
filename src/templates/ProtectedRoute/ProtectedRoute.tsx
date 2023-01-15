import useAuth from '@hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = (props: {}) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user?.id) {
    return <Navigate to='/login' replace state={{ from: location.pathname }} />;
  }

  return <Outlet {...props} />;
};

export default ProtectedRoute;
