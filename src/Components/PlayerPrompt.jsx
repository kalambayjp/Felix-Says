import '../ComponentCSS/playerPrompt.css'

export default function PlayerPrompt(props) {
  const { userMode, activeGame} = props;
  const prompt = userMode ? 'Your Turn' : 'Watch Closely';

  return (
    <span className={activeGame ? '' : 'hidden'}>
      <strong>{prompt}</strong>
    </span>
  )
};