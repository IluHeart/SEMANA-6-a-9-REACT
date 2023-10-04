import React from 'react';
import './App.css';

function Saludo(props) {
  const mensaje = `¡Hola, ${props.nombre}!`;

  return <h1>{mensaje}</h1>;
}

function App() {
  return (
    <div className="App">
      <Saludo nombre="Mundo" />
    </div>
  );
}

export default App;
