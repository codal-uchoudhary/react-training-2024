// JavaScript function

function sum(a,b,c){      // none executable statement
    return a+b+c;
}
console.log(sum(1,2,3));

// A JavaScript function can also be defined using an expression.A function expression can be stored in a variable
const sum2=function (x,y,z){return x+y+z;}     // executable statement
console.log(sum2(1,2,3))

// arrow funciton  (this keyword is not allow in the arrow function)
const sum3=(x,y,z) => {return x+y+z;}
console.log(sum3(1,2,3))


// _______________________________ function hoisting_______________________________

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Because of this, JavaScript functions can be called before they are declared:

console.log(avg(2,8));

function avg(a,b){
    let ans = a+b;
    ans = ans/2;
    return ans;
}

//_______________________________ self invoking funciton ___________________________________________

//A self-invoking expression is invoked (started) automatically, without being called.
(function (){
    console.log("self invoking function")
})();



// _________________________________ function parameter ________________________________________________

function welcome(name='sir'){   // by default parameter
    console.log("welcome "+name)
}

welcome("ummed")
welcome()

function devide(a,b){
    if (b== undefined){
        b=2;
    }
    return a/b;
}

console.log(devide(10))
console.log(devide(10,5))

function add_n(...args){      // pass areguments as an array using rest(...) parameter
    let sum = 0;
    for (let i of args){
        sum = sum+i;
    }
    return sum;
}
console.log(add_n(1,2,3,4,5,6,7));

// The Argument Object

// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).

function Max(){
    let max = -Infinity;
    for (let i of arguments){
        if (i>max){
            max= i;
        }
    }
    return max;
}

console.log(Max(1,2,3,4,5,6,7,8,9,10))

// Note :- Arguments are Passed by Value and Objects are Passed by Reference

obj1 = {name:"ummed",lname:"choudhary"}

function display(obj1){
    obj1['name']="sukhram";
    console.log(obj1);
}
display(obj1);
console.log(obj1)

// ___________________________________ call method ____________________________________

const person={
    firstName :'rahul',
    lastName:"choudhary",
    fullName:function (){
        return this.firstName + " "+this.lastName;
    }
}

console.log(person.fullName())

const p1 = {
    firstName:"ummed",
    lastName:"choudhary"
}
console.log(person.fullName.call(p1))

// With call(), an object can use a method belonging to another object.

// __________________________________ apply method _________________________________________

// Apply method is sililar to the call() method.The apply() method is very handy if you want to use an array instead of an argument list.
const student={
    firstName : "ummed",
    lastName :'choudhary',
    fullname:function (state,country){
        return (this,this.firstName+" "+this.lastName+" address "+state+country)
    }
}

const s1 = {
    firstName:"pappu",
    lastName:"don"
}

console.log(student.fullname.apply(s1,['Raj','India']));

// _________________________________ bind() method _______________________________________________

// With the bind() method, an object can borrow a method from another object.

const person1={
    firstName:"john",
    lastname:"cina",
    fullName:function(){
        return this.firstName+this.lastname;
    }
}

const member = {
    firstname:"roman",
    lastname:"ambrose",
}

let fname=person1.fullName.bind(member)
console.log(fname)


//______________________________ refrenece and primitive____________________________________________

// A primitive type has a fixed size in memory. For example, a number occupies eight bytes of memory, and a boolean value can be represented with only one bit.

let num = 10;

function change_num(x){
    x = x*10;
    return x;
}

console.log(num)
change_num(num)
console.log(num)

// Objects, arrays, and functions are reference types. so , refrence contain real address of argument.

cars = ['c1','c2','c3'];

function change_cars(ary){
    ary[0]='c100'
    return ary
}

console.log(cars)
change_cars(cars)
console.log(cars)