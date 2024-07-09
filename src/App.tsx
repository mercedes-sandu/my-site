import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

// TODO: remove these imports when mxrkdown parsing works
import PolygonalFolding from "./pages/projects/PolygonalFolding";
import Imaginarium from "./pages/projects/Imaginarium";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="about" element={<AboutPage darkMode={darkMode} />} />
          <Route
            path="portfolio"
            element={<PortfolioPage darkMode={darkMode} />}
          />
          {/* TODO: remove this when mxrkdown parsing works */}

          <Route
            path="portfolio/polygonal-folding"
            element={
              <PolygonalFolding
                darkMode={darkMode}
                projectKey="polygonal-folding"
              />
            }
          />
          <Route
            path="portfolio/imaginarium"
            element={
              <Imaginarium
                darkMode={darkMode}
                projectKey="imaginarium"
              />
            }
          />
          {/* TODO: uncomment below when mxrkdown parsing works */}
          {/* <Route
            path="/portfolio/:projectId"
            element={<ProjectPage darkMode={darkMode} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
