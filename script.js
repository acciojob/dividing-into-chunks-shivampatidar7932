const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (currentSubarray.reduce((sum, num) => sum + num, 0) + currentElement <= n) {
      currentSubarray.push(currentElement);
    } else {
      result.push([...currentSubarray]);
      currentSubarray = [currentElement];
    }
  }

  // Add the last subarray
  if (currentSubarray.length > 0) {
    result.push([...currentSubarray]);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
