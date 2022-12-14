import React from "react";
import { Select, Spin, Card, Input } from "antd";
import useAxios from "axios-hooks";

const { Meta } = Card;
const { Search } = Input;

const Product = () => {
	const [searchCat, setSearchCat] = React.useState("");
	const [searchItem, setSearchItem] = React.useState("");
	const [options, setOptions] = React.useState([]);

    const onSearch = (value, e) => {
		e.preventDefault();
		setSearchCat(value.charAt(0).toUpperCase() + value.slice(1));
	};
    

	const handleChange = (value) => {
		setSearchCat(value);
	};

	const [{ data: getProduct, loading, error }] = useAxios(
		`http://localhost:8000/api/product.php?category=${searchCat}&product=${searchItem}`
	);

	const [{ data: getCategory }] = useAxios(
		`http://localhost:8000/api/category.php`
	);

	React.useEffect(() => {
		// getCategory.forEach(element => {
		//     options.push({
		//         value: element.name,
		//         label: element.name,
		//     })
		// });
		let options = [];
		for (let index = 0; index < getCategory?.length; index++) {
			const element = getCategory[index];
			options.push({
				value: element?.name,
				label: element?.name,
			});
			setOptions(options);
		}
	}, [getCategory]);
	if (loading)
		return (
			<div>
				<Spin
					tip="Loading"
					size="large"
				>
					<div className="content" />
				</Spin>
			</div>
		);
	if (error) return <p>Error!</p>;

	return (
		<div>
			<Select
				defaultValue="Choose Category"
				style={{
					width: "100%",
				}}
				onChange={handleChange}
				options={options}
			/>

			<div className="dashboard_products">
				<Card title={searchCat}>
					<div className="dashboard_col">
						{getProduct?.map((product, index) => {
							return (
								<div key={index}>
									{!product?.name ? (
										<h5>Not found</h5>
									) : (
										<Card
											hoverable
											style={{
												width: 240,
											}}
											key={index}
											cover={
												<img
													alt="example"
													src="https://via.placeholder.com/150"
												/>
											}
										>
											<Meta title={product?.name} />
										</Card>
									)}
								</div>
							);
						})}
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Product;
