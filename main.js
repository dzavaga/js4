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

//3
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Parameters must be numbers!');
  }
  return width * height;
}

try {
  let area = calcRectangleArea(5, 10);
  console.log('Rectangle area:', area);
} catch (error) {
  console.error('Error:', error.message);
}
//4
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }

  return months[month - 1];
}

try {
  console.log(showMonthName(5));  // May
  console.log(showMonthName(14)); // throws MonthException with message "Incorrect month number"
} catch (e) {
  if (e instanceof MonthException) {
    console.log(e.name, e.message);
  } else {
    throw e; // re-throw non-MonthException errors
  }
}
//5
class UserException extends Error {
  constructor(message) {
    super(message);
    this.name = "UserException";
  }
}

function showUser(id) {
  if (id < 0) {
    throw new UserException("ID must not be negative: " + id);
  }
  return { id: id };
}

function showUsers(ids) {
  const result = [];
  for (let id of ids) {
    try {
      const user = showUser(id);
      result.push(user);
    } catch (e) {
      console.log(e.message);
    }
  }
  return result;
}

console.log(showUsers([7, -12, 44, 22]));
