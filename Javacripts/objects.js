const obj = {'name':"ummed","age":20,"gender":"male"}
obj.color='brown'
console.log(obj)

const obj2 = obj    // will not create an new object
obj2.age=21

console.log(obj)
console.log(obj2)

for(let i in obj){
    console.log(i," ",obj[i])
}

student={fname:'suresh',lname:'alawat',age:16,address:{state:"Raj",district:"jodhput"}}
console.log(student)

console.log(student['address']['state'])
console.log(student.address.state)

// convert object to an array

let myarray = Object.values(student)
console.log(myarray)


// __________________________ JavaScript Object Constructors _________________________________________________

function Person(fname,lname,age){
    this.firstname=fname;
    this.lastname = lname;
    this.age = age;
}

const p1 = new Person('ummed','choudhary',20)

p1.age=21
p1.color='brown'
console.log(p1)
console.log(typeof(p1))

