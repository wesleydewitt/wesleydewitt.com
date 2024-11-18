import React from "react";
import Header from "../components/Header";

const IndexLayout = ({ children }) => {
	return (
		<div className="page">
			<Header />
			{children}
		</div>
	);
};

export default IndexLayout;
