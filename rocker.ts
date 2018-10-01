let requiredMaxDeltaTime = 200; // millis

var lastClickTime = 0;
var lastClickButton = -1;

function getTime() {
  var d = new Date();
  return d.getMilliseconds();
}

window.addEventListener("mousedown", function(event: MouseEvent) {
  let time = getTime();
  let deltaMs = time - lastClickTime;
  let button = event.button;

  if (deltaMs < requiredMaxDeltaTime) {
    if (button === 0 && lastClickButton == 2) {
      // right then left (back)
      window.history.back();
      event.preventDefault();
    } else if (button === 2 && lastClickButton == 1) {
      // left then right (forward)
      window.history.forward();
      event.preventDefault();
    }
  }

  lastClickTime = time;
  lastClickButton = button;
});
