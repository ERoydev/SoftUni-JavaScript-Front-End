function colorize() {
    const tableEl = Array.from(document.getElementsByTagName('table'))[0].children[0].children;
    for(let idx = 0; idx < tableEl.length-1; idx ++) {
        if(idx % 2 == 0) {
            tableEl[idx+1].style.backgroundColor='teal';
        }
    }
}