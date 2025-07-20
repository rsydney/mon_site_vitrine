import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CodeProjects from './pages/portfolio/CodeProjects';
import DesignProjects from './pages/portfolio/DesignProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/code" element={<CodeProjects />} />
        <Route path="/portfolio/design" element={<DesignProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
