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

import { ErrorElement } from './components';
import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About />, errorElement: <ErrorElement /> },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      { path: 'orders', element: <Orders />, errorElement: <ErrorElement /> },
    ],
  },
  {
    path: '/login',
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: '/register',
    errorElement: <Error />,
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
