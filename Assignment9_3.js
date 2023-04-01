// Create a new Set object with four random numbers from 0 to 10
const setObj = new Set();

while (setObj.size < 4) {
  setObj.add(Math.floor(Math.random() * 11));
}

// Check if the set contains the number 8
if (setObj.has(8)) {
  console.log("The set contains the number 8.");
} else {
  console.log("The set does not contain the number 8.");
}
