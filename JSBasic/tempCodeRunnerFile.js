
let sum = (a , b ,callback) =>{
    let tong = a+b;
    // setTimeout(() => {
    //     callback(tong);
    // }, 5000);

    setInterval(() => {
        callback(tong);
    }, 1000);
}

let printSum = (message) =>{
    console.log("PRint ",message)
}