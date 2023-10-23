import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/BasketSlice'
import seeMoreReducer from './reducers/OpenSeeMoreSlice'
import productsReducer from './reducers/ProductsSlice'
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
	basketReducer,
	seeMoreReducer,
	productsReducer,
	userReducer
})
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']