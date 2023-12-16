function loadCommits() {
    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    const ulElement = document.querySelector('#commits');

    const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`

    fetch(apiUrl)
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            for(let el of result) {
                const liElement = document.createElement('li')
                liElement.textContent = `${el.commit.author.name}: ${el.commit.message}`
                ulElement.appendChild(liElement)
            }
        })
        .catch((err) => {
            const message = `Error: 404 (Not Found)`
            const liElement = document.createElement('li');
            liElement.textContent = message
            ulElement.appendChild(liElement)
        })
}