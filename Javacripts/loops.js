// JavaScript Loops

// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for in - loops through the properties of an object
// for of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do while - also loops through a block of code while a specified condition is true

for ( let i=0;i<=4;i++){
    console.log("this is loop-"+i)
}



obj2 = {1:"one",2:"two",3:"three"}
for (let i in obj2){
    console.log(i+" "+obj2[i])
}


const num = [1, 2, 3];
let sum = 0;
for (let x of num) {
  sum+= x;
}
console.log(sum)



let i=0;
while(i<3){
    console.log("hello")
    i++;
}



let k=0;
do {
    console.log("this will print")
    k--;
  }
  while (k > 10);