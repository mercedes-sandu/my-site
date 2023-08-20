import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
    StyledDarkMode,
    StyledIconButton,
    StyledLightMode,
    StyledLogo,
    StyledMenu,
    StyledNavBar,
} from "../../styles/NavBar";
import Resume from "../resume-mercedes-sandu.pdf";

function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

    // const theme = useTheme();

    function modeToggle(lightMode: boolean) {
        setIsLightMode(lightMode);
        console.log(`set mode to ${lightMode ? "light" : "dark"}`);
    }

    return (
        <StyledNavBar>
            <StyledLogo to="/" className="logo" aria-label="Mercedes Sandu">
                Mercedes Sandu
            </StyledLogo>
            <StyledIconButton 
                onClick={() => {
                    modeToggle(!isLightMode);
                }}
            >
                {isLightMode ? (
                    <StyledDarkMode />
                ) : (
                    <StyledLightMode />
                )}
            </StyledIconButton>
            <StyledIconButton 
                aria-label="menu"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <StyledMenu />
            </StyledIconButton>
            {/* <div 
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
            </div> */}
        </StyledNavBar>
    )
}

export default NavBar;
