import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './component/home';

function App() {
  return (
  <>
<Router>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
</Routes>
</Router>

  </>
  );
}

export default App;
