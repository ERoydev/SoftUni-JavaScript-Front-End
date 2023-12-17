function loadRepos() {
   const apiUrl = 'https://api.github.com/users/testnakov/repos'

   fetch(apiUrl)
      .then((res) => {
         return res.text()
      })
      .then((result) => {
         const div = document.querySelector('div')
         div.textContent = result
      })
}