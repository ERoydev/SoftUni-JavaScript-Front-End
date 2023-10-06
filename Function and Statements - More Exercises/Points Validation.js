
function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    const printOrder = {
        0: [Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2), `{${x1}, ${y1}} to {${0}, ${0}}`],
        1: [Math.sqrt((x2 - 0)** 2 + (y2 - 0) ** 2), `{${x2}, ${y2}} to {${0}, ${0}}`],
        2: [Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2), `{${x1}, ${y1}} to {${x2}, ${y2}}`]
    }


    for(let i = 0; i < 3; i ++) {
        let result = "";

        if (printOrder[i][0] % 1 !== 0) {
            result = "is invalid";
        } else {
            result = "is valid";
        }

        console.log(printOrder[i][1]+ " " + result);
    }
}

pointsValidation([2, 1, 1, 1]);