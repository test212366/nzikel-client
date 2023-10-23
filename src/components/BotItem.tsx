import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Color, IBasketItem, Sizes } from "../models/IBasket"
import {addFavorities, clearSearchItems, OpenSeeMore, setFocusInput} from "../store/ActionsCreators"

interface BotItemProps {
	title: string
	subTitle: string
	price: number
	colors: Color[]
	url: string
	description: string
	sizes: Sizes[]
}


const BotItem: FC<BotItemProps> = ({ title, subTitle, colors, price, url, description, sizes }) => {
	// get state in redux
	const dispatch = useAppDispatch(),
		{favorities} = useAppSelector(state => state.basketReducer),
		{focusInp} = useAppSelector(state => state.seeMoreReducer),
		[like, setLike] = useState<boolean>(false)

	useEffect(() => {
		// check liked product
		favorities.forEach((item: IBasketItem) => {
			if(item.title === title) return setLike(true)
		})
	}, [favorities,title, dispatch])

	// utils func
	const seeMoreProductFunc = () => {
		if(focusInp) {
			dispatch(setFocusInput(false))
			dispatch(clearSearchItems())
		}
		dispatch(OpenSeeMore({ colors, description, price, sizes, subTitle, title, url }))
		},
		likeProductFunc = (e: React.MouseEvent<HTMLElement>) => {
			e.stopPropagation()
			setLike(true)
			dispatch(addFavorities({ title, subTitle, colors, price, url, description, sizes }))
		}
	 
	return (
		<div className="shop__item" onClick={seeMoreProductFunc}>
			<img src={url} width='210px' height='144px' alt="nikeSn" />
			<h3 className="shop__item-title">{title}</h3>
			<p className="shop__item-subtitle">{subTitle}</p>
			<p className="shop__item-price">${price}</p>
			<p className="shop__items-colors"> <span>{colors.length}</span> colors</p>
			<button disabled={like} className={["like", like ? "liked" : ""].join(' ')} onClick={likeProductFunc}>
				<svg version="1.1" id="Capa_1" width='20px' height='20px' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
			<svg className='seeMore' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="21px" height="21px" viewBox="0 0 284.929 284.929"
			>
				<g>
					<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
				</g>

			</svg>
		</div>
	)
}
export default BotItem