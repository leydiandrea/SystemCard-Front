import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tarjetas } from './components/Tarjetas';
import { Transacciones } from './components/Transacciones';

function App() {
  return (
    <div className="App w3-container">

<Transacciones></Transacciones>
<Tarjetas></Tarjetas>
    </div>
  );
}

export default App;
