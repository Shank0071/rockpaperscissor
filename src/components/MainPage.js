import './MainPage.css'


export default function MainPage({ score }) {
  return (
    <div className='MainPage'>
        <div className="header">
            <div className="rps">
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSOR</h2>
            </div>
            <div className="score">
                <small>SCORE</small>
                <h1>{score}</h1>
            </div>
        </div>
    </div>
  )
}
