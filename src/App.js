import Header from './Components/Header';
import Logic from './Components/Logic';
import ButtonDisplay from './Components/ButtonDisplay';
import './App.css';
import { useState } from 'react';

function App() {

 const [sequence, setSequence] = useState([]);


  return (
    <div className="App">

      <header>
        <Header />
      </header>

      <main>

        <Logic sequence={sequence} setSequence={setSequence} />
        <ButtonDisplay />
        
      </main>

    </div>
  );
}

export default App;
