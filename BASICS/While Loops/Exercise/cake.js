
function cake(input) {
  let width = Number(input[0]);
  let height = Number(input[1]);
  let index = 2;
  const piece = 1;
  let cakePieces = width * height;
  let command = input[index]
  let over = false

  while(command != "STOP") {
    cakePieces -= Number(command);
    if (cakePieces < 0) {
      over = true;
      break;
    }

    index++
    command = input[index]
  }
  if (over) {
    console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)
  } else {
    console.log(`${cakePieces} pieces are left.`)
  }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])