import { Link } from "react-router";
import "../styles/components/header.css";
import selfie from "../assets/selfie.png";
import aboutText from "../_content/about.md?raw";
import ReactMarkdown from "react-markdown";

const Header = ({ isIndexPage }) => {
  return (
    <header className="header">
      <h1 className="header__site-title">
        <Link to="/">Wesley De Witt</Link>
      </h1>
      <img className="header__selfie" src={selfie} alt="Wesley De Witt" />
      <h2 className="header__site-subtitle">
        Code, Design, Photography & Prose
      </h2>
      {isIndexPage ? (
        <>
          <div className="header__about">
            <ReactMarkdown>{aboutText}</ReactMarkdown>
          </div>
          <div className="header__links">
            <Link className="header__link header__link--email" to="/">
              <span className="header__link-label">Email</span>
              <span className="header__link-text">hello@wesleydewitt.com</span>
            </Link>
            <Link className="header__link header__link--github" to="/">
              <span className="header__link-label">GitHub</span>
              <span className="header__link-text">wesleydewitt</span>
            </Link>
            <Link className="header__link header__link--linkedin" to="/">
              <span className="header__link-label">LinkedIn</span>
              <span className="header__link-text">wesley-dewitt</span>
            </Link>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
