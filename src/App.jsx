import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectContextProvider from "./context/ProjectContextProvider";

import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <ProjectContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </ProjectContextProvider>
        </>
    );
}

export default App;
