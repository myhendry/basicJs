// Object Methods

const attendees = {
  john: 32,
  kim: 35,
  ali: 18,
  steph: 22
};

// Object.entries
const obje = Object.entries(attendees);
// console.log("object entries ", obje);

// Object.keys
const objk = Object.keys(attendees);
// console.log("object keys ", objk);

// Object.values
const objv = Object.values(attendees);
// console.log("object values ", objv);

const total = objv.reduce((acc, item) => {
  return (acc += item);
});
// console.log("total ", total);
