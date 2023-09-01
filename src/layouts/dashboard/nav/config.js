// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/dashboard/app',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'supplier_admin',
    path: '/dashboard/supplier_admin',
    icon: icon('ic_user'),
  },
  {
    title: 'transporter_admin',
    path: '/dashboard/transporter_admin',
    icon: icon('ic_user'),
  },
  {
    title: 'driver_admin',
    path: '/dashboard/driver_admin',
    icon: icon('ic_user'),
  },
  {
    title: 'order_admin',
    path: '/dashboard/order_admin',
    icon: icon('ic_user'),
  },
  {
    title: 'price_admin',
    path: '/dashboard/price_admin',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  {
    title: 'product_admin',
    path: '/dashboard/products_admin',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',  
  //   icon: icon('ic_blog'),
  // },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
