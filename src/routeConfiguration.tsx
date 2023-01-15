import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import ProjectsPage from '@pages/ProjectsPage/ProjectsPage';
import AuthenticationPage from '@pages/AuthenticationPage/AuthenticationPage';
import ProtectedRoute from '@templates/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import UsersPage from '@pages/User/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'projects',
            element: <ProjectsPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <AuthenticationPage loginPage />,
      },
      {
        path: '/signup',
        element: <AuthenticationPage loginPage={false} />,
      },
    ],
  },
]);

export default router;
