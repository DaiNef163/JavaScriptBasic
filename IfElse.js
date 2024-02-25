let a = -2;
// if (a>1) {
//     console.log('a')
// } else console.log('b')

let arr = ["a", "b", "c"];

let i = 0;
while (i < arr.length) {
  i++;
  console.log(i);
  if (arr[i] === "c") {
    console.log("Found it : ", arr[i]);
  }
}
