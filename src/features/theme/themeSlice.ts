import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	name: 'theme slice',
};

const userSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {},
});

export default userSlice.reducer;