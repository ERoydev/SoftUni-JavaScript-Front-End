function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadButton = document.querySelector('#btnLoad');
    const createButton = document.querySelector('#btnCreate');
    const ulPhoneBook = document.querySelector('#phonebook');

    const inputPerson = document.querySelector('#person');
    const inputPhone = document.querySelector('#phone');

    let allContacts = {};

    loadButton.addEventListener('click', async () => {
        ulPhoneBook.innerHTML = '';

        const response = await fetch(baseUrl);
        const result = await response.json();

        for(let [id, number] of Object.entries(result)) {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', deleteNumber);

            const li = document.createElement('li');
            li.textContent = `${number.person}: ${number.phone}`;
            li.id = id;
            li.appendChild(deleteButton);
            ulPhoneBook.appendChild(li);
        }
        allContacts = Object.entries(result);
    })

    createButton.addEventListener('click', (e) => {

        const bodyData = {
            person: inputPerson.value,
            phone: inputPhone.value,
        }

        if(inputPerson.value === '' && inputPhone.value === '') {
            return;
        }

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(bodyData)
        })

        inputPerson.value = '';
        inputPhone.value = '';
        loadButton.click()
        
    })


    async function deleteNumber(e) {
        const elId = e.target.parentNode.id;
        const contact = allContacts.filter((x) => x[0] === elId)[0][1];
        const key = contact._id;
        
        const deleteContent = {
            key: {
                person: contact.person,
                phone: contact.phone,
            }
        }

        await fetch(`${baseUrl}/${key}`, {
            method: 'DELETE',
            body: JSON.stringify(deleteContent)
        })

        loadButton.click()
    }
}

attachEvents();