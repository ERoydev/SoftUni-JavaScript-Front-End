function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

  const inputFirstName = document.querySelector('input[name="firstName"]');
  const inputLastName = document.querySelector('input[name="lastName"]');
  const inputFacultyNumber = document.querySelector('input[name="facultyNumber"]');
  const inputGrade = document.querySelector('input[name="grade"]');
  const tableBody = document.querySelector('tbody');
  const submitButton = document.querySelector('#submit');
  loadStudents()

  submitButton.addEventListener('click', async () => {
    const data = {
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      facultyNumber: inputFacultyNumber.value,
      grade: inputGrade.value,
    }

    await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    loadStudents()
  })

  async function loadStudents() {
    tableBody.innerHTML = '';
    const response = await fetch(baseUrl);
    const result = await response.json();

    Object.values(result).forEach((student) => {
      const tr = document.createElement('tr');
      const data = Object.values(student);

      for(let i = 0; i < 4; i ++) {
        const th = document.createElement('th');
        th.textContent = data[i];
        tr.appendChild(th);
      }
      tableBody.appendChild(tr);
    })

  }
}

attachEvents();