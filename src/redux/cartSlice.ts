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
	},
})

export default cartSlice.reducer
export const { pushCartItems } = cartSlice.actions
