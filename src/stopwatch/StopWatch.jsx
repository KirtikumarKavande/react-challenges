import { useState } from "react";
import "./style.css";
import { useEffect } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [isStartTimer, setIsStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(null);

  function handleTimer() {
    setIsStartTimer((prevState) => !prevState);
  }
  useEffect(() => {
    if (isStartTimer) {
      let timerId = setInterval(() => {
        setTimer((prev) => {
          let { hour, min, sec } = prev;
          if (sec > 0) {
            sec = sec - 1;
          } else if (sec === 0 && min > 0) {
            sec = 59;
            min = min - 1;
          } else if (min === 0 && hour > 0) {
            sec = 59;
            min = 59;
            hour = hour - 1;
          } else {
            hour = 0;
            min = 0;
            sec = 0;
          }

          return { hour, min, sec };
        });
      }, 1000);
      setTimerId(timerId);
    }
if(!isStartTimer){
  clearInterval(timerId)
}
    return () => {
      clearInterval(timerId);
    };
  }, [isStartTimer]);

  return (
    <>
      <div className="container">
        {timer.hour} -{timer.min}-{timer.sec}
        <input
          type="text"
          placeholder="HH"
          onChange={(e) => setTimer({ ...timer, hour: +e.target.value })}
        />
        <input
          type="text"
          placeholder="MM"
          onChange={(e) => setTimer({ ...timer, min: +e.target.value })}
        />
        <input
          type="text"
          placeholder="SS"
          onChange={(e) => setTimer({ ...timer, sec: +e.target.value })}
        />
        <button onClick={handleTimer}>{isStartTimer ? "stop" : "start"}</button>
      </div>
    </>
  );
};

export default StopWatch;
