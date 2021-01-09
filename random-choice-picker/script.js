const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

// Reads what we type in the textarea
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  // Listens for Enter key to be pressed and calls randomSelect
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  // Handles trimming off empty strings and trims off unwanted spaces
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  // Clears the tags
  tagsEl.innerHTML = '';

  // Loops through the area of tags and adds spans with class of tag to the container with the id of tag
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

// Cycle through the area 30 times and then calls pickRandomTag
function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// Identifies random index of the tag array to pick
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

// Adds highlight to the tag
function highlightTag(tag) {
  tag.classList.add('highlight');
}

// Removes highlight from the tag
function unHighlight(tag) {
  tag.classList.remove('highlight');
}
