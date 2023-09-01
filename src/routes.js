import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import SupplierPage from './pages/SupplierPage';
import ProductAdminPage from './pages/ProductAdminPage';
import PriceAdminPage from './pages/PriceAdminPage';
import DriverAdminPage from './pages/DriverAdminPage';
import TransporterAdminPage from './pages/TransporterPage';
import OrderAdminPage from './pages/OrderAdminPage';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        { path: 'products_admin', element: <ProductAdminPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'supplier_admin', element: <SupplierPage /> },
        { path: 'driver_admin', element: <DriverAdminPage /> },
        { path: 'transporter_admin', element: <TransporterAdminPage /> },
        { path: 'price_admin', element: <PriceAdminPage /> },
        { path: 'order_admin', element: <OrderAdminPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
