import '../ComponentCSS/replayPopup.css';

export default function ReplayPopup(props) {
  const { closePopup } = props;

  function handleClick() {
    closePopup()
  }
  return (
    <div className="popup">
      <p>
        Lucky You!! Felix is impressed and is giving you a Replay, now you can get a second look at the order before you play. Be sure to use it wisely!
      </p>
      <div>
        <button id="exit-button" onClick={() => handleClick()}>Close</button>
      </div>
    </div>
  )
}