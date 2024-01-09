// const Mydate=new Date()
// console.log(Mydate.toString());
// console.log(Mydate.toISOString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toJSON());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toLocaleString());

// console.log(Mydate);

//
// const newDate=new Date("2024-01-10") //(YYYY-MM-DD)

// const todaysDate=new Date("1-6-2024")
// console.log(todaysDate.toDateString());

const newDate1=new Date(2024,1,0).getDate() // While giving date in Integers We should provide day-0(SUN)-6(SAT),month from 0(JAN) to 11(DEC)
console.log(newDate1);
// const newDate2=new Date(2024,0,10,3,24,55) // Other 3 parameters are hours,minute,sec
// console.log(newDate1.getMonth());
// console.log(newDate.toString());
// console.log(newDate1.toDateString());
// console.log(newDate2.toLocaleString());


// ************Time Stamp ***********************

// const timestamp = Date.now()
// console.log(Math.floor(Date.now()/20*60*60*1000));
// console.log(timestamp.);
let dateObj=new Date()
let year=dateObj.getFullYear()
let month=dateObj.getMonth()
let lastdate = new Date(year, month , 0).getDay()
// console.log(lastdate.toString());
console.log(lastdate);