import { FC, useEffect } from "react"
import BotItem from "../components/BotItem"
import HeaderComponent from "../components/HeaderComponent"
import SeeProductComponent from "../components/SeeProductComponent" 
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { IBasketItem } from "../models/IBasket"
import { filterAllItems, getAllItems } from "../store/ActionsCreators"

 
 

const Shop: FC = () => {
	const dispatch = useAppDispatch(),
		{productionItems, currentSelection} = useAppSelector(state => state.productsReducer)

	useEffect(() => {dispatch(getAllItems(productionItems))}, [productionItems, dispatch])
	 
	return (
		<section className="container">
			<HeaderComponent />
			<div className="shop__content">
				<div className="shop__selection">
					<button className={["shop__button-item", currentSelection === 'Today' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Today'))}>
						Today
					</button>
					<button className={["shop__button-item", currentSelection === 'Air Max 90' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 90'))}>
						Air Max 90
					</button>
					<button className={["shop__button-item", currentSelection === 'Air Max 95' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 95'))}>
						Air Max 95
					</button>

					<button className={["shop__button-item", currentSelection === 'Air Max 97' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 97'))}>
						Air Max 97
					</button>
					<button className={["shop__button-item", currentSelection === 'Air Max 270' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 270'))}>
						Air Max 270
					</button>
					<button className={["shop__button-item", currentSelection === 'Air Max 720' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 720'))}>
						Air Max 720
					</button>
					<button className={["shop__button-item", currentSelection === 'Air Max 98' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 98'))}>
						Air Max 98
					</button>
					<button className={["shop__button-item", currentSelection === 'Air Max 2090' ? 'activeShop' : ''].join(' ')} onClick={() => dispatch(filterAllItems('Air Max 2090'))}>
						Air Max 2090
					</button>
				</div>

			</div>

			<div className="shop__results">
				<p className="shop__results-length">{productionItems.length} results</p>
				<div className="shop__items">
					{productionItems.map((item: IBasketItem, i: number) => <BotItem description={item.description} sizes={item.sizes} colors={item.colors} price={item.price} subTitle={item.subTitle} title={item.title} url={item.url} key={i} />)}
					{productionItems.length === 0  && <div className="shop__items-loading-wrapper">
						<p className="shop__items-loading">Loading Products... </p>
						<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
					</div> }
				</div>

			</div>


			<SeeProductComponent />

			 
		</section>
	)
}
export default Shop