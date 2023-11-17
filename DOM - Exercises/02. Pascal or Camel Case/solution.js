function solve() {
  let text = document.getElementById('text').value.split(' ');
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  let convertedMsg = 'Error!';

  if(namingConvention === 'Camel Case') {
    text
    .forEach((el, i) => {
      if(i == 0) {
        text[i] = el[0].toLowerCase() + el.slice(1).toLowerCase()
      } else {
        text[i] = el[0].toUpperCase() + el.slice(1).toLowerCase()
      }
      
    });

    convertedMsg = text.join('')
    
  } else if (namingConvention === 'Pascal Case') {
    text = text.map((t) => t[0].toUpperCase() + t.slice(1).toLowerCase())
    convertedMsg = text.join('')
  } 

  result.textContent = convertedMsg;
}