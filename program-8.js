// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchData(url) {
  return fetch(url).then((res) => res.json());
}

function timeout(ms) {
  return new Promise((res, rej) =>
    setTimeout(() => rej(`Time out ${ms} ms`), ms)
  );
}

Promise.race([
  fetchData("https://fake-json-api.mock.beeceptor.com/users"),
  timeout(1000),
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
