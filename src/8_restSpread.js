// ES6 Object Destructuring & Spread
const employee = {
  name: "Jerry",
  age: 22,
  country: "UK"
};

const { age } = employee;
// console.log("obj destructuring ", age);

const staff = {
  ...employee,
  role: "manager"
};
// console.log("obj spread ", staff);

// ES6 Array Destructuring & Spread
const arr1 = ["apple", "banana", "carrot", "papaya"];
const [item1, item2, ...restItems] = arr1;
// console.log("arr destructuring ", item1, item2, restItems);

const arr2 = [...arr1, "car", "toys"];
// console.log("arr spread ", arr2);
