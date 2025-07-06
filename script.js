function animateBox() {
  var box = document.getElementById("animatedBox");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos >= 300) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
    }
  }
}
