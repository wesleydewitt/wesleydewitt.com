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
        {certifications.map((cert, index) => {
          let progressFillHeight = "0%";

          if (cert.studyStarted === true) {
            progressFillHeight = "33.333%";
          }

          if (cert.reviewStarted === true) {
            progressFillHeight = "66.666%";
          }

          if (cert.examPassed === true) {
            progressFillHeight = "100%";
          }

          return (
            <div key={index} className="certs-section__cert">
              <h4 className="cert__name">{cert.name}</h4>

              <p className="cert__description">{cert.description}</p>

              <div className="progress-block">
                <h4 className="progress-block__heading">Study Progress</h4>
                <div className="progress-block__bar">
                  <div
                    className="progress-block__bar__fill"
                    style={{ height: progressFillHeight }}
                  ></div>
                </div>
                <div className="progress-block__text">
                  <div>
                    Study ({cert.chaptersCompleted} of {cert.totalChapters}{" "}
                    chapters completed)
                  </div>
                  <div>Review for exam</div>
                  <div>Exam passed</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;
