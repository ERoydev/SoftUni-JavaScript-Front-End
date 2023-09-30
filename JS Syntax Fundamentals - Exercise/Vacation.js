function solve(groupNumber, typeGroup, dayWeek) {
    let price = 0;
    switch (typeGroup) {
        case "Students":
            if (dayWeek === "Friday") {
                price = 8.45;
            } else if (dayWeek === "Saturday") {
                price = 9.80;
            } else if (dayWeek === "Sunday") {
                price = 10.46;
            }
            break;

        case "Business":
            if (dayWeek === "Friday") {
                price = 10.90;
            } else if (dayWeek === "Saturday") {
                price = 15.60;
            } else if (dayWeek === "Sunday") {
                price = 16;
            }
            break;

        case "Regular":
            if (dayWeek === "Friday") {
                price = 15;
            } else if (dayWeek === "Saturday") {
                price = 20;
            } else if (dayWeek === "Sunday") {
                price = 22.50;
            }
            break;
    }

    let totalPrice = price * groupNumber;

    if (typeGroup === "Students" && groupNumber >= 30) {
        totalPrice *= 0.85;
    }

    if (typeGroup === "Business" && groupNumber >= 100) {
        totalPrice -= 10 * price;
    }

    if (typeGroup === "Regular" && groupNumber >= 10 && groupNumber <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday")


// solve(40,
//     "Regular",
//     "Saturday")