function solve(input) {

    let guestList = [];

    for(const person of input) {
        
        let details = person.split(" ")
        let personName = details[0];

        if (details.includes('not')) {

            if (guestList.includes(personName)) {
                let nameIdx = guestList.indexOf(personName)
                
                if (nameIdx !== -1) {
                    guestList.splice(nameIdx, 1)
                } 
            } else {
                console.log(`${personName} is not in the list!`)
            }

        } else {
            if (guestList.includes(personName)) {
                console.log(`${personName} is already in the list!`)
            } else {
                guestList.push(personName)
            }
        }
    }

    guestList.forEach(person => console.log(person))
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)