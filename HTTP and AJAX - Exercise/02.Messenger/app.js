function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const sendButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');
    const textarea = document.querySelector('#messages');

    const inputName = document.querySelector('input[name="author"]');
    const inputMessage = document.querySelector('input[name="content"]');

    sendButton.addEventListener('click', async () => {

        let isValidMessage = inputName.value !== '' && inputMessage.value !== ''

        const message = {
            author: inputName.value,
            content: inputMessage.value,
        }

        if(isValidMessage) {
            await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(message)
            });

        }

        inputName.value = '';
        inputMessage.value = '';
    })
    
    refreshButton.addEventListener('click', async () => {
        textarea.textContent = '';

        const response = await fetch(baseUrl);
        const result = await response.json();
        const messagesToDisplay = [];

        for(let el of Object.values(result)) {
            messagesToDisplay.push(`${el.author}: ${el.content}`);
        }
        textarea.textContent = messagesToDisplay.join('\n')
    })

}
attachEvents();