import AboutSection from "../components/index-sections/AboutSection";
import CertificationsSection from "../components/index-sections/CertificationsSection";
// import EssaysSection from "../components/index-sections/EssaysSection";
import PostsSection from "../components/index-sections/PostsSection";
import ProjectsSection from "../components/index-sections/ProjectsSection";
import SkillsSection from "../components/index-sections/SkillsSection";
import StudioSection from "../components/index-sections/StudioSection";

const IndexPage = () => {
  return (
    <>
      <main className="main main--index-page">
        {/* <AboutSection /> */}
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        {/* <StudioSection /> */}
        <PostsSection />
      </main>
    </>
  );
};

export default IndexPage;
