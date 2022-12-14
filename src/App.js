import "./App.css";
import Dashboard from "./Dashboard/index";
import { Route, Routes } from "react-router-dom";
import Main from "./Dashboard/main";
import Category from "./Dashboard/category";

function App() {
	return <>
		<Routes>
      <Route path="/me" element={<Dashboard />}>
        <Route path="home" element={<Main />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
	</>;
}

export default App;
