// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delay(fn) {
  setTimeout(fn, 2000);
}

function sayHi() {
  console.log("hello");
}

delay(sayHi);
