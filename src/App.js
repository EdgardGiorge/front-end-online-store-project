import React from 'react';
<<<<<<< HEAD
=======
import { Route, BrowserRouter } from 'react-router-dom';
>>>>>>> 110946b3b16afe7b0109e59f12f0e456d915d175
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';

function App() {
  return (
<<<<<<< HEAD
    <div className="App" />
=======
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ PrimeiraTela } />
      </BrowserRouter>
    </div>
>>>>>>> 110946b3b16afe7b0109e59f12f0e456d915d175
  );
}

export default App;
