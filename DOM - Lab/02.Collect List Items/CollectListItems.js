// function extractText() {
//     let listElements = Array.from(document.getElementsByTagName('li'));
//     let result = document.getElementById('result');
//     for(const li of listElements) {
//         let el = li.textContent
//         result.value += `${el}\n`;
//     }
// }

function extractText() {
    const listElements = Array.from(document.querySelectorAll('#items > li'));
    const result = document.getElementById('result');
    listElements
    .forEach((li) => {
        result.textContent += li.textContent + '\n';
    })
}