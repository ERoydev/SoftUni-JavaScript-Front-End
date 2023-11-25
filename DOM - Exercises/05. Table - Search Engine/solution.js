function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInput = document.getElementById('searchField')

   function onClick() {
      const searchedWord = searchInput.value;
      const tableRows = Array.from(document.querySelectorAll('tbody tr'));
      
      for(const row of tableRows) {
         let trimmedTextcontent = row.textContent.trim();
         console.log(trimmedTextcontent)
         
         if(row.classList.contains('select')) {
            row.classList.remove('select')
         }

         if(trimmedTextcontent.includes(searchedWord)) {
            row.classList.add('select')
         }
      }
      searchInput.value = '';
      
   }
}