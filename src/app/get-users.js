// to cache it in-memory
let users;

export default async function getUsers() {
  if (users) {
    return users;
  }

  // introduce just a bit of load in case we are showing a loader
  const startTime = Date.now();
  users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

  // add some properties of our own
  users = users.map((user) => ({
    username: user.username.toLowerCase().replace('_', '-'),
    handle: '@' + user.username,
    ...user
  }))

  const delay = 1500 - (Date.now() - startTime);
  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  return users;
}