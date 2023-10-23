import { FC } from "react"
import AuthComponent from "../components/AuthComponent"
import BasketItemComponent from "../components/BasketItemComponent"
import FavoriteItemComponent from "../components/FavoriteItemComponent"
import HeaderComponent from "../components/HeaderComponent"
import SeeProductComponent from "../components/SeeProductComponent"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { IBasketItem } from "../models/IBasket"
import { logout, openAuth } from "../store/ActionsCreators"

const Basket: FC = () => {
	const { basket, favorities, price } = useAppSelector(state => state.basketReducer),
		{user, isLoading, refreshToken} = useAppSelector(state => state.userReducer),
		dispatch = useAppDispatch()

	//utils
	const logOut = () => dispatch(logout(refreshToken)),
		openAuthFunc = () => dispatch(openAuth())
 
	return (
		<section className="container">
			<HeaderComponent />
			{!isLoading ? user ?  <div className="basket__login">{user.isActivated ? user.email : "confirm email"}
			<div>
				<div className="basket__login-sub">
					<p>{user.email}</p>
					<button onClick={logOut}>logout</button>
				</div>
			</div>
			</div> :
				<button className="basket__login" onClick={openAuthFunc} >Login Account<svg viewBox="0 0 32 32" width='25px' xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 7" id="Layer_7"><path d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z" /></g></svg></button> : '' }
		 
			 <div className="basket__content">
				<div className="basket__items">
					<p className="basket__items-title">Basket</p>
					<p className="basket__items-results">Results: {basket.length}</p>
					<button className="basket__items-buy">${price} BUY ALL</button>
					{basket.map((item: IBasketItem, i: number) => <BasketItemComponent sourseURL={item.sourseURL || ''} colors={item.colors} heightIMG={item.heightIMG} description={item.description} price={item.price} sizes={item.sizes} subTitle={item.subTitle} title={item.title} url={item.url} key={i} />)}
					{basket.length === 0 && <p className="basket__items-none">ADD PRODUCTS...</p>}
				</div>
				<div className="basket__items-liked">
					<p className="basket__items-liked-title">Favorite</p>
					{favorities.length === 0 && <p className="basket__items-none">ADD FAVORITIES...</p> }
					{favorities.map((item: IBasketItem, i: number) => <FavoriteItemComponent sourseURL={item.sourseURL  } colors={item.colors} heightIMG={item.heightIMG} description={item.description} price={item.price} sizes={item.sizes} subTitle={item.subTitle} title={item.title} url={item.url} key={i} />)}
					 
				</div>
			</div>
			<SeeProductComponent />
			<AuthComponent />
		</section>
	)
}
export default Basket