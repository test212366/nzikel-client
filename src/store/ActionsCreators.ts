
import axios from "axios";
import $api from "../hooks/http";
 
import { IBasketItem } from "../models/IBasket";
import { BasketSlice } from "./reducers/BasketSlice";
import  { SeeMoreSlice } from "./reducers/OpenSeeMoreSlice";
import { ProductsSlide } from "./reducers/ProductsSlice";
import { UserSlice } from "./reducers/UserSlice";
import { AppDispatch } from "./store";

export const addBasketItem = (item: IBasketItem) => (dispatch: AppDispatch) => dispatch(BasketSlice.actions.addBasket(item)),
		OpenSeeMore = (item: IBasketItem) => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.seeMoreOpen(item)),
		CloseSeeMore = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.seeMoreClose()),
		addFavorities = (item: IBasketItem) => (dispatch: AppDispatch) => dispatch(BasketSlice.actions.addFavorities(item)),
		removeBasketItem = (titleItem: string) => (dispatch: AppDispatch) => dispatch(BasketSlice.actions.removeBasketItem(titleItem)),
		getAllItems = (productionItems: any[]) => async (dispatch: AppDispatch) => {
			try {
				if(productionItems.length !== 0) return
				const response: any = await $api.get('product/getProduct')
				const products: IBasketItem[] = response.data
				dispatch(ProductsSlide.actions.getPayloadItems(products))
			} catch(e) {
				console.log(e)
				dispatch(ProductsSlide.actions.getPayloadItems([]))

			}

		},
		filterAllItems = (itemName: string) => (dispatch: AppDispatch) => dispatch(ProductsSlide.actions.filterProductionItems(itemName)),
		openLogin = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.seeLoginOpen()),
		closeLogin = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.seeLoginClose()),
		nextAuth = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.nextAuth()),
		downAuth = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.downAuth()),
		openRegister = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.registerOpen()),
		closeRegister = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.registerClose()),
		closeAuth = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.authClose()),
		openAuth = () => (dispatch: AppDispatch) => dispatch(SeeMoreSlice.actions.authOpen()),
		loginAPI = (email: string, password: string) => async (dispatch: AppDispatch) => {
			try {
				const responce = await $api.post('user/login', {email, password})
				localStorage.setItem('token', responce.data.accessToken)
				console.log(responce)
				dispatch(UserSlice.actions.initAuth({
					accessToken: responce.data.accessToken,
					refreshToken: responce.data.refreshToken,
					error: '',
					isAuth: true,
					user: responce.data.user,
					isLoading:false
				}))
				dispatch(SeeMoreSlice.actions.authClose())
			} catch (e: any) {
				dispatch(UserSlice.actions.errorAuth())
				console.log(e.responce?.data?.message)
			}
		},
		registerAPI = (email: string, password: string) => async (dispatch: AppDispatch) => {
			try {
				const responce = await $api.post('user/registration', {email, password})
				localStorage.setItem('token', responce.data.accessToken)

				dispatch(UserSlice.actions.initAuth({
					accessToken: responce.data.accessToken,
					refreshToken: responce.data.refreshToken,
					error: '',
					isAuth: false,
					user: responce.data.user,
					isLoading: false
				}))
				console.log(responce)
			} catch(e: any) {
				console.log(e.responce?.data?.message)
			}
		},
		logout = (refreshToken: string) => async (dispatch: AppDispatch) => {
			try {
				const responce = await $api.post('user/logout', {refreshToken} )
				console.log(responce)
				dispatch(UserSlice.actions.initAuth({
					accessToken: '',
					refreshToken: '',
					error: '',
					isAuth: false,
					user: null,
					isLoading: false
				}))
				localStorage.removeItem('token')
			} catch(e) {
				console.log(e)
			}
		},
		checkApiAuth = () => async (dispatch: AppDispatch) => {
			try {
				dispatch(UserSlice.actions.setLoading(true))
				const responce = await axios.get('http://localhost:5000/api/user/refresh', {
					withCredentials: true
				})
				localStorage.setItem('token', responce.data.accessToken)

				dispatch(UserSlice.actions.initAuth({
					accessToken: responce.data.accessToken,
					refreshToken: responce.data.refreshToken,
					error: '',
					isAuth: false,
					user: responce.data.user,
					isLoading: true
				}))
				console.log(responce)
				dispatch(UserSlice.actions.setLoading(false))

			} catch(e) {
				console.log(e)
			}
		},
		openHeader = () => (dispatch: AppDispatch) => {
			if(window.innerWidth < 801) dispatch(SeeMoreSlice.actions.openHeader())
		},
		closeHeader = () => (dispatch: AppDispatch) => {
			if(window.innerWidth < 801) dispatch(SeeMoreSlice.actions.closeHeader())
		},
		setSearchInput = (value: string) => (dispatch: AppDispatch) => {
			dispatch(SeeMoreSlice.actions.setSearch(value))
		},
		setFocusInput = (value:boolean) => (dispatch: AppDispatch) => {
			dispatch(SeeMoreSlice.actions.setFocus(value))
		},
		searchProductions = (value: string) => async (dispatch: AppDispatch) => {

			try {
			 	if(!value) return
				const responce = await $api.post('product/searchProduct', {
					titleProduct: value
				})

				dispatch(ProductsSlide.actions.setSearchProductionItems(responce.data))
			} catch(e) {
				console.log(e)
				dispatch(ProductsSlide.actions.setSearchProductionItems([]))
			}
		},
		clearSearchItems = () => (dispatch: AppDispatch) => {
			dispatch(ProductsSlide.actions.clearSearchProductionItems())
		}

