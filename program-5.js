// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

function fetchMultiple(urls) {
  return Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
}

fetchMultiple([
  "https://fake-json-api.mock.beeceptor.com/users",
  "https://fake-json-api.mock.beeceptor.com/companies",
]).then((res) => console.log(res));
