 
import { FC  } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponents from "./components/RouterComponents";
import { setupStore } from "./store/store";
import { Provider } from 'react-redux';
 
 
const store = setupStore()

const App: FC = () => {
	 
	return (
		<Provider store={store}>
			<Router>
				<RouterComponents />
			</Router>
		</Provider>


	)
}

export default App
