// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

function fetchMultiple(urls) {
  return Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
}

fetchMultiple([
  "https://fake-json-api.mock.beeceptor.com/users",
  "https://fake-json-api.mock.beeceptor.com/companies",
])
  .then((res) => console.log(res))
  .catch((err) => console.error(`Error ${err}`));

//async await syntax

async function fetchAsync(urls) {
  try {
    let responses = urls.map((url) => fetch(url).then((res) => res.json()));
    let results = await Promise.all(responses);
    return results;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

fetchAsync([
  "https://fake-json-api.mock.beeceptor.com/users",
  "https://fake-json-api.mock.beeceptor.com/companies",
])
  .then((data) => console.log("Fetched data:", data))
  .catch((err) => console.error("Caught error in .then():", err));
