import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AlertState } from 'types/StoreTypes'

const initialState: AlertState = {
	text: '',
	show: false,
	timeout: 2000,
}

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		showAlert: (state, action: PayloadAction<string>) => {
			state.text = action.payload
			state.show = true
		},
		hideAlert: (state) => {
			state.show = false
		},
	},
})

export default alertSlice.reducer
export const { showAlert, hideAlert } = alertSlice.actions
