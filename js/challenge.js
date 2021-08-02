//counter**
  //increments by one every second
//+- butttons increment or decrement the counter**
//the like button
  //appends a list element like so:
    //# has been liked numTimes time
    //#
      //the current counter number
    //numTimes
      //number that get incremented a certain amount of times depending on how many times the like button was pressed on it
      //also gets appended underneath buttons
//pause button
  //stops counter
  //changes opacity of buttons to show they are not activated
  //includes like, +, -, submit buttons
  //changes to resume
    //when pressed resumes all functionality
//input field
  //anything that gets submitted in this field get appended to the comments section

//implement updateCounter
function intervalCounter() {
  const counter = document.querySelector('#counter');
  return setInterval(() => {
    counter.textContent = Number(counter.textContent.trim()) + 1;
  }, 1000)
}

function buttons() {
  const minus = document.querySelector('#minus');
  minus.addEventListener('click', decrementCounter);
  
  const plus = document.querySelector('#plus');
  plus.addEventListener('click', incrementCounter);
  
  const like = document.querySelector('#heart');
  like.addEventListener('click', likeMessage);
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

intervalCounter();
buttons();