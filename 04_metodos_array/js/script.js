const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// 1 - Reverse
const reverseData = data.reverse();
const jsonReverseData = JSON.stringify(reverseData);

console.log(reverseData);
console.log("Data reverse: (JSON.stringify)" + jsonReverseData);

// 2 - find
const highSallary = 5000;

const highestSallary = data.find((user) => user.sallary > highSallary);

console.log(highestSallary);

// 3 - findIndex
const lowestSallary = data.findIndex(
  (user) => user.sallary > 0 && user.sallary < 2000
);

console.log(lowestSallary);

data[lowestSallary].sallary += 200;

console.log(data);

// 4 - includes
const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(4);

console.log(hasFour);

console.log(numbers.includes(21));
