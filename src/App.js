import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Content from './Components/Contents'

function App() {
  return (
    <div>
      <Router>
        <Content/>
      </Router>
        
    </div>
  );
}

export default App;
