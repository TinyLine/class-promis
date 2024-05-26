function randomDelay(text, value) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      console.log(text);
      resolve(value);
    }, delay);
  });
}

const promiseA = randomDelay("promise A", "value 1");
const promiseB = randomDelay("promise B", "value 2");
const promiseC = randomDelay("promise C", "value 3");
const promiseD = randomDelay("promise D", "value 4");
const promiseE = randomDelay("promise E", "value 5");
Promise.race([promiseA, promiseB, promiseC, promiseE, promiseD])
  .then((value) => {
    console.log("Найшвидший проміс повернув:", value);
  })
  .catch((error) => {
    console.log("Сталася помилка:", error);
  });
