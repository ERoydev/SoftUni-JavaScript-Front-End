function addItem() {
    const inputElement = document.getElementById('newItemText');

    const newListElement = document.createElement('li');
    newListElement.textContent = inputElement.value

    const ulList = document.querySelector('#items');

    ulList.appendChild(newListElement);
}