import Men from "../pages/Men"
import { IRouter } from "../models/IRouter"
import Woman from "../pages/Woman"
import Latest from "../pages/Latest"
import Basket from "../pages/Basket"
import Shop from "../pages/Shop"


export const publicRoutes: IRouter[] = [
	{ path: '/', element: Men },
	{ path: '/woman', element: Woman },
	{ path: '/latest', element: Latest },
	{ path: '/basket', element: Basket },
	{ path: '/shop', element: Shop },
]

export const privateRoutes: IRouter[] = [] 