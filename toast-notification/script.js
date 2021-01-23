const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  // const randNum = Math.floor(Math.random() * 4);

  // toasts.innerHTML += `
  //         <div class="toast">${messages[randNum]}</div>
  //     `;
  // setTimeout(() => {
  //   toasts.innerHTML = '';
  // }, 5000);

  // Brad's way
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
