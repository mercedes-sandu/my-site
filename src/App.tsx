import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import PolygonalFolding from "./pages/projects/PolygonalFolding";
import Imaginarium from "./pages/projects/Imaginarium";
import Intervallic from "./pages/projects/Intervallic";
import SonglyBot from "./pages/projects/SonglyBot";
import PapasWhatIsGoingOnEria from "./pages/projects/PapasWhatIsGoingOnEria";
import ZenDog from "./pages/projects/ZenDog";
import CatSAT from "./pages/projects/CatSAT";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { createContext, useContext } from "react";
import { ThemeProvider, useTheme } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="polygonal-folding" element={<PolygonalFolding />} />
            <Route path="imaginarium" element={<Imaginarium />} />
            <Route path="intervallic" element={<Intervallic />} />
            <Route path="songlybot" element={<SonglyBot />} />
            <Route path="papas-what-is-going-on-eria" element={<PapasWhatIsGoingOnEria />} />
            <Route path="zendog" element={<ZenDog />} />
            <Route path="catsat" element={<CatSAT />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
