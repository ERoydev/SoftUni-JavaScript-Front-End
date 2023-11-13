function solve(arr) {
  let words = {};
  for(let word of arr.split(' ')) {
    let currentWord = word.toLowerCase()
    if(words.hasOwnProperty(currentWord)) {
      words[currentWord] += 1;
    } else {
      words[currentWord] = 0;
    }
  }
  let obj = Object.keys(words).filter((x) => words[x] % 2 == 0);
  console.log(obj.join(' '));

}

solve('Cake IS SWEET is Soft CAKE sweet Food')