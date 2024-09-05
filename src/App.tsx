import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMobileMediaQuery } from "./utility/responsive";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const isMobile = useMobileMediaQuery();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar
          darkMode={darkMode}
          isMobile={isMobile}
          setDarkMode={setDarkMode}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage darkMode={darkMode} isMobile={isMobile} />}
          />
          <Route
            path="about"
            element={<AboutPage darkMode={darkMode} isMobile={isMobile} />}
          />
          <Route
            path="portfolio"
            element={<PortfolioPage darkMode={darkMode} isMobile={isMobile} />}
          />
          <Route
            path="/portfolio/:projectId"
            element={<ProjectPage darkMode={darkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
