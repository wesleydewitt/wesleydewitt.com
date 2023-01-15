import { useRouter } from 'next/router'
import NavLink from 'next/link'


export default function Header() {
    const router = useRouter();
    const currentRoute = router.pathname;
    
    return (
        <>
            <header className="header">
                <NavLink className="header__site-title" href="/">Wesley De&nbsp;Witt</NavLink>

                <NavLink className={currentRoute === "/" ? "header__nav-link header__nav-link--selected" : "header__nav-link"} href="/">Home</NavLink>
                <NavLink className={currentRoute === "/code" ? "header__nav-link header__nav-link--selected" : "header__nav-link"} href="/code/">Code</NavLink>
                <NavLink className={currentRoute === "/essays" ? "header__nav-link header__nav-link--selected" : "header__nav-link"} href="/essays/">Essays</NavLink>
                <NavLink className={currentRoute === "/photos" ? "header__nav-link header__nav-link--selected" : "header__nav-link"} href="/photos/">Photos</NavLink>
                {/*
                <a className='header__nav-link' href="https://github.com/wesleydewitt">GitHub&#x00A0;&#x2197;</a>
                <a className='header__nav-link' href="https://twitter.com/wesleydewitt">Twitter&#x00A0;&#x2197;</a>
                <a className='header__nav-link' href="https://twitter.com/wesleydewitt">Newsletter&#x00A0;&#x2197;</a>
                */}
                <NavLink className={currentRoute === "/about" ? "header__nav-link header__nav-link--selected" : "header__nav-link"} href="/about/">About</NavLink>
                <NavLink className={currentRoute === "/archive" ? "header__nav-link header__nav-link--selected" : "header__nav-link"} href="/archive/">Archive</NavLink>

                <button id="header__search-button" className="header__search-button">
                    <svg height="16" width="16">
                        <circle cx="6" cy="6" r="5" />
                        <line x1="10" y1="10" x2="15" y2="15" /> 
                    </svg> 
                </button>
                
                <button id="header__menu-button" className="header__menu-button">
                    <svg height="16" width="16">
                        <line x1="0" y1="3" x2="16" y2="3" />
                        <line x1="0" y1="8" x2="16" y2="8" />
                        <line x1="0" y1="13" x2="16" y2="13" />
                    </svg> 
                </button>
            </header>
        </>
    )
}