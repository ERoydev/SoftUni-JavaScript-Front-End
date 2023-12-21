function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const showMoreButton = document.querySelector('button');
    const main = document.querySelector('#main');
    createProfiles()

    async function createProfiles() {
        const response = await fetch(baseUrl);
        const result = Object.values((await response.json()));

        result.forEach((row) => {
            const div = document.querySelector('.profile');
            const divProfile = div.cloneNode(true);

            const lock = divProfile.querySelector('input[value="lock"]');
            const unlock = divProfile.querySelector('input[value="unlock"]');
            
            const username = divProfile.querySelector('input[name="user1Username"]');
            const email = divProfile.querySelector('input[name="user1Email"]');
            const age = divProfile.querySelector('input[name="user1Age"]');
            const button = divProfile.querySelector('button');
            const hiddenFields = divProfile.querySelector('.user1HiddenFields');
            hiddenFields.style.display='none';

            button.addEventListener('click', showHiddenFields);
            
            username.value = row.username;
            email.value = row.email;
            age.value = row.age;
            
            divProfile.style.display='inline-block';
            main.appendChild(divProfile)
        })
    }

    function showHiddenFields(e) {
        const hiddenField = e.target.parentNode.querySelector('.user1HiddenFields');
        const lock = e.target.parentNode.querySelector('input[value="lock"]');
        const unlock = e.target.parentNode.querySelector('input[value="unlock"]');

        if(e.target.textContent == "Show more" && lock.checked != 1) {
            hiddenField.style.display='block';
            e.target.textContent = "Hide it";

        } else if(e.target.textContent == "Hide it" && lock.checked != 1) {
            hiddenField.style.display='none';
            e.target.textContent = "Show more";
        }
    
    }
   
}