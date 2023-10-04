import "./App.css";
import JSX1 from "./Ejercicios/Ejercicio 1.js";
import JSX2 from "./Ejercicios/Ejercicio 2.js";
import JSX3 from "./Ejercicios/Ejercicio 3.js";
import JSX4 from "./Ejercicios/Ejercicio 4.js";
import JSX5 from "./Ejercicios/Ejercicio 5.js";

//Comence a agrupar los ejercicios como lo hizo wilmer porque me estuco ayudando y lo comence a hacer similar a el

function App() {
  return (
    <div className="App">
      <JSX1/>
      <JSX2/>
      <JSX3/>
      <JSX4 name={<a href="https://instagram.com">Instagram</a>} />
      <JSX5 
      a={1010101}
      b={1010101} />

    </div>
  );
}

export default App;