
function recieve(charOne, charTwo) {
    let start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let result = [];

    for(let i = start+1; i < end; i++){
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(" "));
}

recieve("C", "#");

