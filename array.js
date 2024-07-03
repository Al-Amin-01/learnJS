var age=[24,25,22,24];
console.log(age);
console.log(age[1]);
var position=age.indexOf(22);
console.log(position)
age.push(25);
age.unshift(98);
console.log(age);
age.shift();
age.pop();
console.log(age);
var part=age.slice(1,3);
console.log(part);