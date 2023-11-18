import React, { useState } from "react";

export default function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h1>summary form</h1>
      <div>
        <button disabled={!isChecked}>confirm</button>
        <input
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </div>
    </div>
  );
}
