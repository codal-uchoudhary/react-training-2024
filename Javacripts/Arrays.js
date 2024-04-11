

// Javascript Arrays

const cars=["volvo","BMW","tata","hundai"]
console.log(cars)

const itmes = new Array(1,100,'a')
console.log(itmes)

// convert array to the string
str = cars.toString()
console.log(str)


// _____________________Array Properties and Methods _________________

console.log(cars.length)

let num = [2,4,1,7,6]
let = num.sort()
console.log(num)

console.log(num[-1])    // -ve indexing doesn't working in js array

// at():
console.log(cars[0])
console.log(cars[1])
console.log(cars[-1])    // -ve index will not work

// join():- method also joins all array elements into a string.

str = cars.join(">>")
console.log(str)      // return a string of an elements sepreated bu >>

// poping and pushing  , this methods works at end positions of an array
// pop() return the removed element and push() return the lenght of a new array

console.log(cars)
cars.pop()
console.log(cars)
cars.push("bugati")
console.log(cars)

// shinf() and unshift() methods

let fruits = ['apple','banana',"mango"]
fruits.shift()      // remove an element from the begning
console.log(fruits)
fruits.unshift('graps')
console.log(fruits)   // add the new elememt at the begning

delete fruits[0]
console.log(fruits) // item at 0 index will be deleted

