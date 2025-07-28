// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchData(url, timeout) {
  return new Promise((res, rej) => {
    let response = fetch(url).then((res) => res.json());
    res(response);
  });
}

function timeout(ms) {
  return new Promise((res, rej) => setTimeout(rej(`Time out ${ms} ms`)));
}

Promise.race([fetchData(), timeout(2000)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
