import React, { useEffect, useMemo, useState } from "react";

const Histogram = () => {
  useEffect(() => {
    fetchData();
  }, []);

  let map = useMemo(() => {
    return new Map();
  }, []);

  const [rawData, setRawData] = useState();

  async function fetchData() {
    let res = await fetch(
      "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    );
    let data = await res.text();
    let convertedArray = data.split("\n");
    console.log(convertedArray);
    convertedArray.forEach((item) => {
      map.set(item, map.get(item) + 1 || 0);
    });
    let keys = map.keys();
    let array = Array.from(keys);
    setRawData(array.sort((a, b) => a - b));
  }

  // Filter out empty string and get the maximum value for scaling
  const maxValue = rawData ? Math.max(...Array.from(map.values())) : 0;

  return (
    <div
      style={{
        width: "800px",
        height: "500px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "400px",
          alignItems: "flex-end",
          position: "relative",
          paddingLeft: "60px",
          paddingBottom: "40px",
        }}
      >
        {/* Y-axis labels */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: "10px",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ fontSize: "14px" }}>
              {Math.round((maxValue / 5) * (5 - i))}
            </span>
          ))}
        </div>

        {/* Y-axis line */}
        <div
          style={{
            position: "absolute",
            left: "50px",
            top: 0,
            bottom: "40px",
            width: "1px",
            backgroundColor: "#333",
          }}
        />

        {/* X-axis line */}
        <div
          style={{
            position: "absolute",
            left: "50px",
            right: 0,
            bottom: "40px",
            height: "1px",
            backgroundColor: "#333",
          }}
        />

        {/* Bars */}
        {rawData &&
          rawData
            .filter((key) => key !== "")
            .map((key) => (
              <div
                key={key}
                style={{
                  width: "50px",
                  marginRight: "15px",
                  height: `${(map.get(key) / maxValue) * 100}%`,
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #999",
                  position: "relative",
                }}
              >
                {/* Value label on top of bar */}
                <div
                  style={{
                    position: "absolute",
                    top: "-24px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  {map.get(key)}
                </div>
              </div>
            ))}
      </div>

      {/* X-axis labels */}
      <div
        style={{
          display: "flex",
          paddingLeft: "50px",
          marginTop: "-30px",
        }}
      >
        {rawData &&
          rawData
            .filter((key) => key !== "")
            .map((key) => (
              <div
                key={key}
                style={{
                  width: "50px",
                  marginRight: "15px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {key}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Histogram;
