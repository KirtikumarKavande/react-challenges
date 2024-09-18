import { useState } from "react";
import "./style.css";
const TransferList = () => {
  let list1 = [
    { id: 0, name: "cricket" },
    { id: 1, name: "football" },
    { id: 2, name: "hockey" },
  ];
  
  const [listOne,setListOne]=useState(list1)
  const [listTwo,setListTwo]=useState([])
  const [tempList, setTempList] = useState([]);

  function handleList(item){
    setTempList((prev)=>[...prev, item])
  
  }
  return (
    <div className="transfer-List-container">
      <div className="left-container">
        {listOne.map((item) => {
          return (
            <div
              onClick={() => {
                handleList(item);
              }}
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="middle-container">
        <button onClick={() => {
            setListTwo([...listTwo, ...tempList])
            const updatedListOne = listOne.filter(
                (item1) => !tempList.some((item2) => item1.id === item2.id)
              );
              setListOne(updatedListOne);
          
              // Clear tempList after transfer
              setTempList([]);
        }}>LEFT</button>
        <button>RIGHT</button>
      </div>
      <div className="right-container">
      {listTwo.map((item) => {
          return (
            <div
              onClick={() => {
                handleList(item);
              }}
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransferList;
