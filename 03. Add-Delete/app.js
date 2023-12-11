function addItem() {
    const ulItems = document.querySelector('#items');
    const inputElement = document.querySelector('#newItemText')

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    const deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.textContent = "[Delete]";
    
    deleteLink.addEventListener('click', clickHandler)

    liElement.appendChild(deleteLink)
    ulItems.appendChild(liElement);


    function clickHandler(e) {
        e.currentTarget.parentNode.remove()
    }
}