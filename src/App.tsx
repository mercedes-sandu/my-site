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
import NavBar from "./components/navbar/NavBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/polygonal-folding" element={<PolygonalFolding />} />
          <Route path="portfolio/imaginarium" element={<Imaginarium />} />
          <Route path="portfolio/intervallic" element={<Intervallic />} />
          <Route path="portfolio/songlybot" element={<SonglyBot />} />
          <Route path="portfolio/papas-what-is-going-on-eria" element={<PapasWhatIsGoingOnEria />} />
          <Route path="portfolio/zendog" element={<ZenDog />} />
          <Route path="portfolio/catsat" element={<CatSAT />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
