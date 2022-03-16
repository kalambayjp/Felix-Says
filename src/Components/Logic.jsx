import '../ComponentCSS/logic.css'

export default function Logic(props) { 
  const {  
    round,
    activeGame,
    startNewGame,
    highScore
  } = props;

  const handleClick = function() {
    startNewGame()
  }

  return (
    <div className="game-desc">

      <h4>Welcome to Felix Says!</h4>

      <p>
        Where what felix says goes! The goal of the game is to keep Felix happy. He will show you the exact order in which he wants each button pressed and it's up to you, to duplicate it. How many rounds will you last?
      </p>

      {highScore > 0 && <p>High Score: {highScore}</p>}
      
      {
        (!activeGame && round < 1) ? 
        <button className="play-button" onClick={() => handleClick()}>Start</button> :
        <p>Round: {round}</p>
      }
      
    </div>
  )
};