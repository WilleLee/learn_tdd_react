import React, { useState } from "react";

export default function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <div>
        <div>
          <input
            id="confirm-button-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="confirm-button-checkbox">
            I agree to <a>Terms and Conditions</a>
          </label>
        </div>
        <button disabled={!isChecked}>Confirm Order</button>
      </div>
    </div>
  );
}
