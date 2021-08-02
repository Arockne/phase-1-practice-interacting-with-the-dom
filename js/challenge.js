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