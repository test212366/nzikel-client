import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IBasketItem, Sizes } from "../models/IBasket";
import { addBasketItem, addFavorities, CloseSeeMore } from "../store/ActionsCreators";

 

const SeeProductComponent:FC = () => {
	const [inBakset, setInBasket] = useState<boolean>(false),
		[like, setLike] = useState<boolean>(false),
		{ item, isOpen } = useAppSelector(state => state.seeMoreReducer),
		{ basket, favorities } = useAppSelector(state => state.basketReducer),
		dispatch = useAppDispatch()

	 
	useEffect(() => {
		setLike(false)
		setInBasket(false)
		favorities.forEach((itemI: IBasketItem) => {
			if(item?.title === itemI.title && item.titleTwoSpan === itemI.titleTwoSpan) return setLike(true)
		})
		basket.forEach((itemI: IBasketItem) => {
			if (item?.title === itemI.title && item.titleTwoSpan === itemI.titleTwoSpan) return setInBasket(true)
		})

	}, [isOpen, basket, favorities, item])

	//utils
	const closeBG = () => dispatch(CloseSeeMore()),
		likeProduct = () => {
			setLike(true)
			dispatch(addFavorities(item!))
		},
		addBasket = () => {
			dispatch(addBasketItem(item!))
			setInBasket(true)
		}

	return(
		<>
		<div className={["bg__see-shop", isOpen ? "" : 'closeBG'].join(' ')} onClick={closeBG}></div>
			<section className={['see__shop-item', isOpen ? '' : 'close'].join(' ')}>

				<img width='800px' height='450px' src={item?.sourseURL ? item?.sourseURL : item?.url} alt="see__shop-nike" />
				<div className="wrapper__see-shop-wr">
					<p className="see__shop-item-subtitle">{item?.subTitle}</p>
					<p className="see__shop-item-title">{item?.title}</p>
					<p className="see__shop-item-unik">DM8151-100</p>
					<div className="wrapper__see-shop">
						<p className="see__shop-item-price">{item?.price}$</p>
						<div className="see__shop-navig">
							<svg version="1.1" id="Capa_1" width='30px' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								viewBox="0 0 88.1 88.1"  >
								<g id="_x37_7_Essential_Icons_58_">
									<path id="Share" d="M69.05,58.1c-4.8,0-9.1,2.3-11.8,5.8l-24.3-14.1c1.5-3.7,1.5-7.8,0-11.5l24.3-14.1c2.7,3.5,7,5.8,11.8,5.8
		c8.3,0,15-6.7,15-15s-6.7-15-15-15s-15,6.7-15,15c0,2,0.4,4,1.1,5.7l-24.3,14.2c-2.8-3.5-7-5.8-11.8-5.8c-8.3,0-15,6.7-15,15
		s6.7,15,15,15c4.8,0,9.1-2.3,11.8-5.8l24.3,14.1c-0.7,1.7-1.1,3.7-1.1,5.7c0,8.3,6.7,15,15,15s15-6.7,15-15S77.35,58.1,69.05,58.1z
		 M69.05,4.1c6.1,0,11,4.9,11,11s-4.9,11-11,11c-6.1,0-11-4.9-11-11S62.95,4.1,69.05,4.1z M19.05,55.1c-6.1,0-11-4.9-11-11
		s4.9-11,11-11s11,4.9,11,11S25.15,55.1,19.05,55.1z M69.05,84.1c-6.1,0-11-4.9-11-11s4.9-11,11-11c6.1,0,11,4.9,11,11
		S75.15,84.1,69.05,84.1z"/>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
							</svg>
							<button disabled={like} className={["transparent", like ? "liked" : ''].join(' ')} onClick={likeProduct}>
							<svg version="1.1" id="Capa_1" width='30px' height='30px' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								viewBox="0 0 51.997 51.997"   >
								<path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"/>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
							</svg>
							</button>
							 
						</div>
					</div>
					<p className="see__shop-item-desc">
						{item?.description}
					</p>
					<p className="see__shop-ino">
						Mas information
					</p>
					<div className="see__shop-sizes">
						{item?.sizes.map((size: Sizes, i: number) => <div key={i} className="see__shop-sizes-item">
							{size.size}
						</div>)}


					</div>
					<button className="see__shop-add-basket" disabled={inBakset} onClick={addBasket}>
						{!inBakset ? 'ADD BASKET' : 'IN BASKET'}
					</button>
				</div>

			</section>
		</>
	)
}
export default SeeProductComponent