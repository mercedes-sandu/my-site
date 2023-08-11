import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <a href="/" className="logo" aria-label="Mercedes Sandu">
                Mercedes Sandu
            </a>
            <button 
                className="hamburger" 
                aria-label="menu"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <Menu sx={{ color: 'var(--text-color)' }} />
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <button>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
