import { FC } from "react"
import Slider from "react-slick"

import HeaderComponent from "../components/HeaderComponent"
import PrevButtonComponent from "../components/PrevButtonComponent"
import NextButtonComponent from "../components/NextButtonComponent"
import SeeProductComponent from "../components/SeeProductComponent"
import { IBasketItem } from "../models/IBasket"

import { useAppDispatch} from "../hooks/redux"
import { OpenSeeMore } from "../store/ActionsCreators"

const localTemp:IBasketItem[] = [
	{
		colors: [],
		description: 'The model provides excellent cushioning.',
		price: 379,
		sizes: [],
		subTitle: 'NEW GENERATION',
		title: 'AIR',
		classIMG: 'menF',
		titleTwoSpan: 'MAX',
		heightIMG: '1000px',
		url: 'https://res.cloudinary.com/dnurycr3q/image/upload/v1657191999/one_buiuxo.png',
		sourseURL: 'https://krossobzor.ru/wp-content/uploads/2019/06/nike-air-max-720-metallic-silver-black-c1ae-main.jpg'
	},
	{
		colors: [],
		description: 'The model provides excellent cushioning.',
		price: 326,
		sizes: [],
		classIMG: 'leBorn',
		subTitle: 'Soldier 9',
		title: 'Le',
		titleTwoSpan: 'Bron',
		heightIMG: '650px',
		url: 'https://res.cloudinary.com/dnurycr3q/image/upload/v1657191999/two_neiqel.png',
		sourseURL: 'https://i.pinimg.com/originals/f8/5c/dc/f85cdc7facb872d776c7fe307c0d5d7b.jpg'
	},
	{
		colors: [],
		description: 'The model provides excellent cushioning.',
		price: 124,
		sizes: [],
		subTitle: 'Soldier 9',
		title: 'NIKE',
		titleTwoSpan: 'X',
		classIMG: 'leBorn',
		heightIMG: '700px',
		url: 'https://res.cloudinary.com/dnurycr3q/image/upload/v1657191999/four_mxonzs.png',
		sourseURL: 'https://nike-shop.by/image/cache/951e1f2a18c670b51755367d9665bea8.jpg'
	},
	{
		colors: [],
		description: 'The model provides excellent cushioning.',
		price: 79,
		sizes: [],
		subTitle: 'Factory Outlet',
		title: 'NIKE',
		titleTwoSpan: 'PG 1',
		classIMG: 'TBS',
		heightIMG:'650px',
		url: 'https://res.cloudinary.com/dnurycr3q/image/upload/v1657191999/tree_p9ihg2.png',
		sourseURL: 'https://static.auction.ru/offer_images/cmn8/2019/03/11/12/big/P/pPTKC92LN4q/krossovki_nike_pg_1.jpg'
	}
]


const Men: FC = () => {
	const dispatch = useAppDispatch()


	return (
		<section className="container">
			<HeaderComponent />
			<article className="men__collection">
				<p className="men__background-p">NIKE</p>
				<div className="content">
					<Slider {...{
						speed: 700,
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						prevArrow: <PrevButtonComponent />,
						nextArrow: <NextButtonComponent />,
						autoplay: false,
						autoplaySpeed: 3000
					}}>
						{localTemp.map((itemI: IBasketItem, i:number) => <div key={i}  >
							<section className="men__collection-left">
								<h1>
									<span>{itemI.title}</span>{itemI.titleTwoSpan}
								</h1>
								<p className="men-collection-right-gen">
									{itemI.subTitle}
								</p>
								<p className="men-collection-right-desc">
									{itemI.subTitle}
								</p>
								<button className="men-collection-right-add-basket" onClick={() => dispatch(OpenSeeMore(itemI))}>
									<p>Add to basket</p>
									+
								</button>
							</section>
							<img className={itemI.classIMG} src={itemI.url} height={itemI.heightIMG} alt="nike" />
							<section className="men__collection-right">
								<h4>
									${itemI.price}
								</h4>
								<div className="men__collection-right-sizes">
									<div className="select-size">
										SIZE
										<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
											width="12px" height="12px" viewBox="0 0 284.929 284.929"
										>
											<g>
												<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
											</g>

										</svg>
									</div>
									<div className="select-color">
										COLOR
										<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
											width="12px" height="12px" viewBox="0 0 284.929 284.929"
										>
											<g>
												<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
											</g>

										</svg>
									</div>
									<div className="UK">
										UK 9
									</div>
									<div className="btn">

									</div>
								</div>
								<p className="men__collection-right-buy" onClick={() => dispatch(OpenSeeMore(itemI))}>
									BUY NOW
								</p>
							</section>
						</div>)}
						 



					</Slider>

					<SeeProductComponent />
				</div>

			</article>
			<footer>
				<div className="social">
					<a href="!#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27px" height="27px"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z" /></svg>
					</a>
					<a href="!#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="27px" height="27px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg>

					</a>
					<a href="!#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27px" height="27px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" /></svg>

					</a>
				</div>
			</footer>
		</section>
	)
}
export default Men