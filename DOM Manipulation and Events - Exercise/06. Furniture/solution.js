function solve() {
  const allButtons = document.querySelectorAll('button');
  allButtons[0].addEventListener('click', generate);
  allButtons[1].addEventListener('click', buy);
  const textArea = Array.from(document.querySelectorAll('textarea'))[1];

  let boughtFurniture = [];
  let totalPrice = 0;
  let average = [];

  function generate(e) {
    let info = e.target.parentNode.querySelector('textarea').value.slice(1, -1);
    let jsonToObject = JSON.parse(info);

    const tBody = document.querySelector('tbody');
    let rowElement = document.querySelector('tbody tr');
    let clonedElement = rowElement.cloneNode(true);

    clonedElement.children[0].children[0].src = jsonToObject.img
    clonedElement.children[1].children[0].textContent = jsonToObject.name;
    clonedElement.children[2].children[0].textContent = jsonToObject.price;
    clonedElement.children[3].children[0].textContent = jsonToObject.decFactor;
    clonedElement.querySelector('input').disabled = false;
    tBody.appendChild(clonedElement);

    console.log(clonedElement)
  }

  function buy(e) {
    allCheckBoxes = Array.from(document.querySelectorAll('input'));

    allCheckBoxes.forEach((box) => {
      if(box.checked) {
        const rowElement = box.parentNode.parentNode;
        boughtFurniture.push(rowElement.children[1].children[0].textContent);
        totalPrice += Number(rowElement.children[2].children[0].textContent);
        average.push(Number(rowElement.children[3].children[0].textContent))
      }
    })

    let averageSum = average.reduce((a, b) => a + b)

    textArea.textContent += `Bought furniture: ${boughtFurniture.join(', ')}`
    textArea.textContent += `\nTotal price: ${totalPrice.toFixed(2)}`
    textArea.textContent += `\nAverage decoration factor: ${averageSum / average.length}`
  }
}