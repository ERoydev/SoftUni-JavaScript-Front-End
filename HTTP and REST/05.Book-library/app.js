

function attachEvents() {
  const loadBooksButton = document.getElementById('loadBooks');
  const baseUrl = 'http://localhost:3030/jsonstore/collections/books/';
  const bookListElement = document.querySelector('tbody');
  const [titleField, authorField] = document.querySelectorAll('input');
  let bookIdInput = document.querySelector('#form input[name=bookId]')

  const submitButton = document.querySelector('div button');
  submitButton.textContent = 'Submit';
  const updateBookButton = document.createElement('button');
  updateBookButton.textContent = 'Update';


  loadBooksButton.addEventListener('click', (e) => {
    fetch(baseUrl)
      .then((res) => {
        return res.json()
      })
      .then(result => {
        const books = Object.keys(result).reduce((acc, _id) => {
          acc.push({_id, ...result[_id]})
          return acc;
        }, []);
        
        for(let book of books) {
          createBookItem(book)
        }
      })
    
  })

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // First i take the data to send it to the server
    const title = titleField.value;
    const author = authorField.value;

    // I make POST request this time
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        author,
      })
    })
      .then(res => res.json())
      .then(result => {
        const bookElement = createBookItem({title, author});

        titleField.value = '';
        authorField.value = '';
      })
      .catch(err => {
        console.log(err);
      })

  });
  

  function createBookItem(book) {
    const tr = document.createElement('tr');

    const tdTitle = document.createElement('td');
    tdTitle.textContent = book.title;

    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = book.author

    const tdButtons = document.createElement('td');

    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit';
    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';

    tdButtons.appendChild(buttonEdit)
    tdButtons.appendChild(buttonDelete)

    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdButtons)


    buttonEdit.addEventListener('click', (e) => {
      // Edit
      e.preventDefault();

      if (buttonEdit.textContent == 'Cancel') {
        titleField.value = '';
        authorField.value = '';
        bookIdInput.value = '';

        updateBookButton.replaceWith(submitButton);
        buttonEdit.textContent = 'Edit';
        tr.removeAttribute('data-update')


        return;
      }

      titleField.value = book.title;
      authorField.value = book.author;
      bookIdInput.value = book._id;

      buttonEdit.textContent = 'Cancel';
      submitButton.replaceWith(updateBookButton);
      tr.setAttribute('data-update', true)

      updateBookButton.addEventListener('click', updateData.bind(null, e, buttonEdit))
      
    })

    buttonDelete.addEventListener('click', (e) => {
      // Delete
      e.preventDefault();
      const bookId = book._id;

      fetch(`${baseUrl}/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    })

  }

  function updateData(e, buttonEdit) {
    const title = titleField.value;
    const author = authorField.value;
    const bookId = bookIdInput.value

    if (!bookId) {
      return;
    }

    fetch(`${baseUrl}/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        author,
        _id: bookId
      })
    })
      .then(res => res.json())
      .then(data => {
          const result = bookListElement.querySelector('tr[data-update=true]')
          
          const titleTd = result.firstChild;
          const authorTd = titleTd.nextSibling;
          
          titleTd.textContent = title;
          authorTd.textContent = author;

          titleField.value = '';
          authorField.value = '';

          updateBookButton.replaceWith(submitButton);
          buttonEdit.textContent = 'Edit';
      })
  }

}

attachEvents()
