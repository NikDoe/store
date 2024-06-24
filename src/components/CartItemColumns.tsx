import { editItem, removeItem } from '@/features/cart/cartSlice';
import { useAppDispatch } from '@/hooks';
import { formatAsDollars } from '@/utils';
import SelectProductAmount, { Mode } from './SelectProductAmount';
import { Button } from './ui/button';

type FirstColumnProps = {
	image: string;
	title: string;
}

export const FirstColumn = ({ image,title, }: FirstColumnProps) => {
	return (
		<img
			src={image}
			alt={title}
			className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
		/>
	);
};

type SecondColumnProps = {
	title: string;
	company: string;
	productColor: string;
}

export const SecondColumn = ({ title,company,productColor }: SecondColumnProps) => {
	return (
		<div className='sm:ml-4 md:ml-12 sm:w-48'>
			<h3 className='capitalize font-medium'>{title}</h3>
			<h4 className='mt-2 capitalize text-sm'>{company}</h4>
			<p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
				color :
				<span
					style={{
						width: '15px',
						height: '15px',
						borderRadius: '50%',
						backgroundColor: productColor,
					}}
				></span>
			</p>
		</div>
	);
};

type ThirdColumnProps = {
	amount: number;
	cartID: string;
}

export const ThirdColumn = ({ amount,cartID }: ThirdColumnProps ) => {
	const dispatch = useAppDispatch();

	const removeItemFromTheCart = () => {
		dispatch(removeItem(cartID));
	};

	const setAmount = (value: number) => {
		dispatch(editItem({ cartID, amount: value }));
	};

	return (
		<div>
			<SelectProductAmount
				amount={amount}
				setAmount={setAmount}
				mode={Mode.CartItem}
			/>
			<Button variant='link' className='-ml-4' onClick={removeItemFromTheCart}>
				remove
			</Button>
		</div>
	);
};

type FourthColumnProps = {
	price: string
}

export const FourthColumn = ({ price }: FourthColumnProps) => {
	return <p className='font-medium sm:ml-auto'>{formatAsDollars(price)}</p>;
};