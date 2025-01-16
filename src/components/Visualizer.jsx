import { useState, useRef } from "react";
import "./visualizer.css";

const Visualizer = () => {
  const [array, setArray] = useState([50, 40, 70, 20, 90, 30, 60, 80, 10, 100]);
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("quickSort");
  const [speed, setSpeed] = useState(2);
  const timeoutIds = useRef([]); // Store timeout IDs for cancellation

  const generateNewArray = () => {
    if (isSorting) return;
    const newArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 10
    );
    setArray(newArray);
  };

  const visualizeSorting = () => {
    if (isSorting) return;

    switch (algorithm) {
      case "insertionSort":
        insertionSort([...array]);
        break;
      case "selectionSort":
        selectionSort([...array]);
        break;
      case "bubbleSort":
        bubbleSort([...array]);
        break;
      case "mergeSort":
        mergeSort([...array]);
        break;
      case "quickSort":
        quickSort([...array]);
        break;
      case "heapSort":
        heapSort([...array]);
        break;
      case "radixSort":
        radixSort([...array]);
        break;
      case "shellSort":
        shellSort([...array]);
        break;
      default:
        alert("Algorithm not implemented yet!");
        break;
    }
  };

  const cancelVisualization = () => {
    timeoutIds.current.forEach((id) => clearTimeout(id));
    timeoutIds.current = [];
    setIsSorting(false);
    const bars = document.getElementsByClassName("array-bar");
    for (let bar of bars) {
      bar.style.backgroundColor = "#4caf50";
    }
  };

  const insertionSort = (arr) => {
    setIsSorting(true);
    const animations = [];
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        animations.push([j, j - 1]); // Compare
        animations.push([j, j - 1, true]); // Swap
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
    }
    animateSorting(animations, arr);
  };

  const selectionSort = (arr) => {
    setIsSorting(true);
    const animations = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        animations.push([j, minIdx]); // Compare
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        animations.push([i, minIdx, true]); // Swap
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
    }
    animateSorting(animations, arr);
  };

  const bubbleSort = (arr) => {
    setIsSorting(true);
    const animations = [];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        animations.push([i, i + 1]); // Compare
        if (arr[i] > arr[i + 1]) {
          animations.push([i, i + 1, true]); // Swap
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    animateSorting(animations, arr);
  };

  const mergeSort = (arr) => {
    setIsSorting(true);
    const animations = [];

    const merge = (left, right) => {
      let sortedArray = [];
      let i = 0, j = 0;

      while (i < left.length && j < right.length) {
        animations.push([i, j]); // Compare
        if (left[i] <= right[j]) {
          sortedArray.push(left[i++]);
        } else {
          sortedArray.push(right[j++]);
        }
      }

      while (i < left.length) sortedArray.push(left[i++]);
      while (j < right.length) sortedArray.push(right[j++]);

      return sortedArray;
    };

    const mergeSortHelper = (arr) => {
      if (arr.length <= 1) return arr;

      const mid = Math.floor(arr.length / 2);
      const left = mergeSortHelper(arr.slice(0, mid));
      const right = mergeSortHelper(arr.slice(mid));

      return merge(left, right);
    };

    const sortedArray = mergeSortHelper(arr);
    animateSorting(animations, sortedArray);
  };

  const quickSort = (arr) => {
    setIsSorting(true);
    const animations = []; // Initialize animations array

    const partition = (low, high) => {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        animations.push([j, high]); // Compare
        if (arr[j] < pivot) {
          i++;
          animations.push([i, j, true]); // Swap
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      animations.push([i + 1, high, true]); // Swap
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    };

    const quickSortHelper = (low, high) => {
      if (low < high) {
        const pivotIndex = partition(low, high);
        quickSortHelper(low, pivotIndex - 1);
        quickSortHelper(pivotIndex + 1, high);
      }
    };

    quickSortHelper(0, arr.length - 1);
    animateSorting(animations, arr);
  };

  const heapSort = (arr) => {
    setIsSorting(true);
    const animations = [];

    const heapify = (n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;

      if (largest !== i) {
        animations.push([i, largest, true]); // Swap
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(n, largest);
      }
    };

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
      heapify(arr.length, i);
    for (let i = arr.length - 1; i > 0; i--) {
      animations.push([0, i, true]); // Swap
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(i, 0);
    }

    animateSorting(animations, arr);
  };

  const shellSort = (arr) => {
    setIsSorting(true);
    const animations = [];
    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        while (j >= gap && arr[j - gap] > temp) {
          animations.push([j, j - gap]); // Compare
          arr[j] = arr[j - gap];
          j -= gap;
        }
        arr[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }

    animateSorting(animations, arr);
  };

  const radixSort = (arr) => {
    setIsSorting(true);
    const animations = [];
    const maxNum = Math.max(...arr);
    let digitPlace = 1;
    while (Math.floor(maxNum / digitPlace) > 0) {
      const buckets = Array.from({ length: 10 }, () => []);
      for (let num of arr) {
        const digit = Math.floor(num / digitPlace) % 10;
        buckets[digit].push(num);
      }
      arr = [].concat(...buckets);
      digitPlace *= 10;
    }

    animateSorting(animations, arr);
  };

  const animateSorting = (animations, finalArray) => {
    const speedMap = { 1: 1000, 2: 500, 3: 200, 4: 50 };
    const animationSpeed = speedMap[speed];

    animations.forEach((animation, index) => {
      const timeoutId = setTimeout(() => {
        const bars = document.getElementsByClassName("array-bar");

        if (animation.length === 2) {
          // Comparison highlight
          const [barOneIdx, barTwoIdx] = animation;
          bars[barOneIdx].style.backgroundColor = "yellow";
          bars[barTwoIdx].style.backgroundColor = "yellow";
        } else if (animation.length === 3) {
          // Swap animation
          const [barOneIdx, barTwoIdx] = animation;
          const barOneHeight = bars[barOneIdx].style.height;
          bars[barOneIdx].style.height = bars[barTwoIdx].style.height;
          bars[barTwoIdx].style.height = barOneHeight;

          bars[barOneIdx].style.backgroundColor = "green";
          bars[barTwoIdx].style.backgroundColor = "green";
        }
      }, index * animationSpeed);
      timeoutIds.current.push(timeoutId);
    });

    // Reset state after sorting
    const resetTimeoutId = setTimeout(() => {
      setArray(finalArray);
      const bars = document.getElementsByClassName("array-bar");
      for (let bar of bars) {
        bar.style.backgroundColor = "#4caf50";
      }
      setIsSorting(false);
    }, animations.length * animationSpeed);
    timeoutIds.current.push(resetTimeoutId);
  };

  return (
    <div className="visualizer-container">
      <h1>Sorting Visualizer</h1>
      {/* Control Panel */}
      <div className="controls">
        <button onClick={generateNewArray} disabled={isSorting}>
          New Graph
        </button>

        <label htmlFor="algorithm">Algorithm:</label>
        <select
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={isSorting}
        >
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="bubbleSort">Bubble Sort</option>
          {/* <option value="mergeSort">Merge Sort</option> */}
          <option value="quickSort">Quick Sort</option>
          {/* <option value="heapSort">Heap Sort</option> */}
          {/* <option value="radixSort">Radix Sort</option> */}
          {/* <option value="shellSort">Shell Sort</option> */}
        </select>

        <label htmlFor="speed">Speed:</label>
        <select
          id="speed"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
        >
          <option value={1}>Slow</option>
          <option value={2}>Normal</option>
          <option value={3}>Fast</option>
          <option value={4}>Very Fast</option>
        </select>

        <button onClick={visualizeSorting} disabled={isSorting}>
          Visualize
        </button>
        <button onClick={cancelVisualization} disabled={!isSorting}>
          Cancel
        </button>
      </div>

      {/* Bar Chart */}
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
