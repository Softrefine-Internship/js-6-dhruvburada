// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function getData() {
  return new Promise((res, rej) => {
    let response = fetch("https://jsonplaceholder.typicode.com/posts");
    res(response);
  });
}

getData().then((data) => console.log(data)); // This will log the data to the console
