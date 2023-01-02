import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage/LandingPage';
import TestPage from '@pages/TestPage/TestPage';
import ProjectsPage from '@pages/ProjectsPage/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
    ],
  },
]);

export default router;
