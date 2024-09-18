import React, { useState } from "react";

const SubFolder = ({ name, childrenData }) => {
  const [isShow, setIsShow] = useState(false);
  console.log("kk", name, childrenData);
  return (
    <div>
      <div
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {name}
      </div>
      <div style={{ marginLeft: "20px" }}>
        {isShow &&
          childrenData &&
          childrenData.map((item, index) => {
            return (
              <SubFolder
                key={index}
                name={item.name}
                childrenData={item.children}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SubFolder;
