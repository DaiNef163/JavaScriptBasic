
// let sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(2,3))

let obj = {
    name : "nam",
    address : 'QT',
    getName: function(){
        return this.name;
    },
    getAddress :function(){
        return this.address;
    }
}

console.log(obj.getName() , obj.getAddress())