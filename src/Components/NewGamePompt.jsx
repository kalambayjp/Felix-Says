import '../ComponentCSS/newGamePrompt.css'

export default function NewGamePrompt(props) {

  const { round, startNewGame} = props;
  const message = `Felix is sad :(  ... You made it to round: ${round}`;

  function handleClick() {
    startNewGame();
  }

  return (
    <div className='new-game-div'>

      <h2>Game Over!</h2>
      <p>
        {message}
      </p>
      <button id="new-game" onClick={() => handleClick()}>Play Again</button>

    </div>
  )
}