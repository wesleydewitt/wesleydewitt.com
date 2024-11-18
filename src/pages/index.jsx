import * as React from "react";
import "../styles/styles.scss";
import Layout from "../layouts/Layout";
import AboutSection from "../components/index-sections/AboutSection";
import LongFormSection from "../components/index-sections/LongFormSection";
import DailyWritingSection from "../components/index-sections/DailyWritingSection";
import NewsletterSection from "../components/index-sections/NewsletterSection";
import ContactSection from "../components/index-sections/ContactSection";
import FeaturedPhotosSection from "../components/index-sections/FeaturedPhotosSection";
import IndexLayout from "../layouts/IndexLayout";

const IndexPage = () => {
	return (
		<IndexLayout>
			<div className="index-grid">
				<AboutSection />
				<LongFormSection />
				{/* <FeaturedPhotosSection /> */}
				<DailyWritingSection />
			</div>
		</IndexLayout>
	);
};

export default IndexPage;

export const Head = () => (
	<>
		<title>Wesley De Witt</title>
	</>
);
