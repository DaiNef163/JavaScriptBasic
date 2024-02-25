let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}
console.log("Check value arr" , arr);


let arrMap = arr.map((item , index)=>{
    item = item*item
    return item;
})

console.log("Check value arr [" ,  arr.join(" "),']');
console.log("Check value maparr" , arrMap);