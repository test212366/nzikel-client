import { FC, useEffect } from "react"

import BotItem from "../components/BotItem"
import HeaderComponent from "../components/HeaderComponent"
import SeeProductComponent from "../components/SeeProductComponent"

import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { IBasketItem } from "../models/IBasket"
import { getAllItems } from "../store/ActionsCreators"


const Latest: FC = () => {
	const dispatch = useAppDispatch(),
		{payloadItems} = useAppSelector(state => state.productsReducer)
	
	useEffect(() => {
		dispatch(getAllItems(payloadItems))
	} , [payloadItems, dispatch])
		
	return (
		<section className="container">
			<HeaderComponent />
			<div className="latest__content">
				<p className="latest__title">Latest Collection</p>
			 
				<div className="latest__items">

				<div className="shop__items">
				{payloadItems.map((item: IBasketItem, i: number) => <BotItem description={item.description} sizes={item.sizes} colors={item.colors} price={item.price} subTitle={item.subTitle} title={item.title} url={item.url} key={i} />)}
					{payloadItems.length === 0  && <div className="shop__items-loading-wrapper">
						<p className="shop__items-loading">Loading Products... </p>
						<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
					</div> }
				</div>
				</div>
			</div>
			<SeeProductComponent />
		</section>
	)
}
export default Latest