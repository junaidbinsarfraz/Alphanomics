import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [{ path: 'app', element: <DashboardApp /> }],
    },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);
}
