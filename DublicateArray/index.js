// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(uniqueArr); // [1, 2, 3, 4, 5]




const users = [
  { id: 1, name: "jay" },
  { id: 2, name: "Aman" },
  { id: 1, name: "jay" }
];

const uniqueUsers = users.filter(
  (user, index, self) =>
    index === self.findIndex((u) => u.id === user.id)
);

console.log(uniqueUsers);

