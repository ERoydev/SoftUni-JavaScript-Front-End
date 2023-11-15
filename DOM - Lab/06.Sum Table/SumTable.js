function sumTable() {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  const elements = document.getElementsByTagName('td');
  const result = document.getElementById('sum');
  let total = 0;
  for(const el of elements) {
    let current = el.textContent;
    if(isNumeric(current)) {
      total += Number(current);
    }
  }
  result.textContent = total
}