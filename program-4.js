// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

function getToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Token retrived Token : DBURADA07");
    }, 2000);
  });
}

function VerifyToken(token) {
  console.log(`Token being verified ${token}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Token Verified USERID : 123"), 2000);
  });
}

function fetchUser(userid) {
  console.log(`Fetching user from ${userid}`);
  return new Promise((res) => {
    setTimeout(() => {
      res({ name: "Dhruv Burada", age: 21 });
    }, 2000);
  });
}

getToken().then((token) =>
  VerifyToken(token).then((userid) =>
    fetchUser(userid).then((data) => console.log(data))
  )
);
