var a = 9;

function ab() {
  var a = 10;
  //   nav.style = "block";
  //   var a = 10;
  a = 20;
  console.log("7", a);
}

ab();

function fun() {
  //   nav.style = "none";
}

fun();

console.log("16", a);

// var i = {
//   v: a,
// };

// console.log(i);

// var vs const

// var a = 10;

// a = 100;

// var a = 190;

// const a = 20;

// a = 200;

// const a = 10;

//function scope
function start() {
  var x = 210;
  var b = 10;
  console.log(x + b);
}

//block scope
{
}

//Global Scope
var s = 00;

start();

console.log(x, b);
