import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="sports"  country="in" category="sports" />} />
            <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
