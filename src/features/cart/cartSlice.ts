import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	name: 'cart slice',
};
const userSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
});

export default userSlice.reducer;