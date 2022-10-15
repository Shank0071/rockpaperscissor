import './Game.css'
import triangle from '../images/bg-triangle.svg'
import scissors from '../images/icon-scissors.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'



export default function Game({handleClick}) {

  return (
    <div className='Game'>
        <img src={triangle} alt="triangle" />
        <img className='rock' src={rock} alt="rock" onClick={handleClick} />
        <img className='paper' src={paper} alt="paper" onClick={handleClick} />
        <img className='scissors' src={scissors} alt="scissors" onClick={handleClick} />
    </div>
  )
}
