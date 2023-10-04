
function palindrome(arr) {
    
    for(item of arr) {
        let el = item.toString();
        if (el == [...el].reverse().join("")) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

}

palindrome([123, 323, 421, 121]);

