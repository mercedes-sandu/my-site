// import "./App.css";
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
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./Theme";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  function toggleMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
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
  )
}

export default App;
