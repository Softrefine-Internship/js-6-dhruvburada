// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function fetchData(url, attemps) {
  console.log(`Fetching data from ${url}..... attempts left : ${attemps}`);
  return new Promise((resolve, reject) => {
    if (attemps > 0) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => {
          console.error("Error fetching data:", error);
          return fetchData(url, attemps - 1)
            .then(resolve)
            .catch(reject);
        });
    } else {
      throw new Error("No more attempts left");
    }
  });
}

fetchData("https://fake-json-api.mock.beeceptor.com/users", 2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// fetchData("https://", 0).then((data) => console.log(data)); //fails to fetch
