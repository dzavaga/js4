function sumSliceArray(arr, first, second) {
  try {
    first = parseInt(first);
    second = parseInt(second);
    if (isNaN(first) || isNaN(second)) {
      throw new Error("Invalid input");
    }
    if (first >= arr.length || second >= arr.length) {
      throw new Error("Indexes out of range");
    }
    return arr[first] + arr[second];
  } catch (error) {
    console.log("Error:", error.message);
  }
}

const arr = [1, 2, 3, 4, 5];

try {
  const result = sumSliceArray(arr, 2, 4);
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}
// 2
