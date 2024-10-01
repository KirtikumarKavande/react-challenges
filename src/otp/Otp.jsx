import { useRef } from "react";
import "./style.css"; // Importing the CSS file

const Otp = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]; 

  const handleInputChange = (e, currentIndex) => {
    const value = e.target.value;
    if (/^\d$/.test(value) && currentIndex < 3) {
      inputRefs[currentIndex + 1].current.focus();
    }
  };

  const handleKeyDown = (e, currentIndex) => {
    if (e.key === "Backspace" && e.target.value === "" && currentIndex > 0) {
      inputRefs[currentIndex - 1].current.focus();
    }
  };

  return (
    <div className="otp-container">
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={ref}
          autoFocus={index === 0}
        />
      ))}
      <button>Submit</button>
    </div>
  );
};

export default Otp;
