import React from 'react';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
 return (
    <Router basename="/muhammad-huzaifa/">
      <div className="min-h-scree w-full bg-gray-900 lg:p-8 text-white">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/project/:id" element={ <ProjectDetails /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;