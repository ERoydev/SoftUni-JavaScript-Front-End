function extract(content) {
  let result = [];
  const re = /\([A-Za-z\s]+\)/g
  let element = document.getElementById(content).textContent;
  let res = [...element.matchAll(re)];
  for(let el of res) {
    let item = el[0].replace(/[{()}]/g, '');
    result.push(item);
  }
  let text = result.join('; ');
  return text
}