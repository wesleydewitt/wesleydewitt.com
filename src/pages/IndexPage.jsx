import CertificationsSection from "../components/index-sections/CertificationsSection";
import ProjectsSection from "../components/index-sections/ProjectsSection";
import SkillsSection from "../components/index-sections/SkillsSection";
import PostsSection from "../components/index-sections/PostsSection";

const IndexPage = () => {
    return (
        <>
            <main className="main main--index-page">
                {/* <ProjectsSection /> */}
                <CertificationsSection />
                <SkillsSection />
                <PostsSection />
            </main>
        </>
    );
};

export default IndexPage;
