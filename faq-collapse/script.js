// Selects all the buttons with this .faq-toggle class
const toggles = document.querySelectorAll('.faq-toggle');

// Loops through the nodelist and adds a click handler to each button that will target the parent node. The .toggle method adds and removes the .active class from the parent
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
