import React from "react";
import Header from "../components/Header";

const IndexLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="page">{children}</div>
		</>
	);
};

export default IndexLayout;
