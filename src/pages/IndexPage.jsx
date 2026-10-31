import CertificationsSection from "../components/index-sections/CertificationsSection";
import ProjectsSection from "../components/index-sections/ProjectsSection";
import SkillsSection from "../components/index-sections/SkillsSection";

const IndexPage = () => {
  return (
    <>
      <main className="main main--index-page">
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
      </main>
    </>
  );
};

export default IndexPage;
