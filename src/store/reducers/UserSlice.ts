import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";

interface UserState {
	user: User | null
	accessToken: string
	refreshToken: string
	isAuth: boolean
	error: string
	isLoading: boolean
}

const initialState:UserState = {
	user: null,
	accessToken: '',
	refreshToken: '',
	isAuth: false,
	error: '',
	isLoading: false
}

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		initAuth(state, action: PayloadAction<UserState>) {
			state.accessToken = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken
			state.user = action.payload.user
			state.isAuth = action.payload.isAuth
			state.error = action.payload.error
		},
		errorAuth(state) {
			state.error = 'error email or pass'
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		}
		
	}
})
export default UserSlice.reducer