import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = 70;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        COMING SOON
        <span className="blinking-dot">
          <span className="dot bright">.</span>
          
        </span><br></br><br></br>
      </h1>

      <div className="glow-line"></div><br></br><br></br>

      <p className="subtitle">Website Under Construction</p><br></br>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div><br></br><br></br>

      <p className="progress-text">{progress}% done...</p>
    </div>
  );
}

export default App;
