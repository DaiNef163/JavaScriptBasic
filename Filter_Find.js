let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let infor = [
  {
    name: "A",
    age: 10,
  },
  {
    name: "B",
    age: 11,
  },
  {
    name: "C",
    age: 10,
  },
  {
    name: "D",
    age: 13,
  },
];

let filter = infor.filter((item, index) => {
  return item && item.age === 10;
});
console.log(filter);
// let filter = arr.filter(0(item, index) => {
//     console.log(`>>> check filter item `, item , 'index' , index)
//     return item && item>5;
// });

// console.log(filter)

const array = [1, 2, 3, 4, 5];
let found = array.find((item, index) => {
  return item > 2;
});

console.log(found);

let find = infor.find(() => {});
