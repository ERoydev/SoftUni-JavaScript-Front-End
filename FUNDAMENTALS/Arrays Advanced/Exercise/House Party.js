function solve(input) {
    let namesGoing = [];

    for(const element of input) {
        let user_input = element.split(" ")
        let name = user_input.splice(0, 1).join("")
        
        if (user_input.join(" ") == "is going!") {
            if (!namesGoing.includes(name)) {
                namesGoing.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (namesGoing.includes(name)) {
                let index = namesGoing.indexOf(name)
                namesGoing.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }

    }

    console.log(namesGoing.join("\n"))
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)