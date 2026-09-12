import StudioIcon from "../svg/StudioIcon";
import "../../styles/components/index-sections/studio-section.css";

const StudioSection = () => {
  return (
    <section className="section section--studio">
      <h3 className="section__heading">
        <StudioIcon />
        Studio
      </h3>
      <div className="section__content"></div>
    </section>
  );
};

export default StudioSection;
