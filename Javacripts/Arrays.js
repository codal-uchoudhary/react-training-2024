

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

let number = [1,2,3,4,5]

number[5]=6
console.log(number)


//_______________________________________ merging arrays____________________________________
let num_1 = [1,2,3]
let num_2 = [3,4,5]

// concate():- this method add array to the another array
//The concat() method does not change the existing arrays. It always returns a new array.

let num_3 =num_1.concat(num_2)
console.log(num_1)
console.log(num_2)
console.log(num_3)

num_2=num_2.concat(num_1)
console.log(num_2)

var num_4 = num_1.concat(num_2,num_3)  // concate method take any number of arguments
console.log(num_4)

num_1 = num_1.concat('10','20','30')  // concate method also take strings as an arguments
console.log(num_1)

// copyWithin():-method copies array elements to another position in an array:

num_1=[1,2,3]
console.log(num_1)
num_1.copyWithin(2,0)
console.log(num_1)

num_1=[1,2,3,4,5]
console.log(num_1)
num_1.copyWithin(1,0,2)  // at index 1, elements from 0,2 will be copied, lenght will not change
console.log(num_1)

// __________________________________flattening an array_________________________________

//flat() method creates a new array with sub-array elements concatenated to a specified depth.

num_1 = [[1,2],[3,4],[5,6]]
num_1 = num_1.flat()
console.log(num_1)

num_2 = [1,2,[3,4],[[10,20,30],[40,50]]]
num_2 = num_2.flat(2)   // this will flat an array at 2nd level depth
console.log(num_2)


//_________________________________Splicing and Slicing Arrays_________________________________

//The splice() method can be used to add new items to an array:

num_1 = [1,2,3,4,5]
num_1.splice(0,0,-3,-2,-1)
console.log(num_1)

num_2 = [1,2,3,4,5]
console.log(num_2)
num_2.splice(0,2,10,20,20)   // at 0 , remove 2 elements from 0, add the remaining parameters at 0.
console.log(num_2)

num_3 = [1,2,3,4,5]
num_3.splice(2,1)               // at index 2, remove 1 element from 0 and add nothing
console.log(num_3)

// toSplice():- this is same as the splice method , but create a new array without changing the original one


// slice method():-The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

num_1 = [1,2,3,4,5]
num_2 = num_1.slice(2)   // it will give array  with elements [3,4,5]
console.log(num_2)
num_2 = num_1.slice(1,3)   // [2,3]
console.log(num_2)

// toString();- this method retun a string of coma seprated values

num_1 = num_1.toString()
console.log(num_1)

//____________________________________ Array sort ___________________________________________

num_1 = [1,2,5,4,8,3]
num_2 = ['a','A','b','e']

num_1.sort()
num_2.sort()

console.log(num_1)
console.log(num_2)

num_1.reverse()
console.log(num_1)

// toSorted() method new sorted array without changing the original one

num_3 = num_1.toSorted()
console.log(num_1)
console.log(num_3)


// toReversed() give new array without changing the original one

console.log(Math.min.apply(null,num_1))
console.log(Math.max.apply(null,num_1))


//___________________________________ Array Iteration________________________________________________

// forEach

num_1=[1,2,3,4,5]

function multi(value,index,array){
    array[index] = value*10
}
console.log(num_1)
num_1.forEach(multi)
console.log(num_1)

// map()

function divide(value){
    return value/10
}
console.log(num_1);


num_2 = num_1.map(divide);

console.log(num_1)
console.log(num_2)


// filter()
num_1 = [1,2,20,30,2,6]
function adult(valu){
    return valu > 18
}

num_2 = num_1.filter(adult)
console.log(num_2)

// reduce ()
function sum(total,value){
    return total+value
}

num_3= num_1.reduce(sum)
console.log(num_3)