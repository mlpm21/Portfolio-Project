import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

// note:  Archived card labs (kept in src/me_draft_ver/) routes disabled
// const DraftShowcase = lazy(
//   () => import("./me_draft_ver/draft-project-cards/DraftShowcase")
// );
// const ProjectCardsLegacy = lazy(() => import("./me_draft_ver/ProjectCardsLegacy"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0F14]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route
            path="/projects/draft"
            element={
              <Suspense fallback={<PageFallback />}>
                <DraftShowcase />
              </Suspense>
            }
          />
          <Route
            path="/projects/legacy"
            element={
              <Suspense fallback={<PageFallback />}>
                <ProjectCardsLegacy />
              </Suspense>
            }
          /> */}
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
