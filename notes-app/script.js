const addBtn = document.getElementById('add');

// Fetch any notes in local storage and convert them to objects
const notes = JSON.parse(localStorage.getItem('notes'));

// If notes exist lets insert them into the dom
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

// Adds a new note to the dom. If there is any in local storage
function addNewNote(text = '') {
  // Creates the container and adds the note class, along with html markup
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  // Inserts the text into notes
  textArea.value = text;
  main.innerHTML = marked(text);

  // Delete functionality removes from dom and calls update ls to re-aquire what is in local storage after removal of note
  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLs();
  });

  // Toggles area to type or rendered div
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  // Logs what is typed into the textarea and then enters it into local storage
  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLs();
  });

  // This is the final insertion of the note
  document.body.appendChild(note);
}

// Stores text area input into local storage
function updateLs() {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
