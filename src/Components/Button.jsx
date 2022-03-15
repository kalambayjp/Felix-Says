import './button.css'

export default function Button(props) {
  const {color} = props;
  
  return (
    <>
    <button style={{backgroundColor: color}}></button>
    </>
  )
}