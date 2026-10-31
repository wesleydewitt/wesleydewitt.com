import { Link } from "react-router";
import "../styles/components/header.css";
import selfie from "../assets/selfie-grayscale-transparent.png";
import aboutText from "../_content/about.md?raw";
import ReactMarkdown from "react-markdown";
import EssaysIcon from "./svg/EssaysIcon";
import MenuIcon from "./svg/MenuIcon";
import Favicon from "./svg/Favicon";

const Header = ({ isIndexPage }) => {
  return (
    <header className="header">
      <h1 className="header__site-title">
        <Link to="/">Wesley De Witt</Link>
      </h1>

      <div className="header__selfie">
        <img src={selfie} alt="Wesley De Witt" />
      </div>

      {/* <h2 className="header__site-subtitle">
        Code, Design, Photography & Prose
      </h2> */}

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
