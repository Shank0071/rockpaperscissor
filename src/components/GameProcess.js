import "./GameProcess.css";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import { useEffect, useState, useMemo } from "react";

export default function GameProcess({ userChoice, setUserChoice, scoreInc }) {
  const [src1, setSrc1] = useState(null);
  const arr1 = useMemo(() => [scissors, rock, paper], []);
  const randNum = Math.floor(Math.random() * 3);
  const [winOrLose, setWinORLose] = useState(null);

  useEffect(() => {
    if (userChoice === "paper") {
      setSrc1(paper);
    } else if (userChoice === "scissors") {
      setSrc1(scissors);
    } else if (userChoice === "rock") {
      setSrc1(rock);
    } else {
      setSrc1(null);
    }
  }, [userChoice]);
  console.log(src1, arr1[randNum])
  useEffect(() => {
    if (
        (src1 === rock && arr1[randNum] === scissors) ||
        (src1 === paper && arr1[randNum] === rock) ||
        (src1 === scissors && arr1[randNum] === paper)
      ) {
        setWinORLose("You Win");
        scoreInc()
        
      } else if (
        (src1 === scissors && arr1[randNum] === rock) ||
        (src1 === rock && arr1[randNum] === paper) ||
        (src1 === paper && arr1[randNum] === scissors)
      ) {
        setWinORLose("You Lose");
      } else {
        setWinORLose("Draw");
      }
  }, [arr1, randNum, src1, scoreInc])


  return (
    <div className="GameProcess">
      <div className="userPick">
        <h3>You Picked</h3>
        <img src={src1} alt={`${src1}`} />
      </div>
      {winOrLose && (
      <div className="winOrLose">
        <h1>{winOrLose}</h1>
        <button onClick={() => setUserChoice(prev => prev=null)}>PLAY AGAIN</button>
        </div>
      )}
      <div className="housePick">
        <h3>The House Picked</h3>
        <img src={arr1[randNum]} alt={`${arr1[randNum]}`} />
      </div>
    </div>
  );
}
