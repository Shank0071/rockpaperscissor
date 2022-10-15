import './App.css';
import MainPage from './components/MainPage';
import Game from './components/Game';
import GameProcess from './components/GameProcess';
import { useState, useCallback } from 'react'


function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [score, setScore] = useState(0)

  const handleClick = (e) => {
      setUserChoice(e.target.alt)
  }
  
  const scoreInc = useCallback(
    () => {
      setScore(score => score + 1)
    },
    [],
  )
  

  console.log(userChoice)
  return (
    <div className="App">
      <MainPage score={score}/>
      {!userChoice ? <Game userChoice={userChoice} handleClick={handleClick}/> : <GameProcess userChoice={userChoice} setUserChoice={setUserChoice} scoreInc={scoreInc} />}
    </div>
  );
}

export default App;
