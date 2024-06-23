import { type CartState } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

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

const userSlice = createSlice({
	name: 'cart',
	initialState: getCartFromLocalStorage(),
	reducers: {
		addItem: () => {},
		removeItem: () => {},
		editItem: () => {},
		clearCart: () => {},
		calculateTotals: () => {}
	},
});

export const {
	addItem,
	removeItem,
	editItem,
	clearCart
} = userSlice.actions;

export default userSlice.reducer;