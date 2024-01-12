// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Info from './Components/Info';
import Mapping from './Components/Mapping';
import Simulation from './Components/Simulation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/Mapping" component={Mapping} />
          <Route path="/Simulation" component={Simulation} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
