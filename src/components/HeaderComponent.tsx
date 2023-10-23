import { ChangeEvent, FC } from "react"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { closeHeader, openHeader, searchProductions, setFocusInput, setSearchInput } from "../store/ActionsCreators"
import {IBasketItem} from "../models/IBasket";
import BotItem from "./BotItem";

const HeaderComponent: FC = () => {
	const dispatch = useAppDispatch(),
		{isOpenHeader, searchInp, focusInp} = useAppSelector(state => state.seeMoreReducer),
		{searchProductionItems} = useAppSelector(state => state.productsReducer)
	//utils dispatch
	const focusInpFunc = () => dispatch(setFocusInput(true)),
		inpChange = (e:ChangeEvent<HTMLInputElement> ) => dispatch(setSearchInput(e.target.value)),
		inpEnter = (e: any ) => {
			if(e.key === 'Enter') {
				dispatch(setSearchInput(''))
				dispatch(searchProductions(searchInp))
			}
		},
		searchSvg = () => focusInp && dispatch(searchProductions(searchInp)),
		openBurger = () => isOpenHeader ? dispatch(closeHeader())  : dispatch(openHeader())

	return (
		<header className="shop__header">
			<nav>
					<div className="shop__logo">
						<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 192.756 192.756"><g fillRule="evenodd" clipRule="evenodd"><path fill="#fff" fillOpacity="0" d="M0 0h192.756v192.756H0V0z" /><path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" /></g></svg>
					</div>
				<ul className={["shop__nav", isOpenHeader ? 'openHeader': ''].join(' ')}>
					 
					<li className="shop__search">
						<input type="text"   value={searchInp}
							   onFocus={focusInpFunc}
							   onChange={inpChange}
							   onKeyDown={inpEnter} className={["shop__search-target", focusInp ? 'focusInp' : ''].join(' ')}
							   placeholder="search..." />

						<svg onClick={searchSvg}
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							fill="none"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
						<div className={["shop__search-products", focusInp ? "productsView" : ""].join(' ')}>
							{searchProductionItems.map((product: IBasketItem, i: number) => <BotItem  description={product.description} sizes={product.sizes} colors={product.colors} price={product.price} subTitle={product.subTitle} title={product.title} url={product.url} key={i} />)}
						</div>
					</li>
					<li>
						<NavLink to='/'>MEN
							<div></div>
						</NavLink>
					</li>
					<li>
						<NavLink to='/woman'>WOMEN
							<div></div></NavLink>

					</li>
					<li>
						<NavLink to='/shop'>SHOP <div></div></NavLink>

					</li>
					<li>
						<NavLink to='/latest'>LATEST <div></div></NavLink>
					</li>
					<li className="basket">
						<NavLink to='/basket'>

							<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="20" height="20" viewBox="0 0 348.047 348.047"
							>
								<g>
									<g>
										<g>
											<g>
												<path d="M306.141,319.493c-2.021,8.564-10.877,15.572-19.676,15.572H61.584c-8.8,0-17.654-7.008-19.676-15.572L9.259,181.183
			c-2.021-8.565,3.524-15.572,12.324-15.572h304.882c8.799,0,14.346,7.007,12.324,15.572L306.141,319.493z"/>
											</g>
											<g>
												<g>
													<g>
														<path d="M100.497,306.062c-2.75-0.021-5.512-2.23-6.139-4.908L70.549,199.374c-0.626-2.678,1.111-4.844,3.861-4.812
					l8.487,0.098c2.75,0.031,5.512,2.248,6.139,4.925l23.795,101.717c0.626,2.679-1.111,4.851-3.861,4.828L100.497,306.062z"/>
													</g>
												</g>
												<g>
													<g>
														<path d="M247.551,306.062c2.75-0.021,5.512-2.23,6.139-4.908l23.809-101.779c0.627-2.678-1.109-4.844-3.859-4.812
					l-8.486,0.098c-2.75,0.031-5.512,2.248-6.139,4.925l-23.795,101.717c-0.627,2.679,1.109,4.851,3.859,4.828L247.551,306.062z"
														/>
													</g>
												</g>
												<g>
													<g>
														<path d="M183.023,300.599c0,2.75-2.25,5-5,5h-8c-2.75,0-5-2.25-5-5V199.505c0-2.75,2.25-5,5-5h8c2.75,0,5,2.25,5,5V300.599z"
														/>
													</g>
												</g>
											</g>
										</g>
										<path d="M341.465,109.093H304c-2.5,0-3.834-1.172-4.34-1.679l-92.393-92.391c-2.721-2.722-7.176-2.722-9.898,0l-7.071,7.071
	c-2.722,2.722-2.722,7.177,0,9.899l74.577,74.578c0,0,2.75,2.521-1.375,2.521c-45.438,0-134.212,0-180.624,0
	c-2.167,0-0.603-1.622-0.603-1.622l75.477-75.479c2.723-2.722,2.723-7.177,0-9.899l-7.072-7.07c-2.722-2.722-7.177-2.722-9.898,0
	l-92.393,92.392c-0.506,0.507-1.762,1.679-3.887,1.679H6.584c-4.4,0-7.294,3.53-6.432,7.845l3.862,19.311
	c0.863,4.314,5.169,7.845,9.569,7.845h320.882c4.398,0,8.705-3.53,9.568-7.845l3.861-19.311
	C348.758,112.623,345.863,109.093,341.465,109.093z"/>
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

						</NavLink>
					</li>
					 
				</ul>
				<div className="logo__right" onClick={openBurger}>
						<div></div>
						<div></div>
						<div></div>
					</div>
			</nav>
		</header>
	)
}
export default HeaderComponent