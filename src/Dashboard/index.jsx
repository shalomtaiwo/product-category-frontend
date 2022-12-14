import React, { useState } from "react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	HomeOutlined,
	ShoppingOutlined,
	ContainerOutlined,
} from "@ant-design/icons";

import { Layout, theme } from "antd";

import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
			>
				<div className="logo" />
				<div className="page_links">
					<NavLink
						to="home"
						style={({ isActive }) => ({
							color: isActive ? "blue" : "white",
							backgroundColor: isActive ? "white" : "transparent",
						})}
					>
						{collapsed ? <HomeOutlined /> : "Home"}
					</NavLink>

					<NavLink
						to="product"
						style={({ isActive }) => ({
							color: isActive ? "blue" : "white",
							backgroundColor: isActive ? "white" : "transparent",
						})}
					>
						{collapsed ? <ShoppingOutlined /> : "Products"}
					</NavLink>

					<NavLink
						to="category"
						style={({ isActive }) => ({
							color: isActive ? "blue" : "white",
							backgroundColor: isActive ? "white" : "transparent",
						})}
					>
						{collapsed ? <ContainerOutlined /> : "Categories"}
					</NavLink>
				</div>
			</Sider>
			<Layout className="site-layout">
				<Header
					style={{
						padding: 10,
						background: colorBgContainer,
					}}
				>
					<div>
						<div>
							{React.createElement(
								collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
								{
									className: "trigger",
									onClick: () => setCollapsed(!collapsed),
								}
							)}
						</div>
					</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: "100vh",
						height: "100%",
						background: colorBgContainer,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};
export default App;
