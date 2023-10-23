import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketItem } from "../../models/IBasket";

const basketStr = localStorage.getItem('basket'),
	favoritiesStr = localStorage.getItem('favorities')

interface BasketState {
	basket: IBasketItem[]
	favorities: IBasketItem[]
	price: number
}
const initialState: BasketState = {
	basket: basketStr ? JSON.parse(basketStr) : [],
	favorities: favoritiesStr ? JSON.parse(favoritiesStr) : [],
	price: 0
}

export const BasketSlice = createSlice({
	name: 'Basket',
	initialState,
	reducers: {
		addBasket(state, action: PayloadAction<IBasketItem>) {
			const newBask:IBasketItem[] = [...state.basket, action.payload]
			localStorage.setItem('basket', JSON.stringify(newBask))
			state.basket = newBask
			state.price = 0
			state.basket.map((item: IBasketItem) => state.price += item.price)
		},
		addFavorities(state, action: PayloadAction<IBasketItem>) {
			const newFav:IBasketItem[] = [...state.favorities, action.payload]
			localStorage.setItem('favorities', JSON.stringify(newFav))
			state.favorities =  newFav
		},
		removeBasketItem(state, action: PayloadAction<string>) {
			const newBask:IBasketItem[] = state.basket.filter((item: IBasketItem) => item.title !== action.payload)
			localStorage.setItem('basket', JSON.stringify(newBask))
			state.basket = newBask
			state.price = 0
			state.basket.map((item: IBasketItem) => state.price += item.price)
		}
	}
})
export default BasketSlice.reducer