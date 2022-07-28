// *** Akshay's tutorial was not a very good one,
//  read this topic from other sources as well
// and prepare an implementation of my own.
// thanks. mic drop.


// Debouncing in JS

let count = 0;
const getData = () => {
  // Calling an API and fetching the data
  console.log("fetching the data...", count++);
};

// const doSomeMagic = function (fn, delay) {
//   return function () {
//     let context = this,
//       args = arguments;

//     let timer = setTimeout(() => {
//       getData.apply(context, args);
//     }, delay);
//   };
// };

// const betterFunction = doSomeMagic(getData, 300);

// const doSomeMagic = function (fn, delay) {
//   return function () {
//     let context = this,
//       args = arguments;

//     let timer = setTimeout(() => {
//       getData.apply(context, args);
//     }, delay);
//   };
// };

// const betterFunction = doSomeMagic(getData, 300);

// betterFunction();