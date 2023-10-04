
function solve(n) {
    const TOTALSQUARES = 10;
    const percent = Math.trunc(n / 10);
    let result = n < 100 ? `[${"%".repeat(percent) + ".".repeat(TOTALSQUARES - percent)}]`
    : "Complete!";
    
    let finalMessage = n === 100 ? `[${"%%%%%%%%%%"}]` : "Still loading...";
    console.log(`${n}% ${result}`);
    console.log(finalMessage)
}


solve(100)