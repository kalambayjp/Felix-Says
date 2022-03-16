import '../ComponentCSS/button.css'

export default function Button(props) {
  const { color, selected, value, activeGame, updateSelection } = props;
  
  function handleClick() {
    if (activeGame) {
      updateSelection(value)
    }
    return;
  }
  
  return (
    <>
      <button className={`${color} ${selected === value ? 'selected' : ''}`} onClick={() => handleClick()}></button>
    </>
  )
};