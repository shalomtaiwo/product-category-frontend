import "./App.css";
import Dashboard from "./Dashboard/index";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Dashboard/main";
import Category from "./Dashboard/category";
import Product from "./Dashboard/product";

function App() {
	return (
		<>
			<Routes>
      <Route
					path="/"
					element={<Navigate to="/me/home" />}
				/>
				<Route
					path="/me"
					element={<Dashboard />}
				>
					<Route
						path="home"
						element={<Main />}
					/>
					<Route
						path="category"
						element={<Category />}
					/>
					<Route
						path="product"
						element={<Product />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
