function deleteByEmail() {
    const tabelRows = Array.from(document.querySelectorAll('tbody tr'))
    const deleteResult = document.querySelector('#result')
    const inputEmail = document.querySelector('input[name="email"]').value;
    let changed = false;

    for(let row of tabelRows) {
        if(inputEmail == row.children[1].textContent) {
            changed = true;
            row.remove();
        }
    }

    if(changed) {
        deleteResult.textContent = 'Deleted';
    } else {
        deleteResult.textContent = 'Not found.';
    }
}