function solve(speed, area) {
    let constraints = {
        city: 50,
        motorway: 130,
        residential: 20,
        interstate: 90
    }
    let result = ""

    if (speed <= constraints[area]) {
        result = `Driving ${speed} km/h in a ${constraints[area]} zone`

    } else {
        let status = "";
        let difference = speed - constraints[area]

        if (difference > 20 && difference <= 40) {
            status = "excessive speeding"

        } else if (difference <= 20) {
            status = "speeding"

        } else {
            status = "reckless driving"
        }

        result = `The speed is ${difference} km/h faster than the allowed speed of ${constraints[area]} - ${status}`
    }

    console.log(result)

}

solve(21, 'residential')