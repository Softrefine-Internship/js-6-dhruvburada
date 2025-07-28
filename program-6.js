// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function fetchData(url, attemps) {
  console.log(`Fetching data from ${url}..... attempts : ${attemps}`);
  return new Promise((resolve, reject) => {
    if (attemps > 0) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => {
          console.error("Error fetching data:", error);
          fetchData(url, attemps - 1);
        });
    }
  });
}

fetchData("https://fake-json-api.mock.beeceptor.com/users", 2).then((data) =>
  console.log(data)
);

fetchData("https://", 2).then((data) => console.log(data)); //fails to fetch
