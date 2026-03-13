import React, { useState } from "react";

export default function App() {

  const [score, setScore] = useState(0);

  // 1- Compute width
  const clampedScore = Math.min(10, Math.max(0, Number(score) || 0));
  const scoreWidth = `${(clampedScore / 10) * 100}%`;

  // 2- Compute color (optional)
  let scoreColor = "#f3bc47";

  // 3- Style object
  const scoreBarStyle = {
    width: scoreWidth,
    backgroundColor: scoreColor
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={scoreBarStyle}></div>
        </div>
      </div>
    </>
  );
}