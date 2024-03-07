import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import home from '../images/home.svg'
import projects from '../images/projects.svg'
import essays from '../images/essays.svg'
import about from '../images/about.svg'
import contact from '../images/contact.svg'
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
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
    `)

    const { edges } = data.allMarkdownRemark;

    const Projects = edges
        .filter(edge => edge.node.frontmatter.type === 'project')

    const Essays = edges
        .filter(edge => edge.node.frontmatter.type === 'essay')

    return (
        <header className='header'>
            <div className='site-titles'>
                <h1 className='site-title'><Link to='/'>Wesley De Witt</Link></h1>
                <h2 className='site-subtitle'>Code & Words</h2>
            </div>

            <nav className='nav'>
                <Link className='nav-link' activeClassName='nav-link--active' to='/'>
                    <img className='nav-link__icon' src={home} alt='home-icon' />&nbsp;&nbsp;Home
                </Link>

                <Link className='nav-link' activeClassName='nav-link--active' to='/projects'>
                    <img className='nav-link__icon' src={projects} alt='projects-icon' />&nbsp;&nbsp;Projects&nbsp;&nbsp;<span className='nav-link__item-count'>{Projects.length}</span>
                </Link>

                <Link className='nav-link' activeClassName='nav-link--active' to='/essays'>
                    <img className='nav-link__icon' src={essays} alt='essays-icon' />&nbsp;&nbsp;Essays&nbsp;&nbsp;<span className='nav-link__item-count'>{Essays.length}</span>
                </Link>

                <Link className='nav-link' activeClassName='nav-link--active' to='/about'>
                    <img className='nav-link__icon' src={about} alt='about-icon' />&nbsp;&nbsp;About
                </Link>
                
                <Link className='nav-link' activeClassName='nav-link--active' to='/contact'>
                    <img className='nav-link__icon' src={contact} alt='contact-icon' />&nbsp;&nbsp;Contact
                </Link>
            </nav>
            
            <div className='buttons'>
                <button className='theme-button'><img src={sun} />&nbsp;&nbsp;|&nbsp;&nbsp;<img src={moon} />&nbsp;&nbsp;Mode</button>
            </div>
        </header>
    )
}

export default Header
