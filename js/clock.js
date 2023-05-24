const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// setTimeout(sayHello, 5000);

const date = new Date();
console.log(date)

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())