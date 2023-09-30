
function solve(input) {
    const HEALTH = 100
    let health = HEALTH;
    let coins = 0;
    let rooms = []
    let died = false;

    for(el of input) {
        rooms = el.split("|")    
    }
    let arrayLength = rooms.length

    for(let i = 0; i < arrayLength; i++){
        let currentRoom = rooms[i].split(" ")
        let command = currentRoom[0];
        let value = Number(currentRoom[1]);

        if (command === "potion") {
            let missingHealth = HEALTH - health

            if (value > missingHealth) {
                value = missingHealth
            }

            health += value
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)

        } else if (command === "chest") {
            coins += value
            console.log(`You found ${value} coins.`)

        } else {
            let monster = command
            health -= value

            if (health > 0) {
                console.log(`You slayed ${monster}.`)
            } else {
                console.log(`You died! Killed by ${monster}.`)
                console.log(`Best room: ${i + 1}`)
                died = true;
                break;
            }
        }
    }

    if (!died) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}
   

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])