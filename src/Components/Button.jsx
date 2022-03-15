import './button.css'

export default function Button(props) {
  const { color, selected, value, sequence } = props;
  const compareSequence = sequence;
  
  function handleClick() {
    console.log(value)
  }
  
  return (
    <>
    <button className={`${color} ${selected === value ? 'selected' : ''}`} onClick={() => handleClick()}></button>
    </>
  )
}