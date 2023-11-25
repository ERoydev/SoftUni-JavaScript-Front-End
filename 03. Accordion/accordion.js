function toggle() {
    const extension = document.getElementById('extra');
    const ButtonEl = document.getElementsByClassName('button')[0];

    if (extension.style.display == 'none') {
        extension.style.display='block';
        ButtonEl.textContent='Less'
    } else {
        extension.style.display = 'none';
        ButtonEl.textContent='More'
    };
   
}