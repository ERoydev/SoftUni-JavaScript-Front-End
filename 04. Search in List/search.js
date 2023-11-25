function search() {
   const inputText = document.getElementById('searchText');
   const data = Array.from(document.getElementsByTagName('li'))
   const result = document.getElementById('result');
   let matches = 0;

   data
   .forEach((el) => {
      el.style.fontWeight='normal';
      el.style.textDecoration='none';
   })

   for(let el of data) {
      if(el.textContent.includes(inputText.value)) {
         matches += 1;
         el.style.textDecoration='underline';
         el.style.fontWeight='bold';
      }
   }

   result.textContent = `${matches} matches found`
}
