function shop(product, quantity) {
    let prices = {
        water: 1,
        snacks: 2,
        coffee: 1.50,
        coke: 1.40
    }
    console.log((quantity * prices[product]).toFixed(2))
}

shop("water", 5)

