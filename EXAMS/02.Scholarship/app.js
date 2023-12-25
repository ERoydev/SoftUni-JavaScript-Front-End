window.addEventListener("load", solve);

function solve() {
  const nextButton = document.querySelector('#next-btn');
  const ulList = document.querySelector('#preview-list');
  const candidatesList = document.querySelector('#candidates-list');

  const studentName = document.querySelector('#student');
  const university = document.querySelector('#university');
  const number = document.querySelector('#score');

  nextButton.addEventListener('click', (e) => {

    if (!studentName.value || !university.value || !number.value) {
      return;
    }

    const liApplication = document.createElement('li');
    liApplication.classList.add('application')

    const article = document.createElement('article');
    
    const h4 = document.createElement('h4');
    h4.textContent = studentName.value;

    const p = document.createElement('p');
    p.textContent = `University: ${university.value}`;

    const pScore = document.createElement('p');
    pScore.textContent = `Score: ${number.value}`;

    article.appendChild(h4);
    article.appendChild(p);
    article.appendChild(pScore);

    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'edit';
    buttonEdit.classList.add('action-btn', 'edit')
    buttonEdit.addEventListener('click', edit)

    const buttonApply = document.createElement('button');
    buttonApply.textContent = 'apply';
    buttonApply.classList.add('action-btn', 'apply');
    buttonApply.addEventListener('click', apply)

    liApplication.appendChild(article);
    liApplication.appendChild(buttonEdit);
    liApplication.appendChild(buttonApply);

    ulList.appendChild(liApplication);

    nextButton.setAttribute('disabled', 'disabled')
    studentName.value = '';
    university.value = '';
    number.value = '';
  })

  function edit(e) {
    const elements = e.target.parentNode.children[0].children;
    const universityValue = elements[1].textContent.split(": ");
    const scoreValue = elements[2].textContent.split(": ");

    studentName.value = elements[0].textContent;
    university.value = universityValue[1];
    number.value = scoreValue[1];

    ulList.innerHTML = '';
    nextButton.removeAttribute('disabled');
  }

  function apply(e) {
    const liEl = e.target.parentNode
    const editBut = liEl.querySelector('.edit');
    const applyBut = liEl.querySelector('.apply')

    editBut.remove();
    applyBut.remove();

    candidatesList.appendChild(liEl);
    ulList.innerHTML = '';
    nextButton.removeAttribute('disabled')
  }
}
  