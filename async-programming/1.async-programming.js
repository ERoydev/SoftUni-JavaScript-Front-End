console.log('start');


setTimeout(() => {
  console.log('middle');
}, 0)

console.log('end');


function someFunc(callback) {
  
  callback(1, 2);
}

function calc(a, b) {
  console.log(a + b);
}

someFunc(calc);