
// js strings

let name="Ummed Choudhary"
let city='jodhpur'

let text1 = "it's my house"
let text2 = 'this is "water"'

let text = "hello world\\universe"
console.log(text)

// js template strings
let text3 = `it\`s not our "house"`
console.log(text3)


// length of string
console.log(text3.length)

// indexing
const t1 = 'abcdefgijklmnopqurstvwxyz'
console.log(t1[0])
console.log(t1[4])

// ___________________________string methods_______________________

// 1. length :- gives the total lenght og string
const fname = 'ummed'
console.log(fname.length)

// __________________________ Extracting string char__________________

// 2. CharAt() :- returns the character at a specified index
const fname2='sukhram'
console.log(fname2.charAt(1)," ",fname2.charAt(2))

// 3. charCodeAt() :- returns the code of the character at a specified index in a string
console.log(fname2.charCodeAt(0))

// 4. at() :- method returns the character at a specified index.It allows the use of negative indexes while charAt() do not.
console.log(fname2.at(1))
console.log(fname2.at(-1))
console.log(fname2.at(-2))

// 5. Property Access [ ]:- readonly,return undefined if no char is found in string
console.log(fname2[0])
console.log(fname2[1])
console.log(fname2[-1])  // return undefined

// ____________________________ extracting string parts___________________________

// 6. slice(start,end):-returns the extracted part in a new string.
let abcd="ABCDEFGHIJKLMNOPQURSTUVWXYZ"

let abc1 = abcd.slice(0,4)  // end position will not inculuded
let abc2 = abcd.slice(0,280) 
let abc3 = abcd.slice(-10,-1)
let abc4 = abcd.slice(-10)
let abc5 = abcd.slice(10)

console.log(abc1)
console.log(abc2)
console.log(abc3)
console.log(abc4)
console.log(abc5)

// 7. substring():- similar to slice ,but does not work on -ve start and end points

let abc6 = abcd.substring(0,10)
let abc7 = abcd.substring(1)
let abc8 = abcd.substring(-1,-10)  // return string with 0 length
console.log(abc6)
console.log(abc7)
console.log(abc8)

// 8. substr(start,len):- similar to slice , but 2nd parameter define the length of string
let abc9 = abcd.substr(0,10)
let abc10=abcd.substr(0,100)  // return full length
let abc11 = abcd.substr(-2,10)  // retunr only last 2 char

console.log(abc9)
console.log(abc10)
console.log(abc11)

//_________________________ lower and upper case________________________________

// 9. toUpperCase():-
let lname = "choudhary"
lname = lname.toUpperCase()
console.log(lname)

// 10. toLowerCase()
lname = lname.toLowerCase()
console.log(lname)

// 11. cancate():- strings are immutable, so this method always return new string.

let fullname= fname.concat(" ",lname," ","this is my full name") 
console.log(fullname)

// 12. trim():- method removes whitespace from both sides of a string:


let ume1 = "  hello   "
console.log(ume1)
ume1 = ume1.trim()
console.log(ume1)

// 13. trimEnd and trimStart

let ume2 = "    ummed   "
let ume3= "     ummed   "
console.log(ume2.trimStart())
console.log(ume3.trimEnd())

// 14.repeat():-returns a string with a number of copies of a string.

ume3 = ume3.repeat(3)
console.log(ume3)

// 15.replace():- return new string, method replaces a specified value with another value in a string, case sensitive:

let text4 = "this is text 4 from text 4"
let text5 = text4.replace('text','sentence')
console.log(text5)


let text6 = text4.replaceAll('text','sentence')
console.log(text6)

// 16. converting string to an array using split method

let ab1 = abcd.split("")
console.log(ab1)

let ab2 = abcd.split("|")
console.log(ab2)

let ab3 = abcd.split(",")
console.log(ab3)