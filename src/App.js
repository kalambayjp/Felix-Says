import Header from './Components/Header';
import Logic from './Components/Logic';
import ButtonDisplay from './Components/ButtonDisplay';
import { useState } from 'react';
import { calculateAddedButtons, timeout } from "./Components/helpers"
import './App.css';

function App() {

 const [sequence, setSequence] = useState([1,3]);
 const [selected, setSelected] = useState(null)
 const [round, setRound] = useState(0);
 const [activeGame, setActiveGame] = useState(false);
 const [displaymode, setDisplayMode] = useState(true);
 const [userMode, setUserMode] = useState(false)

 async function iterateSequence() {
   await timeout(1000);
   for (let i = 0; i < sequence.length; i++) {
     setSelected(sequence[i]);
     await timeout(700);
     setSelected(null)
   }

   setDisplayMode(false);
   setUserMode(true)
 }

 function addToSequence() {
  setRound(round + 1)
  const newNums = calculateAddedButtons();
  const newSequence = [...sequence, ...newNums];

  setSequence(newSequence);
  
  iterateSequence();
 }



  return (
    <div className="App">

      <header>
        <Header />
      </header>

      <main>

        <Logic round={round} activeGame={activeGame} setActiveGame={setActiveGame} addToSequence={addToSequence} />
        <ButtonDisplay selected={selected} sequence={sequence}  />
        
      </main>

    </div>
  );
}

export default App;
