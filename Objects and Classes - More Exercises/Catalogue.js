
function catalogue(products) {
  let result = {}
  
  for(let el of products) {
    let groupType = el[0];
    if(!Object.keys(result).includes(groupType)) {
      result[groupType] = []
    }
    let data = el.split(" : ")
    data.splice(-1, 0, ': ')
    result[groupType].push(`${data.join('')}`);
  }

  const sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
  
  for(let el of sortedResult) {
    console.log(el[0])
    for(let product of el[1].sort((a, b) => a.localeCompare(b))) {
      console.log(`  ${product}`)
    }
  }
}


catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])