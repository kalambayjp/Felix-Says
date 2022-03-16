import Button from "./Button"
import '../ComponentCSS/buttonDisplay.css'

export default function ButtonDisplay(props) {

  return (
    <div className="button-display">
      <Button color='orange' value={1} {...props} />
      <Button color='blue' value={2} {...props} />
      <Button color='green' value={3} {...props} />
      <Button color='red' value={4} {...props} />
    </div>

  )
};