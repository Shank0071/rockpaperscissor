import './App.css';
import MainPage from './components/MainPage';
import Game from './components/Game';
import GameProcess from './components/GameProcess';
import { useState, useCallback, useRef } from 'react'


function App() {
  const [userChoice, setUserChoice] = useState(null)
  const score = useRef(0)


  const incScore = useCallback(() => {
    score.current++
  }, [score])



  const handleUserChoice = useCallback(
    () => {
      setUserChoice(null)
    },[]
  )

  
  
  

  return (
    <div className="App">
      <MainPage score={score.current}/>
      {!userChoice ? <Game userChoice={userChoice} setUserChoice={setUserChoice}/> : <GameProcess userChoice={userChoice} handleUserChoice={handleUserChoice} incScore={incScore} score={score} />}
    </div>
  );
}

export default App;
