import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart, Landing } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />
	},
	{
		path: '/cart',
		element: <Cart />
	}
]);

function App() {
	
	return <RouterProvider router={router} />;
}

export default App;
