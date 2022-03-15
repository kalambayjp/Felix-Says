import { calculateAddedButtons } from "./helpers"
import './logic.css'

export default function Logic(props) { 
  const {sequence, setSequence} = props;

  const handleClick = function() {
    const newNums = calculateAddedButtons();
    const newSequence = [...sequence, ...newNums];

    setSequence(newSequence);
  }
  
  return (
    <div className="game-desc">

      <h4>Welcome to Felix Says!</h4>

      <p>
        Where what felix says goes! The goal of the game is to keep Felix happy. He will show you the exact order in which he wants each button pressed and it's up to you, to replicate it. Can you last all 8 rounds?
      </p>

      <button className="play-button" onClick={() => handleClick()}>Start</button>
    </div>
  )
}