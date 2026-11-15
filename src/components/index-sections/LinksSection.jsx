import links from "../../_content/links.json";
import { Link } from "react-router-dom";
import "../../styles/components/index-sections/links-section.css";

const LinksSection = () => {
    return (
        <section className="section section--links">
            {links.map((link) => (
                <>
                    <div className="link__site-name">{link.linkSiteName}</div>
                    <Link className="link" to={link.linkUrl}>
                        {link.linkUsername}
                    </Link>
                </>
            ))}
        </section>
    );
};

export default LinksSection;
