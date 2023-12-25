window.addEventListener("load", solve);

function solve() {
  const studentInput = document.querySelector('#student');
  const universityInput = document.querySelector('#university');
  const scoreInput = document.querySelector("#score");
  const nextButton = document.querySelector("#next-btn");
  const previewListElement = document.querySelector("#preview-list")
  const candidatesList = document.querySelector('#candidates-list');

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!studentInput.value || !universityInput.value || !scoreInput.value) {
      return;
    }

    const liEl = document.createElement("li");
    liEl.className = 'application';

    const articleElement = document.createElement('article');

    const articleHeader = document.createElement('h4');
    articleHeader.textContent = studentInput.value;

    const universityParagraph = document.createElement('p');
    universityParagraph.textContent = `University: ${universityInput.value}`;

    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Score: ${scoreInput.value}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('action-btn', 'edit');

    const applyButton = document.createElement('button');
    applyButton.textContent = 'apply';
    applyButton.classList.add('action-btn', 'apply');

    articleElement.appendChild(articleHeader);
    articleElement.appendChild(universityParagraph);
    articleElement.appendChild(scoreElement);

    liEl.appendChild(articleElement);
    liEl.appendChild(editButton);
    liEl.appendChild(applyButton);

    previewListElement.appendChild(liEl);

    clearForm();

    nextButton.setAttribute('disabled', 'disabled');

    editButton.addEventListener('click', (e) => {
      const studentName = previewListElement.querySelector('h4').textContent;
      const paragraphElements = previewListElement.querySelectorAll('article p');

      const [universityP, scoreP] = Array.from(paragraphElements);

      studentInput.value = studentName;
      universityInput.value = universityP.textContent.split(": ")[1];
      scoreInput.value = scoreP.textContent.split(': ')[1];

      previewListElement.innerHTML = '';
      nextButton.removeAttribute('disabled');
    });

    applyButton.addEventListener('click', (e) => {
      editButton.remove();
      applyButton.remove();

      candidatesList.appendChild(liEl);

      previewListElement.innerHTML = '';

      nextButton.removeAttribute('disabled');
    })
  })

  function clearForm() {
    studentInput.value = '';
    universityInput.value = '';
    scoreInput.value = '';
  }
}
  