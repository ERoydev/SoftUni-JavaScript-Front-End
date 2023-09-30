function solve(numbers, arr) {
    for(let i = 0; i < arr.length; i++) {
        let args = arr[i].split(" ");
        let command = args[0];

        if (command === "add") {
            let index = Number(args[1]);
            let element = Number(args[2]);

            numbers.splice(index, 0, element)

        } else if (command === "addMany") {
            let index = Number(args[1]);
            let element = args.slice(2,).map(Number)
       

            for(let i = 0; i < element.length; i++ ){
                numbers.splice(index + i, 0, element[i])
            }

        } else if (command === "contains") {
            let result = numbers.indexOf(Number(args[1]))
            console.log(result)

        } else if (command === "remove") {
            let index = Number(args[1]);

            numbers.splice(index, 1)

        } else if (command === "shift") {
            let positions = Number(args[1]);

            for(let i = 0; i < positions; i ++) {
                numbers.push(numbers.shift())
            }

        } else if (command === "sumPairs") {
            let result = [];
            while (numbers.length > 0) {
                let n1 = numbers.shift();
                if (numbers.length == 0) {
                    result.push(n1)
                    break;
                }

                let n2 = numbers.shift();

                result.push(n1 + n2);
            }
            numbers = result

        } else if (command == "print") {
            console.log(`[ ${numbers.join(", ")} ]`)
        }
    }
        
      
}


solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])