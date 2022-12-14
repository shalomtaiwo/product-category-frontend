import React from "react";
import {Input } from "antd";

const { Search } = Input;

const Category = () => {
	const [searchCat, setSearchCat] = React.useState("");

	const onSearch = (value, e) => {
		e.preventDefault();
		setSearchCat(value);
	};

	return (
		<div>
			<div>
				<div>
					<Search
						placeholder="Search For Category"
						onSearch={onSearch}
						enterButton
						allowClear
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
