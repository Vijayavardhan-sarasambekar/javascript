// const score=100 
// console.log(score);
// //explicitly defining number

// const payment=new Number(100)
// console.log(payment);

// // making string
// console.log(payment.toString().charAt('2'));
// console.log(payment.toString().length);
// // toFixed
// console.log(payment.toFixed(3));
// console.log(payment.toFixed(2));

// // toPrecision
// const othernumber=88.33479432
// console.log(othernumber.toPrecision(3));
// console.log(othernumber.toPrecision(2));

// // 
// const secondnumner=1000000
// console.log(secondnumner.toLocaleString('en-IN'));




// ************************* MATH ****************************

// abs(absolute)
console.log(Math.abs(-44));
console.log(Math.abs(44));

//round
console.log(Math.round(23.099));

// ceil
console.log(Math.ceil(12.1));
// floor
console.log(Math.floor(12.9));

// min
console.log(Math.min(3,47,19));

//max
console.log(Math.max(3,47,19))

//random always between 0 to 1

console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
// console.log((Math.random()+1))

const min=20
const max=25

console.log(Math.floor(Math.random()*(max-min+1))+min)



