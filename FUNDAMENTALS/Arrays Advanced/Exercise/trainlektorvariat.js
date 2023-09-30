function arrays(input) {
    let wagon = input[0]
    .split(" ")
    .map(Number)
    let wagon_capacity = Number(input[1]);
    let ArrayLength = input.length;

    for(let i = 2; i < ArrayLength; i ++) {
        operation = input[i].split(" ");

        if (operation[0] == "Add") {
            wagon.push(Number(operation[1]))

        } else {
            let value = Number(operation[0]);

            for(let i = 0; i < input.length; i ++) {
                if (value + wagon[i] <= wagon_capacity) {
                    wagon[i] += value;
                    break;
                }
            }
        }
    }

    console.log(wagon.join(' '))

}

arrays(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)