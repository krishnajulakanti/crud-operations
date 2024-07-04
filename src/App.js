import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GadgetShowCase from './pages/GadgetShowCase';
import GadgetDetails from './pages/GadgetDetails';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

function App() {


  const [gadgets, setGadgets] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/gadgets')
      .then(response => response.json())
      .then(data => setGadgets(data))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Gadgets Show</h1>
        <ProductContext.Provider value={{gadgets, setGadgets}}>
          <Routes>
            <Route path='/' element={<GadgetShowCase />} />
            <Route path='/:id' element={<GadgetDetails  />} />
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
