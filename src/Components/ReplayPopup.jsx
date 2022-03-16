import '../ComponentCSS/replayButton.css';

export default function ReplayPopup(props) {

  return (
    <div className="popup">
      <div id="exit-button-div">
        <button>x</button>
      </div>
      <p>
        Lucky You!! Felix is impressed and is giving you a Replay, now you can get a second look at the order before your. Be sure to use it wisely!
      </p>
    </div>
  )
}