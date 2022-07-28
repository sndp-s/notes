//  on, call() method :
//----------------------------------------------------------------------------------------

// In the following obj we have a firstname, a lastname.
let name = {
    firstname: "sandeep",
    lastname: "sharma",
}

// here is an another obj with the same kind of data.
let name2 = {
    firstname: "anvie",
    lastname: "sharma",
}

// here is a method that prints full name from its 'this' context and hometown from the argument passed to it. 
let printFullName = function(hometown) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown);
}

// Function borrowing:
// function borrowing is using(borrowing) a function with a supplied 'this' context.
// every function in JS has access to this special method called, call()
// lets call the 'call' on the function we wanna call/
// first argument to 'call' is the reference of the object(context) we want to bind the called function's 'this' variable to.
// rest of the arguments to 'call' are the arguments we might want to supply to the function we are 'call'-ing.

printFullName.call(name, "mira road");

printFullName.call(name2);

//  on, apply() method :
//----------------------------------------------------------------------------------------
// the only difference between the call and apply methods is the way we pass the arguments.

printFullName.apply(name2, ["mira road"]);


//  on, bind() method :
//----------------------------------------------------------------------------------------
// bind method is called in the same way as the call method
// bind method bind the supplied context to the function and returns the modified copy back.

let printMyName = printFullName.bind(name2, "vasai");
printMyName();