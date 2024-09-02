import { useEffect } from "react";
import "./style.css";
import { useState } from "react";
const Carousel = () => {
  const [updatedData, setUpdatedData] = useState();
  const [currentCount, setCurrentCount] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    let id = setInterval(() => {
      setCurrentCount((prev) => {
        return (prev + 1) % updatedData.length;
      });
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [updatedData, currentCount]);
  async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const res = await data?.json();
    setUpdatedData([res[0], res[1], res[2]]);
  }

  return (
    <div className="crousel-container">
      <div className="cards">
        <div className="card">
          <img src={updatedData && updatedData[currentCount].url} alt="" />

          <button
            className="cursor-left"
            onClick={() =>
              setCurrentCount((prev) => {
                if (prev === 0) {
                  return updatedData.length - 1;
                } else {
                  return prev - 1;
                }
              })
            }
          >
            left
          </button>
          <button
            className="cursor-right"
            onClick={() =>
              setCurrentCount((prev) => {
                if (prev === updatedData.length - 1) {
                  return 0;
                } else {
                  return prev + 1;
                }
              })
            }
          >
            right
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
