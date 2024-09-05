import { useRef } from "react";
import "./style.css";

const Otp = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  const inputRefs = [inputRef1, inputRef2, inputRef3, inputRef4];

  // Handle input change for valid numeric inputs and focus on the next field
  function handleInputChange(e, currentIndex) {
    const currentValue = e.target.value;

    // Only allow digits
    if (!/^\d$/.test(currentValue)) {
      e.target.value = ""; // Clear if non-digit
      return;
    }

    if (currentValue && currentIndex < 3) {
      // Move focus to the next input field if a digit is entered
      inputRefs[currentIndex + 1].current.focus();
    }
  }

  // Handle keydown to manage backspace navigation and clearing inputs
  function handleKeyDown(e, currentIndex) {
    if (e.key === "Backspace") {
      const currentInput = e.target;

      // Check if cursor is at the beginning of the input
      if (currentInput.selectionStart === 0) {
        // If at the beginning, move to the previous input and delete its value
        if (currentIndex > 0) {
          const previousInputRef = inputRefs[currentIndex - 1];
          previousInputRef.current.focus();
          previousInputRef.current.value = ""; // Clear the previous input field
        }
      } else {
        // If not at the beginning, just clear the current field's value
        e.target.value = "";
      }
      e.preventDefault(); // Prevent default backspace behavior
    }
  }

  return (
    <div className="otp-container">
      <div className="input-container">
        <input
          type="text"
          maxLength="1"
          autoFocus
          onChange={(e) => handleInputChange(e, 0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          ref={inputRef1}
        />
        <input
          type="text"
          maxLength="1"
          onChange={(e) => handleInputChange(e, 1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          ref={inputRef2}
        />
        <input
          type="text"
          maxLength="1"
          onChange={(e) => handleInputChange(e, 2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
          ref={inputRef3}
        />
        <input
          type="text"
          maxLength="1"
          onChange={(e) => handleInputChange(e, 3)}
          onKeyDown={(e) => handleKeyDown(e, 3)}
          ref={inputRef4}
        />
      </div>
      <button>Submit</button>
    </div>
  );
};

export default Otp;
