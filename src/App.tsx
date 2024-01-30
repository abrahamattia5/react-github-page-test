/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React sdfg
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, {useState} from 'react';

function App() {
  // État pour stocker la valeur saisie dans la zone de saisie
  const [inputValue, setInputValue] = useState('');
  
  // État pour stocker la valeur à afficher
  const [displayValue, setDisplayValue] = useState('');

  // Fonction appelée lors du changement de la valeur de la zone de saisie
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Met à jour la valeur saisie
  };

  // Fonction appelée lors du clic sur le bouton "Valider"
  const handleButtonClick = () => {
    setDisplayValue(inputValue); // Met à jour la valeur à afficher
    setInputValue(''); // Réinitialise la valeur saisie
  };

  return (
    <div>
      {/* Zone de saisie */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Bouton "Valider" */}
      <button onClick={handleButtonClick}>Valider</button>

      {/* Zone d'affichage */}
      <div>Information saisie : {displayValue}</div>
    </div>
  );
}

export default App;
