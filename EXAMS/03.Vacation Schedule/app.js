const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const loadVacationsButton = document.querySelector('#load-vacations');
const divContainerVacations = document.querySelector('#list');
const addVacationButton = document.querySelector('#add-vacation');
const editVacationButton = document.querySelector('#edit-vacation');

loadVacationsButton.addEventListener('click', loadVacations);
const inputName = document.querySelector('#name');
const inputDays = document.querySelector('#num-days');
const inputDate = document.querySelector('#from-date');
let currentIdOfPerson = '';

async function loadVacations(e) {
  const response = await fetch(baseUrl);
  const result = await response.json();

  divContainerVacations.innerHTML = '';

  for(let [id, data] of Object.entries(result)) {
    const div = document.createElement('div');
    div.classList.add('container');

    const h2 = document.createElement('h2');
    h2.textContent = data.name;

    const h3Date = document.createElement('h3');
    h3Date.textContent = data.date;

    const h3Days = document.createElement('h3');
    h3Days.textContent = data.days;

    const changeButton = document.createElement('button');
    changeButton.textContent = 'Change';
    changeButton.classList.add('change-btn');

    changeButton.addEventListener('click', (e) => {
      div.remove();
      const name = div.children[0].textContent;
      const date = div.children[1].textContent;
      const days = div.children[2].textContent;

      inputName.value = name;
      inputDate.value = date;
      inputDays.value = days;

      editVacationButton.disabled=false;
      addVacationButton.disabled=true;
      currentIdOfPerson = id;
    })

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('done-btn');
    doneButton.addEventListener('click', async (e) => {
      await fetch(`${baseUrl}${id}`, {
        method: "DELETE"
      })

      loadVacations();
    })

    div.appendChild(h2);
    div.appendChild(h3Date);
    div.appendChild(h3Days);
    div.appendChild(changeButton);
    div.appendChild(doneButton);
    divContainerVacations.appendChild(div);

    editVacationButton.disabled=true;
  }
}

addVacationButton.addEventListener('click', async (e) => {
  e.preventDefault();

  if (!inputName.value || !inputDays.value || !inputDate.value) {
    return;
  }

  await fetch(baseUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: inputName.value,
      days: inputDays.value,
      date: inputDate.value,
    })
  })

  loadVacations();
  cleanForm();
})

editVacationButton.addEventListener('click', async (e) => {
  e.preventDefault();

  await fetch(`${baseUrl}${currentIdOfPerson}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      _id: currentIdOfPerson,
      name: inputName.value,
      days: inputDays.value,
      date: inputDate.value,
    })
  })

  loadVacations();
  cleanForm();

  editVacationButton.disabled=true;
  addVacationButton.disabled=false;
  
})

function cleanForm(){
  inputName.value = '';
  inputDays.value = '';
  inputDate.value = '';
}