import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogLayout from "./pages/blog/BlogLayout.js";
import BlogHome from "./pages/blog/BlogHome.js";
import AboutMe from "./pages/blog/AboutMe.js";
import Articles from "./pages/blog/Articles.js";
import ArticleDetail from "./pages/blog/ArticleDetail.js";
import MainSections from "./MainSections.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSections />} />
   
        <Route path="/work" element={<MainSections />} />
        <Route path="/skills" element={<MainSections />} />
        <Route path="/contact" element={<MainSections />} />

        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
