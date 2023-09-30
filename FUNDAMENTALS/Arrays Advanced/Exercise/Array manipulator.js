function solve(arr, commands) {

    for(let i = 0; i < commands.length; i++) {
        let args = commands[i].split(" ")
        let command = args[0];
        let numbers = args.slice(1).map(Number);

        if (command === "add") {
            arr.splice(numbers[0], 0, numbers[1]);

        } else if (command === "addMany") {
            let index = numbers.shift()
            arr.splice(index, 0, ...numbers);

        } else if (command === "contains") {
            let result = arr.indexOf(numbers[0]);
            console.log(result);

        } else if (command === "remove") {
            arr.splice(numbers[0], 1);

        } else if (command === "shift") {
            let element = arr.shift();
            arr.push(element);

        } else if (command === "sumPairs") {
            let result = [];

            while (numbers.length > 0) {
                let n1 = arr.shift()
                let n2 = arr.shift()

                if (!n2) {
                    result.push(n1)
                    break;
                }

                result.push(n1 + n2)
            }
            arr = result

        } else if (command === "print") {
            console.log(`[ ${arr.join(", ")} ]`);
        }
    }
    
}

solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
    'shift 1', 'print'])


