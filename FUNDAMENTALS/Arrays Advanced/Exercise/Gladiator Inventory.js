function solve(input) {
    let inventory = input.shift().split(" ");

    while (input.length > 0) {
        let args = input.shift().split(" ")
        let command = args[0];
        let item = args[1];

        if (command === "Buy") {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }

        } else if (command === 'Trash') {
            let itemIdx = inventory.indexOf(item);
            if (itemIdx !== -1) {
                inventory.splice(itemIdx, 1);
            }

        } else if (command === "Repair") {
            let itemdIdx = inventory.indexOf(item);

            if (itemdIdx !== -1) {
                inventory.splice(itemdIdx, 1);
                inventory.push(item);
            }

        } else if (command === 'Upgrade') {
            let [equipment, upgrade] = item.split("-")

            let indexIdx = inventory.indexOf(equipment)

            if (indexIdx !== -1) {
                inventory.splice(indexIdx+1, 0, `${equipment}:${upgrade}`)
            }
        }
        
    }

    console.log(inventory.join(" "))
}

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])