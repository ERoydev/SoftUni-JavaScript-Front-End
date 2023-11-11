function inventory(arr) {
  const info = arr.reduce((inventoryData, elements) => {
    let [heroName, heroLevel, items] = elements.split(' / ')
    inventoryData.push({'Hero': heroName, 'level': heroLevel, 'items': items})
    return inventoryData
  }, [])
  .sort((a, b) => a.level - b.level)
  .forEach((element) => {
    console.log(`Hero: ${element.Hero}`)
    console.log(`level => ${element.level}`)
    console.log(`items => ${element.items}`)
  })
}

inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])