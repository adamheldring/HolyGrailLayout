/* Adam script for flexbox assigmnent */

window.onload = function() {
  var centerbox = document.getElementById('center');
  var leftbox = document.getElementById('left');
  var rightbox = document.getElementById('right');
  var cardbox = document.getElementById('cardbox')
  var yearbookWidth = window.innerWidth;
  var spaceLeft;

  function calcCenter() {
    console.log(yearbookWidth);
    yearbookWidth = window.innerWidth;
    if(yearbookWidth < 1638 && yearbookWidth > 1198) {
      console.log('tablet');
      centerbox.style.width = "800px";
      spaceLeft = yearbookWidth - (800 + 16) ;
      leftbox.style.width = spaceLeft / 2 + "px";
      rightbox.style.width = spaceLeft / 2 + "px";
    } else if (yearbookWidth < 1198 && yearbookWidth > 816) {
      centerbox.style.width = "800px";
      leftbox.style.width = "49.5%";
      rightbox.style.width = "49.5%";

    } else if (yearbookWidth < 816) {
      centerbox.style.width = "400px";
      leftbox.style.width = "100%";
      rightbox.style.width = "100%";
    } else {
      centerbox.style.width = "74%";
      leftbox.style.width = "13%";
      rightbox.style.width = "13%";
    }
  }
calcCenter();
window.addEventListener('resize', calcCenter)
}
