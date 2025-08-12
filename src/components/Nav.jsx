import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" activeClassName="active">
                Index
            </Link>
            <Link to="/bio" activeClassName="active">
                Bio
            </Link>
            <Link to="/projects" activeClassName="active">
                Projects
            </Link>
            <Link to="/essays" activeClassName="active">
                Essays
            </Link>
            <Link to="/photos" activeClassName="active">
                Photos
            </Link>
            <Link to="/poems" activeClassName="active">
                Poems
            </Link>
        </nav>
    );
};

export default Nav;
