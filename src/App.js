// App.js
import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Info from './Components/Info';
import Mapping from './Components/Mapping';
import Simulation from './Components/Simulation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Info" component={Info} />
          <Route path="/Mapping" component={Mapping} />
          <Route path="/Simulation" component={Simulation} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
