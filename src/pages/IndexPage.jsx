import Header from "../components/Header";
import AboutSection from "../components/index-sections/AboutSection";
import AvailabilitySection from "../components/index-sections/AvailabilitySection";
import LinksSection from "../components/index-sections/LinksSection";
import SelfieSection from "../components/index-sections/SelfieSection";

const IndexPage = () => {
    return (
        <div className="page page--index">
            <Header />
            <SelfieSection />
            <AboutSection />
            <LinksSection />
            <AvailabilitySection />
        </div>
    );
};

export default IndexPage;
