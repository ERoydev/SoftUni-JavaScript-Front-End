function tracker(arr) {
  const words = arr.shift().split(' ')
  let data = {};

  for(const word of words) {
    let count = arr.filter((x) => x === word).length;
    data[word] = count;
  }

  let sortedWords = Object.entries(data)
  .sort((a, b) => b[1] - a[1])
  .forEach((el) => console.log(`${el[0]} - ${el[1]}`))
}

tracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])