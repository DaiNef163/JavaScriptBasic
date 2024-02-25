let sum = (a, b, callback) => {
  let tong = a + b;
  // setTimeout(() => {
  //     callback(tong);
  // }, 5000);

  let i = 0;
  let timer = setInterval(() => {
    callback(tong);
    i++;
    if (i === 5) {
      clearInterval(timer);
    }
  }, 1000);
};

let printSum = (message) => {
  console.log("PRint ", message);
};

sum(1, 2, printSum);
