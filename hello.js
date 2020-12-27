// //code example one
// const sayHello = function () {
//   console.log ("Hello, world");
// }

// sayHello();


// //code example two
// const sayHello = function (name) {
//   console.log ("Hello, " + name);
// }

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");


//code example three
const sayHelloToConsole = function (name) {
  console.log("Hello, "+name);
}
sayHelloToConsole('John');

//code example four
const returnSayHello = function (name) {
  return "Hello, "+name;
}
const greeting = returnSayHello('John');
console.log(greeting);