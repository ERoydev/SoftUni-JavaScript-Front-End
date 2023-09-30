const toAdd = document.getElementsByClassName(".target")

const row = document.createElement("div")

let squares = {1:['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white'],
2: ['white', 'black', 'white', 'black','white', 'black', 'white', 'black']}

for (let i = 1; i < 9; i++) {
  picker = 0;
  if (i % 2 != 0) {
    picker = 1;
  }

  let spanElement = documet.createElement("span")
  spanElement.classList.add(`${squares[picker][i - 1]} board`)
  
  row.appendChild(spanElement);

  toAdd.appendChild(row);
}


{/* <div>
          <span class="black board"></span>
          <span class="white board"></span>
        </div> */}