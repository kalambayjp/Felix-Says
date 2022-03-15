import Button from "./Button"
import './buttonDisplay.css'

export default function ButtonDisplay() {



  return (
    <div className="button-display">
      <Button color='orange' />
      <Button color='blue'/>
      <Button color='green'/>
      <Button color='purple'/>
    </div>

  )
}