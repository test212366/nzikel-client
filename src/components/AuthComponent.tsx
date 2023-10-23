import { FC } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { closeAuth, closeLogin, closeRegister, downAuth, loginAPI, nextAuth, openLogin, openRegister, registerAPI } from "../store/ActionsCreators"


const AuthComponent:FC = () => {
	//get state and get react hook form
	const {isLogin, nextAuthT, isRegister, isOpenAuth} = useAppSelector(state => state.seeMoreReducer),
		{error,user} = useAppSelector(state => state.userReducer),
		{register, formState: {errors, isValid},
		reset,
		handleSubmit} = useForm({mode: 'onBlur'}),
		dispatch = useAppDispatch()

	// submit login or register in auth component
	const onSubmit = (data: any) => {
		if(!isRegister) dispatch(loginAPI(data.email, data.password))
		else dispatch(registerAPI(data.email, data.password))
	}
	// close or open modals
	const closeAuthFunc = () => dispatch(closeAuth()),
		openLoginFunc = () => dispatch(openLogin()),
		openRegisterFunc = () => dispatch(openRegister()),
		backAuthFunc = () => dispatch(downAuth()),
		closeAuthModalFunc = () => {
			dispatch(closeLogin())
			isRegister && dispatch(closeRegister())
			reset()
		}

	return (
		<>
			 
			<div className={["auth__bg", !isOpenAuth ? 'auth__bg-close': '' ].join(' ')} onClick={closeAuthFunc}></div>
			<section className={["auth__wrapper", !isOpenAuth ? "auth__wrapper-close" : ""].join(' ')}>
				<p className="auth__title">Register or login account</p>
				
				<div className="auth__content">
					<button className="auth__button-login" onClick={openLoginFunc}>
						login
					</button>
					<button className="auth__button-register" onClick={openRegisterFunc}>
						register
					</button>
					<button className="auth__button-google">
						login in google
					</button>
				</div>
				<small>register to use full features</small>
				<section className={["auth__login", !isLogin && !isRegister ? 'close' : '', nextAuthT && 'nextAuth'].join(' ')}>
				<button className="auth__close" onClick={closeAuthModalFunc}>
							<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="15px" height="15px" viewBox="0 0 284.929 284.929"
					>
						<g>
							<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
		c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
		c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
						</g>

					</svg>
				</button>
					<div className="auth__login-container" >
						 <form onSubmit={e => e.preventDefault()}>
							<p className="auth__title">{isRegister ? 'register account' :'Login account'}</p>
								<input className="auth__input"  type="email" placeholder="emit email..." {...register('email' )}/>
						 
							<button className="auth__button-next" onClick={() => dispatch(nextAuth())}> {isRegister ? 'confirm email' : 'next'}</button>
						 </form>
					</div>
				</section>
				<section className={["auth__login",  nextAuthT ? '' : 'close'].join(' ')}>
				<button className="auth__close" onClick={backAuthFunc}>
							<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="15px" height="15px" viewBox="0 0 284.929 284.929"
					>
						<g>
							<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
		c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
		c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
						</g>

					</svg>
							</button>
				<div className="auth__login-container" >
						<form>
							 {user ? <p>confirm email</p> :<>
							 <p className="auth__title">emit password</p>
							 <p className="auth__error">{errors?.password?.message}</p>
							 <p className="auth__error">{errors?.email?.message || error}</p>
							  
							 <input className="auth__input" type="email" placeholder="emit password..."
									{...register('password', {
							 		required: 'required input',
									 minLength: {
										 value: 4,
										 message: 'password is desenie 8'
									 }
							 })}/>
							 <button className="auth__button-next" type="submit" onClick={handleSubmit(onSubmit)} disabled={!isValid} > {isRegister ? 'register and activate email' : 'login'}</button>
						 
							 </>
							 }
							 </form>
					</div>
				</section>
			</section>
		</>
	)
}
export default AuthComponent