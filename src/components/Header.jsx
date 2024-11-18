import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import selfie from "../images/selfie.png";
import home from "../images/home.svg";
import about from "../images/about.svg";
import contact from "../images/contact.svg";

const Header = () => {
	return (
		<header className="header">
			<img className="selfie" src={selfie} />

			<h1 className="site-title">
				<Link to="/">Wesley De Witt</Link>
			</h1>
			<h2 className="site-subtitle">Pretension &amp; Prose Out of Indianapolis</h2>
			<nav className="nav">
				<Link to="/">
					<img src={home} />
					<span>Index</span>
				</Link>
				<Link to="/about/">
					<img src={about} />
					<span>About</span>
				</Link>
				<Link to="/about/">
					<img src={contact} />
					<span>Contact</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
