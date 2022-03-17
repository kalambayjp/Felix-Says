import '../ComponentCSS/replayButton.css';

export default function ReplayButton(props) {
  const { replaySequence, activeGame, replayCount } = props;

  function handleClick() {
    replaySequence()
  }

  return (
    <div className={(activeGame && replayCount > 0) ? 'replay-button-div' : 'replay-button-div-hidden'}>
      <button id="replay-button" onClick={() => handleClick()}>Replay</button>
      <p>Replays: {replayCount}</p>
    </div>
  )
}