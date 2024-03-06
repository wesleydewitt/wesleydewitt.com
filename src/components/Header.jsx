import React from 'react'
import { Link } from 'gatsby'
import home from '../images/home.svg'
import projects from '../images/projects.svg'
import essays from '../images/essays.svg'
import about from '../images/about.svg'
import contact from '../images/contact.svg'
import theme from '../images/theme.svg'
import moon from '../images/moon.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className='site-titles'>
                <h1 className='site-title'><Link to='/'>Wesley De Witt</Link></h1>
                <h2 className='site-subtitle'>Code & Words</h2>
            </div>
            <nav className='nav'>
                <Link className='nav-link' activeClassName='nav-link--active' to='/'>/&nbsp;&nbsp;Home</Link>
                <Link className='nav-link' activeClassName='nav-link--active' to='/projects'><img className='nav-link__icon' src={projects} />&nbsp;&nbsp;Projects</Link>
                <Link className='nav-link' activeClassName='nav-link--active' to='/essays'><img className='nav-link__icon' src={essays} />&nbsp;&nbsp;Essays</Link>
                <Link className='nav-link' activeClassName='nav-link--active' to='/about'><img className='nav-link__icon' src={about} />&nbsp;&nbsp;About</Link>
                <Link className='nav-link' activeClassName='nav-link--active' to='/contact'><img className='nav-link__icon' src={contact} />&nbsp;&nbsp;Contact</Link>
            </nav>
        </header>
    )
}

export default Header
