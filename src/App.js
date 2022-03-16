import Header from './Components/Header';
import Logic from './Components/Logic';
import ButtonDisplay from './Components/ButtonDisplay';
import Felix from './Components/Felix';
import NewGamePrompt from './Components/NewGamePompt';
import { useEffect, useState } from 'react';
import { calculateAddedButtons, timeout } from "./helpers/helpers.js"
import './App.css';
import PlayerPrompt from './Components/PlayerPrompt';
import ReplayButton from './Components/ReplayButton';

function App() {

 const [sequence, setSequence] = useState([]);
 const [compareSequence, setCompareSequence] = useState([]);
 const [selected, setSelected] = useState(null);
 const [highScore, setHighScore] = useState(0)
 const [round, setRound] = useState(0);
 const [strikes, setStrikes] = useState(0);
 const [activeGame, setActiveGame] = useState(false);
 const [displaymode, setDisplayMode] = useState(true);
 const [userMode, setUserMode] = useState(false);
 const [replayCount, setReplayCount] = useState(0)
 const [replayPopup, setReplayPopup] = useState(false)


  useEffect(() => {

    iterateSequence();
    setCompareSequence([...sequence])

  }, [sequence]);


  function replaySequence() {
    iterateSequence();
    setReplayCount((prevReplayCount) => prevReplayCount - 1)
  }

  async function iterateSequence() {
    if (activeGame) {
      await timeout(1000);

      for (let i = 0; i < sequence.length; i++) {
        setSelected(sequence[i]);
        await timeout(700);
        setSelected(null);
        await timeout(700);
      }

      setDisplayMode(false);
      setUserMode(true);
    }
    return;
  }

  function addToSequence() {
    setRound((prevRound) => prevRound + 1);
    checkReplayEligibilty();

    const newNums = calculateAddedButtons();
    const newSequence = [...sequence, ...newNums];
    console.log("add to sequence");

    setSequence(newSequence);
  
    return;
  }

  function compareInput (userInput) {
    if (userMode === true) {
      if (userInput === compareSequence[0]) {
        const newCompareSequence = [...compareSequence];
        newCompareSequence.shift();
        console.log("correct");
    
        setCompareSequence([...newCompareSequence]);

        if (newCompareSequence.length === 0) {
          startNewRound();
        }
        
      } else if (userInput !== compareSequence[0]) {
        setStrikes((prevStrikes) => prevStrikes + 1)
        console.log("incorrect", userInput, compareSequence[0]);
        if (strikes === 1) {
          endGame()
        }
      }
    }
    return;
  }

  function updateSelection(int) {
    compareInput(int)
  }

  function startNewRound() {
    
    setUserMode(false);
    setDisplayMode(true);
    addToSequence();
    
    return;
  }

  function endGame() {
    setActiveGame(false);
    setUserMode(false);
    setSequence([]);
    checkForHighScore();
    
    return
  }

  function checkForHighScore() {
    if (round > highScore) {
      setHighScore(round);
    }  
    return
  }

  function startNewGame() {
    setActiveGame(true);
    setStrikes(0);
    setRound(0); 
    startNewRound();
    return;
  }

  function checkReplayEligibilty() {
    if ( round % 3 === 0) {
      setReplayPopup(true)
      setReplayCount((replayCount) => replayCount + 1)
    }
  }

  function closePopup() {
    setReplayPopup(false)
  }

  return (
    <div className="App">

      <header>
        <Header />
      </header>

      <main>

        <div className='display'>
          <Logic 
            round={round} 
            activeGame={activeGame} 
            startNewGame={startNewGame}  
            highScore={highScore} 
          />

          <div className='felix-state'>
            <Felix strikes={strikes}  />
          </div>
        </div>
        {
          replayPopup && 
          <replayPopup closePopup={closePopup} />
        }
        <div className='game-play' >

          <ReplayButton replaySequence={replaySequence} activeGame={activeGame} replayCount={replayCount}/>
          
          <PlayerPrompt userMode={userMode} activeGame={activeGame} />
          
          { 
            (!activeGame && strikes === 2) &&
            <div className='play-again'>
              <NewGamePrompt round={round} startNewGame={startNewGame} />
            </div>
          }
           
          <ButtonDisplay 
            selected={selected} 
            activeGame={activeGame}
            updateSelection={updateSelection}
          />

        </div>
      </main>
    </div>
  );
}

export default App;