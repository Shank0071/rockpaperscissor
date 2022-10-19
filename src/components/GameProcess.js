import "./GameProcess.css";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import { useEffect, useState, useMemo } from "react";

export default function GameProcess({
  userChoice,
  handleUserChoice,
  incScore,
  score,
}) {
  const [src1, setSrc1] = useState(null);
  const arr1 = useMemo(() => [scissors, rock, paper], []);
  const [randNum, setRandNum] = useState(0);
  // const randNum = 2
  const [winOrLose, setWinORLose] = useState(null);

  // useEffect(() => {
  //   const randNum = Math.floor(Math.random() * 3);
  // },[userChoice])

  // console.log(randNum)

  useEffect(() => {
    setRandNum(Math.floor(Math.random() * 3));
  }, [userChoice]);

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

  useEffect(() => {
    if (
      (src1 === rock && arr1[randNum] === scissors) ||
      (src1 === paper && arr1[randNum] === rock) ||
      (src1 === scissors && arr1[randNum] === paper)
    ) {
      setWinORLose("You Win");
      incScore();
    } else if (
      (src1 === scissors && arr1[randNum] === rock) ||
      (src1 === rock && arr1[randNum] === paper) ||
      (src1 === paper && arr1[randNum] === scissors)
    ) {
      setWinORLose("You Lose");
    } else if (
      (src1 === rock && arr1[randNum] === rock) ||
      (src1 === paper && arr1[randNum] === paper) ||
      (src1 === scissors && arr1[randNum] === scissors)
    ) {
      setWinORLose("Draw");
    }
  }, [randNum, src1, incScore, arr1]);

  document.querySelector(".score h1").innerHTML = score.current;


  console.log(winOrLose);
  return (
    <div className="GameProcess">
      <div className="userPick">
        <h3>You Picked</h3>
        <img src={src1} alt={`${src1}`} />
      </div>
      {winOrLose && (
        <div className="winOrLose">
          <h1>{winOrLose}</h1>
          <button onClick={handleUserChoice}>PLAY AGAIN</button>
        </div>
      )}
      <div className="housePick">
        <h3>The House Picked</h3>
        <img src={arr1[randNum]} alt={`${arr1[randNum]}`} />
      </div>
    </div>
  );
}
