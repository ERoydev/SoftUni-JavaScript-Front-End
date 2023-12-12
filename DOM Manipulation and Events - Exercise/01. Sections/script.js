function create(words) {
   const parentDiv = document.querySelector('#content');

   for(let w of words) {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = w;
      pElement.style.display='none'

      divElement.addEventListener('click', displayParagraph)

      divElement.appendChild(pElement);
      parentDiv.appendChild(divElement);
   }

   function displayParagraph(e) {
      e.target.children[0].style.display='block'
   }
}