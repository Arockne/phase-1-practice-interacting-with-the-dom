
function intervalCounter() {
  const counter = document.querySelector('#counter');
  return setInterval(() => {
    counter.textContent = Number(counter.textContent.trim()) + 1;
  }, 1000)
}

function buttons() {
  let interval = intervalCounter();
  const minus = document.querySelector('#minus');
  minus.addEventListener('click', decrementCounter);
  
  const plus = document.querySelector('#plus');
  plus.addEventListener('click', incrementCounter);
  
  const like = document.querySelector('#heart');
  like.addEventListener('click', likeMessage);
  
  let paused = false;
  const pause = document.querySelector('#pause');
  pause.addEventListener('click', e => {
    pauseApp()
    if (!paused) {
      paused = true;
      clearInterval(interval);
    } else {
      paused = false;
      interval = intervalCounter();
    }
  });

  let form = document.querySelector('#comment-form');
  form.addEventListener('submit', addComments)

}

function incrementCounter() {
  const counter = document.querySelector('#counter');
  counter.textContent = Number(counter.textContent.trim()) + 1;
}

function decrementCounter() {
  const counter = document.querySelector('#counter');
  counter.textContent = Number(counter.textContent.trim()) - 1;
}


const likeCount = {};

function likeMessage() {
  const num = document.querySelector('#counter').textContent.trim();

  incrementLikes(num);
  removeDuplicateLikes(num);
  createAndAppendMessage(num);
}


function incrementLikes(num) {
  if (!likeCount[num]) {
    likeCount[num] = 1;
  } else {
    likeCount[num]++;
  }
}

function removeDuplicateLikes(num) {
  const messageElements = Array.from(document.querySelector('.likes').children);
  messageElements.forEach(message => {
    const messageNum = message.textContent.split(' ')[0];
    if (messageNum === num) {
      message.remove();
    }
  })
}

function createAndAppendMessage(num) {
  const likeList = document.querySelector('.likes');
  
  const li = document.createElement('li');
  li.textContent = `${num} has been liked ${likeCount[num]} time`;
  
  likeList.appendChild(li);
}

function pauseApp(e) {
  const pause = document.querySelector('#pause');
  const notPause = Array.from(document.querySelectorAll('button')).filter(btn => btn.id !== 'pause');
  const currentText = pause.textContent.trim();
  if (currentText === 'pause') {
    pause.textContent = 'resume';
    notPause.forEach(btn => btn.disabled = true);    
  }
  if (currentText === 'resume') {
    pause.textContent = 'pause';
    notPause.forEach(btn => btn.disabled = false);
  }
}

function addComments(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const comments = document.querySelector('#list');
  const inputElement = document.createElement('p');
  inputElement.textContent = input.value;
  comments.appendChild(inputElement);
  e.target.reset();
}

buttons();