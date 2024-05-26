function delayedPromise(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
}

const promises = [
  delayedPromise("promise1 value", 1000),
  delayedPromise("promise2 value", 2000),
  delayedPromise("promise3 value", 3000),
  delayedPromise("promise4 value", 4000),
  delayedPromise("promise5 value", 5000),
];

Promise.all(promises)
  .then((values) => {
    console.log("Усі проміси виконані. Результати:", values);
  })
  .catch((error) => {
    console.log("Сталася помилка:", error);
  });
