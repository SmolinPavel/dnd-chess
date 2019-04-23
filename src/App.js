import React from 'react';

import Board from './Board';

import './App.css';

function App() {
  return (
    <div className="App">
      <Board knightPosition={[7, 4]} />
    </div>
  );
}

export default App;
