
function array(arr) {
    let uniqueElements = [];

    for(const el of arr) {
        if(!uniqueElements.includes(el)) {
            uniqueElements.push(el)
        }
    }

    console.log(uniqueElements.join(" "))

}

array([7, 8, 9, 7, 2, 3,
    4, 1, 2]
    )