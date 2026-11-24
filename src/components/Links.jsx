import { Link } from "react-router-dom";
import "../styles/components/links.css";

const Links = () => {
    return (
        <div className="links">
            <Link className="links__link" to="/">
                Email <span>&#8599;</span>
            </Link>

            <Link className="links__link" to="/">
                Resume/CV <span>&#8595;</span>
            </Link>

            <Link className="links__link" to="/">
                Cover Letter <span>&#8595;</span>
            </Link>
        </div>
    );
};

export default Links;
