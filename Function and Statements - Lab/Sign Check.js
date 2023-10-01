function sign(...input) {
    let counter = 0;
    for(let i = 0; i < 3; i ++) {
        if (input[i] < 0 ) {
            counter += 1
        }
    }

    if (counter == 1) {
        console.log("Negative")
    } else if (counter == 2){
        console.log("Positive")
    } else if (counter === 3) {
        console.log("Negative")
    } else {
        console.log("Positive")
    }
}



sign(9, 4, 1)