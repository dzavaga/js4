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
function checkAge() {
  try {
    let name = prompt("Please enter your name:");
    let age = prompt("Please enter your age:");
    let status = prompt("Please enter your status (admin, moderator, user):");

    if (age === "") throw new Error("The field is empty! Please enter your age");
    if (isNaN(age)) throw new TypeError("The age must be a number");
    if (age < 18 || age > 70) throw new RangeError("You are not allowed to watch the movie due to your age");
    if (status !== "admin" && status !== "moderator" && status !== "user") throw new EvalError("Invalid status");

    alert("You are allowed to watch the movie");

  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}
checkAge();

