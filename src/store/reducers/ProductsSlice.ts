import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketItem } from "../../models/IBasket";
 

interface ProductsState {
	payloadItems: IBasketItem[]
	productionItems: IBasketItem[]
	currentSelection: string
	searchProductionItems: IBasketItem[]
}

const initialState: ProductsState = {
	payloadItems: [],
	productionItems: [],
	searchProductionItems: [],
	currentSelection: 'Today'
}


export const ProductsSlide = createSlice({
	name: 'products',
	initialState,
	reducers: {
		clearSearchProductionItems(state) {
			state.searchProductionItems = []
		},
		setSearchProductionItems(state, action: PayloadAction<IBasketItem[]>) {
			state.searchProductionItems = action.payload
		},
	 	getPayloadItems(state, action: PayloadAction<IBasketItem[]> ) {

			state.payloadItems = action.payload
			state.productionItems = action.payload
		},
		filterProductionItems(state, action: PayloadAction<string>) {
			if(action.payload === 'Today') {
				state.productionItems = state.payloadItems
				state.currentSelection = 'Today'
			} 
			else {
				state.productionItems = state.payloadItems.filter((item: IBasketItem) => item.type === action.payload)
				state.currentSelection = action.payload
			}
		}
	}
}) 
export default ProductsSlide.reducer