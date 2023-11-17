import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [text, setText] = useState("Change to Blue");
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
        style={{
          backgroundColor,
        }}
        onClick={() => handleClickButton(backgroundColor)}
      >
        {text}
      </button>
    </div>
  );
}

export default App;
