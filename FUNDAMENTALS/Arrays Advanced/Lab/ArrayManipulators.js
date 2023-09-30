
function manipulator(input) {
    let arr = input
        .shift()
        .split(" ")
        .map(Number)
    
    while (input.length > 0) {
        let user_input = input.shift().split(" ")
        let command = user_input.shift();
        let value = Number(user_input.shift());

        switch(command) {
            case "Add":
                arr.push(value);
                break;

            case "Remove":
                arr = arr.filter((a) => a != value);
                break;

            case "RemoveAt":
                arr.splice(value, 1)
                break;

            case "Insert":
                let index = Number(user_input.shift())
                
                arr.splice(index, 0, value)
                break;
        }   
    }

    console.log(arr.join(" "))
}

manipulator(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])