import { useState } from "react";

export default function Checkbox({ checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(evt) => setIsChecked(evt.target.checked)}
    />
  );
}