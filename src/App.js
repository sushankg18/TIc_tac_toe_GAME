import React from "react";
import "./App.scss";
import Board from "./components/Board";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Board />} />
        </Routes>
      </Router>
  );
};

export default App;
