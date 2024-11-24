import { useState } from "react";
import Visualizer from "./components/Visualizer";
import { bubbleSort } from "./algorithms/bubblesort";


function App() {
  const [array, setArray] = useState([]);

  const handleBubbleSort = () => {
    bubbleSort(array, setArray, 100); // Adjust speed for visualizing
  };

  return (
    <div className="App">
      <Visualizer array={array} setArray={setArray} />
      <button onClick={handleBubbleSort}>Bubble Sort</button>
    </div>
  );
}

export default App;
