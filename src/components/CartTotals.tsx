import { Card, CardTitle } from '@/components/ui/card';
import { useAppSelector } from '@/hooks';
import { formatAsDollars } from '@/utils';
import { Separator } from './ui/separator';

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
		(state) => state.cartState
	);

	return (
		<Card className='p-8 bg-muted'>
			<CartTotalRow label='Subtotal' amount={cartTotal} />
			<CartTotalRow label='Shipping' amount={shipping} />
			<CartTotalRow label='Tax' amount={tax} />
			<CardTitle className='mt-8'>
				<CartTotalRow label='Order Total' amount={orderTotal} lastRow />
			</CardTitle>
		</Card>
	);
};

type CartTotalRowProps = {
	label: string;
	amount: number;
	lastRow?: boolean;
}

function CartTotalRow({ label, amount, lastRow, }: CartTotalRowProps) {
	return (
		<>
			<p className='flex justify-between text-sm'>
				<span>{label}</span>
				<span>{formatAsDollars(amount)}</span>
			</p>
			{lastRow ? null : <Separator className='my-2' />}
		</>
	);
}

export default CartTotals;