import React from "react";
import { Input } from "antd";
import { Card } from "antd";
import {  Empty } from "antd";
import axios from "axios";

const { Meta } = Card;
const { Search } = Input;

const Category = () => {
	const [searchCat, setSearchCat] = React.useState("");

	const onSearch = (value, e) => {
		e.preventDefault();
		setSearchCat(value);
	};

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

				<div className="dashboard_cat">
					{searchCat !== "" ? (
						<Card
							title={"ffdfd"}
							// key={'fdfdfd'}
						>
							<div className="dashboard_col">
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
									<Meta title={"ffdfdfd"} />
								</Card>
							</div>
						</Card>
					) : (
						<div className="empty_search">
                            <Empty
							image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
							imageStyle={{
								height: 60,
							}}
							description={
								<span>
									Start  <a href="#/">Searching</a>
								</span>
							}
						>
						</Empty>
                        </div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Category;
