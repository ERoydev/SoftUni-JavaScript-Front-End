function attachEvents() {
    const loadButton = document.querySelector('#btnLoadPosts');
    const viewButton = document.querySelector('#btnViewPost');

    const postSelect = document.querySelector('#posts');
    let postTitle = document.querySelector('#post-title');
    const postBody = document.querySelector('#post-body');
    const ulComments = document.querySelector('#post-comments');

    let allPosts = {};


    loadButton.addEventListener('click', async () => {
        postSelect.innerHTML = '';
        
        const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
        allPosts = await response.json();

        for(const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObj.title;
            
            postSelect.appendChild(option);
        }

    viewButton.addEventListener('click', async () => {
        
        const postId = postSelect.value;
        postTitle.textContent = allPosts[postId].title;
        postBody.textContent = allPosts[postId].body;

        const response = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const allComments = await response.json();

        ulComments.innerHTML = '';

        const filteredComments = Object.values(allComments).filter(e => e.postId == postId);
        filteredComments.forEach((comment) => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            ulComments.appendChild(li);
        })
    })

    })

}

attachEvents();