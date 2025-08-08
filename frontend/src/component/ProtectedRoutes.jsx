import { Navigate } from 'react-router-dom';
import { getToken , getUser } from '../utils/auth';

const ProtectedRoutes = ({ children, role }) => {
  const token = getToken();
  const user = getUser();

  const isLoggedIn = token && user;
  const hasRequiredRole = role ? user?.role === role : true;

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (!hasRequiredRole) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoutes;