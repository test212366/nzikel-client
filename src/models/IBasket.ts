export interface Sizes {
	size: number
}
export interface Color {
	color: string
}

export interface IBasketItem {
	type?: string
	titleTwoSpan?: string
	heightIMG?: string
	classIMG?: string
	sourseURL?: string  
	title: string
	subTitle: string
	price: number
	sizes: Sizes[]
	description: string
	colors: Color[]
	url: string
}