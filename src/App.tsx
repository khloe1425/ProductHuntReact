import React from 'react';
import Home from './pages/Home';
import "./style.scss"
function App() {
  return (
    <div className="container">
      <h1 className='text-center'>Popular products</h1>
      <hr />
      <Home />
    </div>
  );
}

export default App;
