import happy from "../images/IMG_1185.jpeg"
import startled from '../images/IMG_3053.jpeg'
import sad from "../images/IMG_3108.jpeg"
import '../ComponentCSS/felix.css';

export default function Felix(props) {
  const { strikes } = props;

  return(
    <div>

      {strikes === 0 && <img className='photo' src={happy} alt='' />}
      {strikes === 1 && <img className='photo' src={startled}  alt='' />}
      {strikes === 2 && <img className='photo' src={sad} alt='' />}
      
    </div>
  )
};