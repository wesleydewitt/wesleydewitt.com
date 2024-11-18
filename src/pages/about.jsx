import * as React from "react";
import Layout from "../layouts/Layout";
import "../styles/styles.scss";
import selfie from "../images/selfie.png";

const AboutPage = () => {
	return (
		<Layout>
			<div className="index-grid">
				<img className="selfie" src={selfie} />
			</div>
		</Layout>
	);
};

export default AboutPage;

export const Head = () => (
	<>
		<title>Wesley De Witt</title>
	</>
);
