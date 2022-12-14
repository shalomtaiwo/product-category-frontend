import "./App.css";
import axios from "axios";

function App() {

	const handleCategory = async () => {
		await axios
			.get("http://localhost:8000/api/category.php", {
				// params: {
				// 	category: "Furniture",
				// },
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};

	handleCategory();

	return <div className="App"></div>;
}

export default App;
