function solve() {
  let textArea = document.getElementById('input').value.split('.');
  const divEl = document.getElementById('output');
  textArea.pop()
  
  while(textArea.length > 0) {
    let output = textArea.splice(0, 3)
    .map((x) => x.trimStart());
    output[output.length-1] += '.'

    let p = document.createElement('p')
    p.textContent = output.join('.');
    divEl.appendChild(p);
  }

}