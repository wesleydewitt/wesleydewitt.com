import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="page">{children}</div>
		</>
	);
};

export default Layout;
