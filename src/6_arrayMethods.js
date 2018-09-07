// ES6 Array Methods
const books = [
  {
    title: "Harry Potter",
    author: "Jenny Tan",
    price: 12
  },
  {
    title: "Alice in Wonderland",
    author: "Wendy James",
    price: 8
  },
  {
    title: "Crazily Rich Asians",
    author: "Kevin Kwan",
    price: 100
  }
];

// Array Map
books.map((b, i) => {
  // console.log(`book ${i}: ${b.title}`);
});

// Array Filter
const filteredBooks = books.filter(b => {
  return b.price < 50;
});

// console.log("filterBooks ", filteredBooks);

// Array Some
const someBooks = books.some(b => {
  return b.price > 120;
});

// console.log("someBooks ", someBooks);

// Array Every
const everyBooks = books.every(b => {
  return b.price < 80;
});

// console.log("everyBooks ", everyBooks);

// Array Reduce
const sum = books.reduce((acc, item) => {
  return (acc += item.price);
}, 0);

// console.log("reduceBooks ", sum);

// Array forEach
books.forEach(b => {
  // console.log(b.title);
});

const attendees = {
  john: 32,
  kim: 35,
  ali: 18,
  steph: 22
};
