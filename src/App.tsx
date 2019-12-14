import React from 'react';
import './App.css';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <About>
          hi hello
        </About>
      </header>
    </div>
  );
}

export default App;
