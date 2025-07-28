// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function getData() {
  return new Promise((resolve, reject) => {
    let response = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err)); // This will log the data to the console
