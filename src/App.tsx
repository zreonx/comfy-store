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
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';

// Actions

import { action as registerUser } from './pages/Register';
import { action as loginUser } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';

import { store } from './store';

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
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About />, errorElement: <ErrorElement /> },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: '/login',
    errorElement: <Error />,
    element: <Login />,
    action: loginUser(store),
  },
  {
    path: '/register',
    errorElement: <Error />,
    element: <Register />,
    action: registerUser,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
