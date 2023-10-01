
function grades(num) {
    let result = "";

        if (num < 3) {
            result = "Fail";
            console.log(`${result} (2)`)

        } else if (num >= 3 && num < 3.50) {
            result = "Poor";
            console.log(`${result} (${num.toFixed(2)})`)

        } else if (num >= 3.50 && num < 4.50) {
            result = "Good";
            console.log(`${result} (${num.toFixed(2)})`)
        } else if (num >= 4.50 && num < 5.50) {
            result = "Very good";
            console.log(`${result} (${num.toFixed(2)})`)

        } else if (num >= 5.50) {
            result = "Excellent";
            console.log(`${result} (${num.toFixed(2)})`)
        }

}

grades(2.99)