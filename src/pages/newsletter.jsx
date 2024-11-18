import * as React from "react";
import Layout from "../layouts/Layout";
import "../styles/styles.scss";

const AboutPage = () => {
	return (
		<Layout>
			<div className="index-grid"></div>
		</Layout>
	);
};

export default AboutPage;

export const Head = () => (
	<>
		<title>About Wesley De Witt</title>
	</>
);
