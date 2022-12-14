import React from "react";
import { Select, Card, Input, Result } from "antd";
import useAxios from "axios-hooks";
import { SmileOutlined } from "@ant-design/icons";

const { Search } = Input;

const Product = () => {
	const [searchCat, setSearchCat] = React.useState("");
	const [searchItem, setSearchItem] = React.useState("");
	const [options, setOptions] = React.useState([]);
	const [afterSearch, setAfterSearch] = React.useState(true);

	const onSearch = (value, e) => {
		e.preventDefault();
		setSearchItem(value.charAt(0).toUpperCase() + value.slice(1));
	};

	const handleChange = (value) => {
		setAfterSearch(false);
		setSearchCat(value);
	};

	const [{ data: getProduct }] = useAxios(
		`http://localhost:8000/api/exist.php?category=${searchCat}&product=${searchItem}`
	);

	const [{ data: getCategory }] = useAxios(
		`http://localhost:8000/api/category.php`
	);

	React.useEffect(() => {
		let newOptions = [];
		for (let index = 0; index < getCategory?.length; index++) {
			const element = getCategory[index];
			const opt = {
				value: element?.name,
				label: element?.name,
			};
			newOptions.push(opt);
		}

		setOptions(newOptions);
	}, [getCategory]);

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
			<div className="product_search">
				<Search
					placeholder="Check Product in Selected Category"
					onSearch={onSearch}
					enterButton
					allowClear
					disabled={afterSearch ? true : false}
				/>
			</div>

			<div className="dashboard_products">
				<Card title={searchCat}>
					<div className="result_">
						<h1>
							{getProduct === true && (
								<Result
									icon={<SmileOutlined />}
									title={`Great, ${searchItem} exist in the Category!`}
								/>
							)}

							{getProduct === false && (
								<Result
									status="404"
									title="Product Not found/ Empty Category"
								/>
							)}
						</h1>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Product;
