// Your code here

// Grabs the element with the id="dodger"
var dodger = document.getElementById('dodger');

/* function moveDodgerLeft will move the dodger to the left side of the screen
    We saved the dodger element we got back to a leftNumber variable which will contain
    dodger.style.left.replace. Generall dodger.style.left ="" allows us to
    change the positio of the content on it's axis. We're replacing the px
    that is currently assigned to dodger.style.left ="" <- to an empty string.
    Now that its a string we need to parseInt to change the value to an integer.
    We then save our parsed data to a variable called left.
    The left variable is then compared to 0 on the axis which is the starting point.
    If left is greater than 0 our dodger.style.left position will be changed so that it is -1
    meaning it will never go off of the screen.
*/
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  /* This is how we add an event listener for our function! With document.addEventListener
    the document model will listen for an ArrowLeft key to be pressed, if it is thenit will 
    active our moveDodgerLeft function which will check if the px is greater than 0 and move it
    back into place if it tries to leave the container.
  */
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

