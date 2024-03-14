import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import home from '../images/home.svg';
import projects from '../images/projects.svg';
import essays from '../images/essays.svg';
import about from '../images/about.svg';
import contact from '../images/contact.svg';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import searchIcon from '../images/search.svg';
import Nav from './Nav';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            slug
                            title
                            type
                        }
                    }
                }
            }
        }
    `);

    const { edges } = data.allMarkdownRemark;

    const Projects = edges.filter(
        (edge) => edge.node.frontmatter.type === 'project'
    );

    const Essays = edges.filter(
        (edge) => edge.node.frontmatter.type === 'essay'
    );

    return (
        <header className="header">
            <div className="site-titles">
                <h1 className="site-title">
                    <Link to="/">Wesley De Witt</Link>
                </h1>
                <h2 className="site-subtitle">
                    Code & prose out of Muncie, Indiana
                </h2>
            </div>

            <nav className="nav">
                <Link
                    className="nav-link"
                    activeClassName="nav-link--active"
                    to="/"
                >
                    <img
                        className="nav-link__icon"
                        src={home}
                        alt="home-icon"
                    />
                    Home
                </Link>

                <Link
                    className="nav-link"
                    activeClassName="nav-link--active"
                    to="/projects"
                >
                    <img
                        className="nav-link__icon"
                        src={projects}
                        alt="projects-icon"
                    />
                    Projects
                    <span className="nav-link__item-count">
                        {Projects.length}
                    </span>
                </Link>

                <Link
                    className="nav-link"
                    activeClassName="nav-link--active"
                    to="/essays"
                >
                    <img
                        className="nav-link__icon"
                        src={essays}
                        alt="essays-icon"
                    />
                    Essays
                    <span className="nav-link__item-count">
                        {Essays.length}
                    </span>
                </Link>

                <Link
                    className="nav-link"
                    activeClassName="nav-link--active"
                    to="/about"
                >
                    <img
                        className="nav-link__icon"
                        src={about}
                        alt="about-icon"
                    />
                    About
                </Link>

                <Link
                    className="nav-link"
                    activeClassName="nav-link--active"
                    to="/contact"
                >
                    <img
                        className="nav-link__icon"
                        src={contact}
                        alt="contact-icon"
                    />
                    Contact
                </Link>
            </nav>

            <div className="buttons">
                <button className="theme-button">
                    <img
                        className="theme-button__icon"
                        src={searchIcon}
                        alt="search-icon"
                    />
                    Search
                    <span>&#8984;+K</span>
                </button>

                <button className="theme-button">
                    <img
                        className="theme-button__icon"
                        src={sun}
                        alt="sun-icon"
                    />
                    <img
                        className="theme-button__icon"
                        src={moon}
                        alt="moon-icon"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
