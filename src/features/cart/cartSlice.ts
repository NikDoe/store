import { toast } from '@/components/ui/use-toast';
import { type CartItem, type CartState } from '@/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultState: CartState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
	const cart = localStorage.getItem('cart');
	return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: getCartFromLocalStorage(),
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const newCartItem = action.payload;
			const item = state.cartItems.find(
				(i) => i.cartID === newCartItem.cartID
			);

			if (item) {
				item.amount += newCartItem.amount;
			} else {
				state.cartItems.push(newCartItem);
			}

			state.numItemsInCart += newCartItem.amount;
			state.cartTotal += Number(newCartItem.price) * newCartItem.amount;

			cartSlice.caseReducers.calculateTotals(state);
			
			toast({ description: 'Item added to cart' });
		},
		removeItem: () => {},
		editItem: () => {},
		clearCart: () => {},
		calculateTotals: (state) => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
		}
	},
});

export const {
	addItem,
	removeItem,
	editItem,
	clearCart
} = cartSlice.actions;

export default cartSlice.reducer;