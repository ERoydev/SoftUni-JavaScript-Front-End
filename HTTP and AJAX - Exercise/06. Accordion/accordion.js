function solution() {
    const section = document.querySelector('#main');
    const buttonUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
    
    articles();
    async function articles() {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        const result = await response.json();

        for(let el of result) {
            const divContainer = document.createElement('div');
            divContainer.classList.add('accordion');

            const divHead = document.createElement('div');
            divHead.classList.add('head');

            const span = document.createElement('span');
            span.innerHTML = el.title;

            const button = document.createElement('button');
            button.classList.add('button');
            button.id = el._id;
            button.textContent = "More";

            button.addEventListener('click', async (e) => {
                const element = e.target.parentNode.parentNode.children[1];
                const p = document.createElement('p');

                if(e.target.textContent == "More") {
                    const id = e.target.id;
                    const response = await fetch(`${buttonUrl}/${id}`);
                    const result = await response.json();

                    p.textContent = result.content;
                    element.appendChild(p);

                    element.style.display='inline';
                    e.target.textContent = "Less";

                } else {
                    element.firstChild.remove()
                    element.style.display='none';
                    e.target.textContent = 'More';
                }
            })

            const divExtra = document.createElement('div');
            divExtra.classList.add('extra');

            divHead.appendChild(span);
            divHead.appendChild(button);

            divContainer.appendChild(divHead);
            divContainer.appendChild(divExtra);
            section.appendChild(divContainer);
        }


    }
}