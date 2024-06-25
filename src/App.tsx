import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorElement } from './components';
import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct
} from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as checkoutLoader } from './pages/Checkout';

import { action as registerUser } from './pages/Register';
import { action as loginUser } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout/>,
		errorElement: <Error/>,

		children: [
			{
				index: true,
				element: <Landing/>,
				errorElement: <ErrorElement/>,
				loader: landingLoader,
			},
			{
				path: 'products',
				element: <Products/>,
				errorElement: <ErrorElement/>,
				loader: productsLoader,
			},
			{
				path: 'products/:id',
				element: <SingleProduct/>,
				errorElement: <ErrorElement/>,
				loader: singleProductLoader,
			},
			{
				path: 'cart',
				element: <Cart/>,
				errorElement: <ErrorElement/>,
			},
			{
				path: 'about',
				element: <About/>,
				errorElement: <ErrorElement/>,
			},
			{
				path: 'checkout',
				element: <Checkout/>,
				errorElement: <ErrorElement/>,
				loader: checkoutLoader(store),
				action: checkoutAction(store),
			},
			{
				path: 'orders',
				element: <Orders/>,
				errorElement: <ErrorElement/>,
			},
		],
	},
	{
		path: '/login',
		element: <Login/>,
		errorElement: <Error/>,
		action: loginUser(store),
	},
	{
		path: '/register',
		element: <Register/>,
		errorElement: <Error/>,
		action: registerUser
	},
]);

function App() {

	return <RouterProvider router={router}/>;
}

export default App;
