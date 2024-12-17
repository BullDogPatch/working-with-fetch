const h3 = document.querySelector('.json-heading');

async function getDataFromApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('RESPONSE', response);
  const data = await response.json();
  console.log(data);
  const title = data.title;
  return title;
}

getDataFromApi().then((title) => {
  h3.textContent = title;
});

// USING AN IIFE
// (async () => {
//   const title = await getDataFromApi();
//   h3.textContent = title;
// })();

const h2 = document.querySelector('.github-user');

async function getGithubData() {
  const response = await fetch('https://api.github.com/users/bulldogpatch');
  const data = await response.json();
  console.log(data.bio);
  return data.bio;
}

getGithubData().then((data) => {
  h2.textContent = data;
});

const p = document.querySelector('.chuck-norris-joke');

async function getChuckNorrisJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();

  console.log(data.value);
  return data.value;
}
getChuckNorrisJoke().then((data) => {
  p.textContent = data;
});
