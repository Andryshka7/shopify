import { ICartItem } from './../types/cartItem'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ICartItem[] = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		pushCartItems: (state, action: PayloadAction<ICartItem>) => {
			state.push(action.payload)
		},
		removeCartItem: (state, action: PayloadAction<number>) =>
			state.filter((item) => item.id !== action.payload),
	},
})

export default cartSlice.reducer
export const { pushCartItems, removeCartItem } = cartSlice.actions
