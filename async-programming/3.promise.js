
const promise = new Promise(function (resolve, reject) {
  if (Math.random() < 0.5) {
    return reject("Marriage is canceled!");
  }

  setTimeout(() => {
    resolve('Just Married :)');
  }, 2000);


});

promise
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(promise)
  })