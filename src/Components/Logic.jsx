
import './logic.css'

export default function Logic(props) { 
  const {  
    round,
    activeGame, 
    setActiveGame,
    addToSequence
  } = props;

  const handleClick = function() {

    setActiveGame(true);
    addToSequence()
  }

  return (
    <div className="game-desc">

      <h4>Welcome to Felix Says!</h4>

      <p>
        Where what felix says goes! The goal of the game is to keep Felix happy. He will show you the exact order in which he wants each button pressed and it's up to you, to replicate it. How many rounds will you last?
      </p>
      
      {
        !activeGame ? 
        <button className="play-button" onClick={() => handleClick()}>Start</button> :
        <p>Round: {round}</p>
      }
      
    </div>
  )
}