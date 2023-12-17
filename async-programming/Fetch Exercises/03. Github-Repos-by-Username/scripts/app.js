function loadRepos() {
	const inputField = document.querySelector('#username').value;
	const ulRepos = document.querySelector('#repos');
	
	const githubAddress = `https://api.github.com/users/${inputField}/repos`

	fetch(githubAddress)
		.then((res) => {
			return res.json()
		})
		.then((result) => {
			for(let el of result){
				let name = el.full_name
				let url = el.html_url

				const liElement = document.createElement('li');
				const anchor = document.createElement('a');
				anchor.href = url;
				anchor.textContent = name;

				liElement.appendChild(anchor);
				ulRepos.appendChild(liElement);
			}
		})
}