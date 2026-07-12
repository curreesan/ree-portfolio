import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/global.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
