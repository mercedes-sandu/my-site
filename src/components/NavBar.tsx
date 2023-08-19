import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Resume from "./resume-mercedes-sandu.pdf";

function NavBar(toggleMode: Function) {
    return (
        <>
            <nav className="navigation">
                <NavLink to="/" className="logo" aria-label="Mercedes Sandu">
                    Mercedes Sandu
                </NavLink>
                <IconButton sx={{ 
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    backgroundColor: "var(--background-alternate-1)",
                    "&:hover": {
                        backgroundColor: "var(--background-alternate-2)",
                    },
                }}
                onClick={() => {
                    toggleMode();
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
                    <Menu sx={{ color: "var(--text-color)" }} />
                </button>
                <div 
                    className={isNavExpanded 
                        ? "navigation-menu expanded"
                        : "navigation-menu"
                    }
                >
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
