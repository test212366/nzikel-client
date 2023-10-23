import { FC, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useAppDispatch } from "../hooks/redux";
import { IRouter } from "../models/IRouter";
import { checkApiAuth } from "../store/ActionsCreators";
import { publicRoutes } from "../utils/routes";

const RouterComponents: FC = () => {
	const location = useLocation(),
		dispatch = useAppDispatch()
	
	useEffect(() => {
		if (localStorage.getItem('token')) dispatch(checkApiAuth())

	}, [  dispatch])

	return (
		<TransitionGroup component={null}>
			<CSSTransition key={location.key} in={true} timeout={300} classNames="page">
				<Routes>
					{publicRoutes.map((router: IRouter, i: number) => <Route key={i} path={router.path} element={<router.element />} />)}
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	)
}
export default RouterComponents