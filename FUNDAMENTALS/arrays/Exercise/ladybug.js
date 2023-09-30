function solve(arr) {
  let size = Number(arr[0]);
  let field = Array(size).fill("0");
  let indexes = arr[1].split(" ");
  let arrayLength = arr.length;

  for (el of indexes) {
    let bug = Number(el);
    if (bug >= 0 && bug < size) {
      field[bug] = "1";
    }
  }

  for (let i = 2; i < arrayLength; i++) {
    let command = arr[i].split(" ");

    let ladybug = Number(command[0]);
    let direction = command[1];
    let fly_length = Number(command[2]);

    if (field[ladybug] === "0") {
      continue;
    }

    if (Number(ladybug) < 0 || Number(ladybug) >= size) {
      continue;
    }

    field[ladybug] = "0";
    while (true) {
      if (direction === "right") {
        ladybug += fly_length;
      } else {
        ladybug -= fly_length;
      }

      if (ladybug >= size || ladybug < 0) {
        break;
      }

      if (field[ladybug] === "0") {
        field[ladybug] = "1";
        break;
      }
    }
  }

  console.log(field.join(" "));
}

solve([5, "3", "-2 left 2", "1 left -2"]);
