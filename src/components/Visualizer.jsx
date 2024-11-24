import { useState, useEffect } from "react";

const Visualizer = () => {
  const [array, setArray] = useState([]);

  // Create random array
  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * 500) + 5
    );
    setArray(newArray);
  };

  return (
    <div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button onClick={resetArray}>Generate New Array</button>
    </div>
  );
};

export default Visualizer;
