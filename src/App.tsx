import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Error,
  Landing,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <SingleProduct /> },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  console.log(name);
  return <RouterProvider router={router} />;
}

export default App;
