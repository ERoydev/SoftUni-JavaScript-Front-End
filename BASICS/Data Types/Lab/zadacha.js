function echo(text) {
  let a = text;
  console.log(typeof(a))
  if (typeof(a) === "string" || typeof(a) === "number") {
    console.log(a)

  
  } else {
    console.log('Parameter is not suitable for printing')
  }
}

echo('Hello, JavaScript!')