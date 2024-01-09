const name="vijayavardhan"

const section="7th sem B"
const city="gulbarga"
const city1="Udupi"

console.log(`hello my name is ${name} and I am studying in ${section}\n`);
console.log(`I am ${name} and i stay in ${city} and studying in ${city1}`);

// new way of declaring string 
const stringName=new String("vijayavardhan")


//methods of Strings
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());

console.log(name);

console.log(name.charAt('2'));
console.log(name.indexOf('h'));
console.log(name.italics());


const substring=name.substring(2,5)
console.log(substring);


const newstringone="     vardhan      \n"
console.log(newstringone);
console.log(newstringone.trim(newstringone));


const url="https://www.w3schools.com/js/4655";
console.log(url.replace('65','-'));

console.log(url.includes("45"))