import { useEffect, useRef, useState } from "react";
import "./style.css";
const MemoryGame = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [lastTwoCards, setLastTwoCards] = useState([]);
  const [waitTillTimerFinished, setWaitTillTimerFinished] = useState(false);
  const timerId = useRef();

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 36; i++) {
      arr.push(i < 19 ? i % 19 : (i % 19) + 1);
    }
    let randomNumber = Math.floor(Math.random() * 36);
    let shuffledArray = [];
    for (let j = 0; j < arr.length; j++) {
      if (shuffledArray[randomNumber]) {
        let k = 0;
        while (shuffledArray[k]) {
          k++;
        }
        shuffledArray[k] = { isHidden: false, isShow: false, number: arr[j] };
      } else {
        shuffledArray[randomNumber] = {
          isHidden: false,
          isShow: false,
          number: arr[j],
        };
      }
    }
    setCardInfo(shuffledArray);
    console.log(shuffledArray, "good");
  }, []);

  function handleCard(index) {
    if (waitTillTimerFinished) return;
    cardInfo[index].isShow = true;
    setCardInfo([...cardInfo]);
    setLastTwoCards([...lastTwoCards, { ...cardInfo[index], index }]);
  }

  useEffect(() => {
    if (lastTwoCards.length === 2) {
      if (lastTwoCards[0].number === lastTwoCards[1].number) {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        }).then(() => {
          cardInfo[lastTwoCards[0].index].isHidden = true;
          cardInfo[lastTwoCards[1].index].isHidden = true;
          setLastTwoCards([]);
        });
      } else {
        setWaitTillTimerFinished(true);

        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        }).then(() => {
          cardInfo[lastTwoCards[0].index].isShow = false;
          cardInfo[lastTwoCards[1].index].isShow = false;
          setCardInfo([...cardInfo]);
          setLastTwoCards([]);
          setWaitTillTimerFinished((prev) => !prev);
        });
      }
    }

    

    return () => clearTimeout(timerId.current);
  }, [lastTwoCards.length]);

  console.log("good", timerId.current);
  return (
    <div className="memory-game-card-container">
      {cardInfo.map((info, index) => {
        return (
          <div
            style={{ visibility: info.isHidden ? "hidden" : "" }}
            key={index}
            className="card"
            onClick={() => {
              handleCard(index);
            }}
          >
            {info.isShow ? info.number : ""}
          </div>
        );
      })}
    </div>
  );
};

export default MemoryGame;
