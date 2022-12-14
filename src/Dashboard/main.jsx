import React from "react";
import axios from "axios";
import { Card } from "antd";

const { Meta } = Card;

const Main = () => {
	const [category, setCategory] = React.useState([]);

	const handleAllCategory = React.useCallback((url, category, product) => {
		axios
			.get(url, {
				params: {
					category: category,
					product: product,
				},
			})
			.then(function (response) {
				setCategory(response?.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);

	React.useEffect(() => {
		handleAllCategory("http://localhost:8000/api/category.php");
	}, [handleAllCategory]);

	return (
		<div className="dashboard_category">
			{category.map((cat, index) => {
				return (
					<Card
						title={cat?.name}
						key={index}
					>
						<div className="dashboard_col">
							{cat?.products.map((item, index) => {
								return (
									<Card
										hoverable
										style={{
											width: 240,
										}}
										cover={
											<img
												alt="example"
												src="https://via.placeholder.com/150"
											/>
										}
									>
										<Meta title={item?.name} />
									</Card>
								);
							})}
						</div>
					</Card>
				);
			})}
		</div>
	);
};

export default Main;
