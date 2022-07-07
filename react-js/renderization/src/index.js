import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = 'Digital Inovation';
const element2 = <h1>Olá turma!</h1>;

function App() {
  return(
    <div>
      {element}
      {element2}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);