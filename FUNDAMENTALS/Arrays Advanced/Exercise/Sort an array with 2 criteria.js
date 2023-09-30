function sorting(input) {
    
    let sorted = input.sort((a, b) =>{
        if (a.length !== b.length) {
            return a.length - b.length;
        } 
        return a.localeCompare(b);
    })

    let sortedArray = input.sort((a, b) =>{
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sortedArray.join("\n"))
}

sorting(['alpha',
'beta',
'gamma'])