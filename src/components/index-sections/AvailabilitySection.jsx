import { Link } from "react-router-dom";
import "../../styles/components/index-sections/availability-section.css";

const AvailabilitySection = () => {
    return (
        <section className="section section--availability">
            <h2 className="availability__indicator">
                <div className="availability__indicator__icon   "></div>
                Available for hire
            </h2>

            <div className="availability-block__content">
                <p>
                    I'm seeking a role as a Network Support Technician, Data
                    Center Technician, or Help Desk Technician. I have previous
                    IT experience, and I am a Cisco Certified Network Associate.
                </p>

                <Link className="section--availability__download-link">
                    Resume/CV &darr;
                </Link>

                <Link className="section--availability__download-link">
                    Cover Letter &darr;
                </Link>
            </div>
        </section>
    );
};

export default AvailabilitySection;
