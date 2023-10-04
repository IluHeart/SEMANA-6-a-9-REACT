import React from 'react';
import './App.css';

function App() {
  // Creamos la variable 'hola' con el mensaje
  const hola = <h1>¡Hola, mundo!</h1>;

  return (
    <div className="App">
      {/* Utilizamos la variable 'hola' en nuestro componente */}
      {hola}
    </div>
  );
}

export default App;