import { FC } from "react"
import { useAppDispatch } from "../hooks/redux"
import { Color, Sizes } from "../models/IBasket"
import { OpenSeeMore, removeBasketItem } from "../store/ActionsCreators"

interface BasketItemComponentProps {
	title: string
	subTitle: string
	price: number
	sizes: Sizes[]
	description: string
	colors: Color[]
	url: string
	heightIMG?: string
	sourseURL: string
}

const BasketItemComponent: FC<BasketItemComponentProps> = ({ colors, description, price, sizes, subTitle, title, url,heightIMG, sourseURL}) => {
	const dispatch = useAppDispatch()

	// dispatch redux
	const seeMoreModalOpen = () => dispatch(OpenSeeMore({ colors, description, price, sizes, subTitle, title, url, sourseURL})),
		deleteBasketItem = (e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation()
			dispatch(removeBasketItem(title))
		}


	return (
		<div className="basket__item" onClick={seeMoreModalOpen}>
			<div>
				<div className="image__wrapper">
					<img width={heightIMG ? '250px' : '370px'} height='165px' src={sourseURL ? sourseURL :url} alt="basketItemA" />
					<div className="image__wrapper-bg">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							width="50" viewBox="0 0 442.04 442.04"  >
							<g>
								<g>
									<path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
			c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
			c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
			c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
			c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
			c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
			c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
								</g>
								<g>
									<path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
			c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
			c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
			s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
								</g>
								<g>
									<path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
								</g>
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

					</div>


				</div>
				<section className="basket__item-section">
					<p className="basket__item-title">
						{title}
					</p>
					<p className="basket__item-subtitle">
						{subTitle}
					</p>
					<p className="basket__item-unik">
						DM8151-100
					</p>
					<p className="basket__item-desc">
						{description}
					</p>
				</section>

			</div>

			<section>
				<p className="basket__item-price">
					{price}$
				</p>
				<button className="basket__item-del" onClick={deleteBasketItem}>
					Delele Item
				</button>
			</section>


		</div>
	)
}
export default BasketItemComponent