let name = {
  firstname: "sandeep",
  lastname: "sharma",
};

let printName = function (hometown, state, country) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state +", " + country);
};

let printMyName = printName.bind(name, "mumbai");

printMyName("maharastra", "india");

Function.prototype.mybind = function (...args) {
  let func = this,
  params = args.slice(1);
  return function (...args2) {
    func.apply(args[0], [...params, ...args2]);
  }
};

let printMyName2 = printName.mybind(name, "malad");
printMyName2("maharastra", "india");
