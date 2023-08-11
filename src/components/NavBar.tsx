import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

    function modeToggle(lightMode: boolean) {
        setIsLightMode(lightMode);
        console.log(`set mode to ${lightMode ? "light" : "dark"}`);
    }

    return (
        <nav className="navigation">
            <a href="/" className="logo" aria-label="Mercedes Sandu">
                Mercedes Sandu
            </a>
            <IconButton sx={{ 
                marginLeft: "1rem",
                marginRight: "1rem",
                backgroundColor: "var(--background-alternate-1)",
                "&:hover": {
                    backgroundColor: "var(--background-alternate-2)",
                },
            }}
            onClick={() => {
                modeToggle(!isLightMode);
            }}>
                {isLightMode ? (
                    <DarkMode 
                        sx={{ 
                            color: "var(--text-color)"
                        }}
                    />
                ) : (
                    <LightMode 
                        sx={{ 
                            color: "var(--text-color)"
                        }}
                    />
                )}
            </IconButton>
            <button 
                className="hamburger" 
                aria-label="menu"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <Menu sx={{ color: 'var(--text-color)' }} />
            </button>
            <div 
                className={isNavExpanded 
                    ? "navigation-menu expanded"
                    : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/">Home</a>
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
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
