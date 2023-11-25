function generateReport() {
    
    let personObjects = {};
    let personAllObjects = [];
    let columnSetNumbers = [];

    let columnsAll = document.querySelectorAll('thead tr th input');
    const data = document.querySelectorAll('tbody tr')
    
    for(let index = 0; index < columnsAll.length; index ++){
        let checkbox = columnsAll[index].checked;
        if(checkbox) {
            columnSetNumbers.push(index);
        }
        
    }

    let collumnTitles = document.querySelectorAll('thead tr')[0].getElementsByTagName('th');
    let rowsCount = document.querySelectorAll('tbody tr').length;
    
    for(let row = 0; row < rowsCount; row ++) {
        columnSetNumbers.forEach((element) => {
            let key = collumnTitles[element].textContent.trim().toLowerCase();
            let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[element].textContent
            personObjects[key] = value;
        })

        personAllObjects.push(personObjects)
        personObjects = {};
    }
    document.getElementById('output').innerHTML = JSON.stringify(personAllObjects)
}


