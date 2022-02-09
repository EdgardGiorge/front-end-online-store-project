import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ PrimeiraTela } />
      </BrowserRouter>
    </div>
  );
}

export default App;
