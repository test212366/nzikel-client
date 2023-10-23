import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBasketItem } from "../../models/IBasket"

interface SeeMoreState {
	isOpen: boolean
	isLogin: boolean
	isRegister:boolean
	isOpenAuth: boolean
	nextAuthT: boolean
	isOpenHeader: boolean
	item: IBasketItem | null
	searchInp: string
	focusInp: boolean
}
const initialState: SeeMoreState = {
	searchInp: '',
	focusInp: false,
	item: null,
	isLogin: false,
	isRegister: false,
	isOpen: false,
	nextAuthT: false,
	isOpenHeader:false,
	isOpenAuth: false,
}
export const SeeMoreSlice = createSlice({
	name: 'SeeMore',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.searchInp = action.payload
		},
		setFocus(state, action: PayloadAction<boolean>) {
			state.focusInp = action.payload
		},
		openHeader(state) {
			state.isOpenHeader = true
		},
		closeHeader(state) {
			state.isOpenHeader = false
		},
		authOpen(state) {
			state.isOpenAuth = true
		},
		authClose(state) {
			state.isOpenAuth = false
		},
		seeMoreOpen(state, action: PayloadAction<IBasketItem>) {
			state.isOpen = true
			state.item = action.payload
		},
		seeMoreClose(state) {
			state.isOpen = false
			state.item = null
		},
		seeLoginOpen(state) {
			state.isLogin = true
			state.nextAuthT = false
		},
		seeLoginClose(state) {
			state.isLogin = false
			state.nextAuthT = false
		},
		nextAuth(state) {
			state.nextAuthT = true
		},
		downAuth(state) {
			state.nextAuthT = false
		},
		registerOpen(state) {
			state.isRegister = true
		},
		registerClose(state) {
			state.isRegister = false
		}
	}
})
export default SeeMoreSlice.reducer