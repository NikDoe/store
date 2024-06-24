import { CartItemsList, CartTotals, SectionTitle } from '@/components';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/hooks';
import { Link } from 'react-router-dom';

const Cart = () => {
	// temp
	const user = null;

	const numItemsInCart = useAppSelector(
		(state) => state.cartState.numItemsInCart
	);

	if (numItemsInCart === 0) {
		return <SectionTitle text='Empty cart ☹️' />;
	}

	return (
		<>
			<SectionTitle text='Shopping Cart' />
			<div className='mt-8 grid gap-8  lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
				</div>
				<div className='lg:col-span-4 lg:pl-4'>
					<CartTotals />
					{
						user
							? (<ProceedToCheckoutButton text='Proceed to checkout' to='/checkout' />)
							: (<ProceedToCheckoutButton text='Please Login' to='/login' />)
					}
				</div>
			</div>
		</>
	);
};

export default Cart;

const ProceedToCheckoutButton = ({ text, to }: {text:string, to: string}) => {
	return <Button asChild className='mt-8 w-full'>
		<Link to={to}>{text}</Link>
	</Button>;
};