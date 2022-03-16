import '../ComponentCSS/replayButton.css';

export default function ReplayButton(props) {
  const { replaySequence, activeGame, replayCount } = props;

  function handleClick() {
    replaySequence()
  }

  return (
    <div className={(activeGame && replayCount > 0) ? '' : 'hidden'}>
      <button id="replay-button" onClick={() => handleClick()}>Replay</button>
    </div>
  )
}