import certifications from "../../_content/certifications.json";
import CertificationsIcon from "../svg/CertificationsIcon";
import "../../styles/components/index-sections/certifications-section.css";

const CertificationsSection = () => {
  return (
    <section className="section section--certifications">
      <h3 className="section__heading">
        <CertificationsIcon />
        Certifications
      </h3>
      <div className="section__content">
        {certifications.map((cert, index) => (
          <div key={index} className="certs-section__cert">
            <h4 className="certs-section__cert-name">{cert.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
