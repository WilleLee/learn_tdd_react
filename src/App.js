import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [text, setText] = useState("Change to Blue");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClickButton = (bg) => {
    if (bg === "red") {
      setBackgroundColor("blue");
      setText("Change to Red");
    } else {
      setBackgroundColor("red");
      setText("Change to Blue");
    }
  };
  return (
    <div>
      <button
        disabled={buttonDisabled}
        style={{
          backgroundColor: buttonDisabled ? "gray" : backgroundColor,
        }}
        onClick={() => handleClickButton(backgroundColor)}
      >
        {text}
      </button>
      <div>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={buttonDisabled}
          onChange={(e) => setButtonDisabled(e.target.checked)}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
