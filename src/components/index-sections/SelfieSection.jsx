import selfie from "../../assets/selfie-grayscale-transparent.png";
import "../../styles/components/index-sections/selfie-section.css";

const SelfieSection = () => {
    return (
        <section className="section section--selfie">
            <img src={selfie} />
        </section>
    );
};

export default SelfieSection;
