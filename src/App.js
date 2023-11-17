import { useState } from "react";
import "./App.css";

/**
 *
 * @param {string} str
 * @returns
 */
export function spaceCamelCase(str) {
  return str.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState("MidnightBlue");
  const [text, setText] = useState("Change to Medium Violet Red");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClickButton = (bg) => {
    if (bg === "MidnightBlue") {
      setBackgroundColor("MediumVioletRed");
    } else {
      setBackgroundColor("MidnightBlue");
    }
    setText(`Change to ${spaceCamelCase(bg)}`);
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
