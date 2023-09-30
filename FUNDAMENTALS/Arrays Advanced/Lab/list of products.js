
function sortProducts(arr) {
    let sortedProducts = arr.sort()
    
    let result = sortedProducts.map(function(a, i) {
        return `${i+1}.${a}`
    })

    console.log(result.join("\n"))
}

sortProducts(['Potatoes', 'Tomatoes', 'Onions',
'Apples'])