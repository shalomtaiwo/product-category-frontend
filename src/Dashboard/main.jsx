import React from "react";
import useAxios from "axios-hooks";
import { Card, Spin } from "antd";

const { Meta } = Card;

const Main = () => {

	const [{ data, loading, error }] = useAxios(
		"http://localhost:8000/api/category.php"
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
		<div className="dashboard_category">
			{data.map((cat, index) => {
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
                                        key={index}
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
