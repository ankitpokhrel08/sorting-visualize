export const bubbleSort = async (array, setArray, speed) => {
  let arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Update the array state after each swap
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  }
};
