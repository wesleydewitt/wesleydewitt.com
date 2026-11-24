import Header from "../components/Header";
import AboutSection from "../components/index-sections/AboutSection";
import AvailabilitySection from "../components/index-sections/AvailabilitySection";
import CertificationsSection from "../components/index-sections/CertificationsSection";
import LabNotesSection from "../components/index-sections/LabNotesSection";
import LinksSection from "../components/index-sections/LinksSection";
import SelfieSection from "../components/index-sections/SelfieSection";
import SkillsSection from "../components/index-sections/SkillsSection";
import "../styles/pages/index-page.css";

const IndexPage = () => {
    return (
        <div className="page page--index">
            <Header isIndexPage={true} />
            <main className="main main--index">
                <AboutSection />
                {/* <AvailabilitySection /> */}
                <SkillsSection />
                <CertificationsSection />
                <LabNotesSection />
            </main>
        </div>
    );
};

export default IndexPage;
