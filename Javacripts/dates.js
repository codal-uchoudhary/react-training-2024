// JavaScript Date Objects

const d = new Date('2024-04-11')
console.log(d)

// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.

// new Date() creates a date object with the current date and time

const current_date = new Date()
console.log(current_date)

// create a date object from the date string

const date_from_string = new Date("2024-04-10")
console.log(date_from_string)

const date_6_parameter = new Date(2024,0,11,5,30,10)    // here 0 means January , december = 11
console.log(date_6_parameter) 

const date1 = new Date(2024,16,20)   // it will not give error, 16%12 = 4 
const date2 = new Date(2025,4,20)    // this is as same as above

console.log(date1)
console.log(date2)

const date3 = new Date(2018, 5, 35);  //Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const date4 = new Date(2018,6,5);   // same as above

console.log(date3)
console.log(date4)

const date5 = new Date(2024,4)
console.log(date5)

const date6 = new Date(2018)     // we can't omit month . it will give incorrect date
console.log(date6)


// previous century

const date7 = new Date(20,4,10)    // 1920-4-10
console.log(date7)


// _________________________________ displaying Dates_____________________________________________

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
console.log(typeof(date3))
const string_date1 = date1.toString()
console.log(string_date1)

// for more readable we can use toDateString() method

console.log(date1.toDateString())



// _________________________________JavaScript Get Date Methods__________________________________________-

console.log(date1.getFullYear())
console.log(date2.getDay())   // day 0 = sunday 
console.log(date1.getHours())
console.log(date1.getMonth())
console.log(date1.getTime())    // retunr number of millisecounds scince 01-1970


// _________________________________JavaScript Set Date Methods________________________________________________

const date11 = new Date();

date11.setFullYear(2023);      // we can set year , to an existing object 
date11.setFullYear(2023,10,10)  // we can set year-month-day 
console.log(date11)

date1.setMonth(11);
console.log(date1)

date1.setDate(date1.getDate()+50)   // this will shift the month according to days

const comp = new Date(2020,12)
const comp1 = new Date(2024,12)

if (comp>comp1){
    console.log(comp.getFullYear(), " is greater than ",comp1.getFullYear())
}else{
    console.log(comp1.getFullYear(), " is greater than ",comp.getFullYear())
}
