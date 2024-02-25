const arr = [1, 22, 3, 546, 123, 4865];
arr.sort();
console.log(arr);
arr.sort((item1, item2) => {
  item1 - item2;
});
console.log(arr);
