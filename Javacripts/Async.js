

// ________________________ function sequence ________________________________

function second(){
    console.log("this is second function")
}

function first(){
    console.log("this is first function");
}

first()
second()


// ____________________________  JavaScript Callbacks ____________________________________
// A callback is a function passed as an argument to another function.

function display(x){
    console.log(x);
}

function calc(x,y,myCallback){
    if (myCallback == undefined){
        return x+y;
    }
    sum  = x+y;
    myCallback(sum);
    return sum;
}

calc(1,2,display)
console.log(calc(1,2))


// __________________________________ Asynchronous Javascript_____________________________________

// Functions running in parallel with other functions are called asynchronous

function time(){
    console.log("hello world")
}
setTimeout(time,5000)

console.log("this statement is executed before above Hello world")

// ________________________________ JavaScript Promises ___________________________________________

// A Promise contains both the producing code and calls to the consuming code:
// A promise has 4 state
// 1.fulfilled: Action related to the promise succeeded
// 2.rejected: Action related to the promise failed
// 3.pending: Promise is still pending i.e. not fulfilled or rejected yet
// 4.settled: Promise has been fulfilled or rejected

let promise = new Promise(function (resolve, reject) {
	const x = 10;
	const y = 10;
	if (x != y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success, same numners');
	}).
	catch(function () {
		console.log('fail, not same number');
	});



// ________________________ Async and Await in Js______________________________________________
// The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.
// The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.

function async_function() {
	let first_promise = 
		new Promise((resolve, reject) => resolve("Hello"));
	let second_promise = 
		new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Ummed Choudhary");
		}, 2000);
	});
	let combined_promise = 
		Promise.all([first_promise, second_promise]);
	return combined_promise;
}

async function display() {
	let data = await async_function();
	console.log(data);
}

display();

