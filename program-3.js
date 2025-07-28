//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

function getAllData(urls) {
  return urls.map((url) => {
    return fetch(url).then((res) => res.json());
  });
}

let promises = getAllData([
  "https://fake-json-api.mock.beeceptor.com/users",
  "https://fake-json-api.mock.beeceptor.com/companies",
]);

Promise.all(promises)
  .then((data) => console.log(data))
  .catch((err) => console.log(`Error : ${err}`));
