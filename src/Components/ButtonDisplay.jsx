import Button from "./Button"
import './buttonDisplay.css'

export default function ButtonDisplay(props) {

  const {selected, sequence} = props;

  return (
    <div className="button-display">
      <Button color='orange' value={1} selected={selected} sequence={sequence} />
      <Button color='blue' value={2} selected={selected} sequence={sequence} />
      <Button color='green' value={3} selected={selected} sequence={sequence} />
      <Button color='red' value={4} selected={selected} sequence={sequence} />
    </div>

  )
}