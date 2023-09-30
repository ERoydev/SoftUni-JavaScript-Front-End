
function OldBooks(input) {
  let book = input[0];
  let index = 1;
  let search = input[index]
  let checked = 0

  while(search != book) {
    if (search == "No More Books") {
      console.log("The book you search is not here!")
      console.log(`You checked ${checked} books.`)
      break;
    }

    checked++
    index++
    search = input[index]
    
  }
  if (search == book) {
    console.log(`You checked ${checked} books and found it.`)
  }
}

OldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])