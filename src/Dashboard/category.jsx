import React from "react";
import { Card, Spin, Input, Empty } from "antd";
import useAxios from "axios-hooks";

const { Meta } = Card;
const { Search } = Input;

const Category = () => {
	const [searchCat, setSearchCat] = React.useState("");

	const onSearch = (value, e) => {
		e.preventDefault();
		setSearchCat(value.charAt(0).toUpperCase() + value.slice(1));
	};

	const [{ data, loading, error }] = useAxios(
		`http://localhost:8000/api/product.php?category=${searchCat}`
	);

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
						<div>
							<Card title={searchCat}>
								<div className="dashboard_col">
									{data?.map((product, index) => {
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
					) : (
						<div className="empty_search">
							<Empty
								image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
								imageStyle={{
									height: 60,
								}}
								description={
									<span>
										Start <a href="#/">Searching</a>
									</span>
								}
							></Empty>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Category;
