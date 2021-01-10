
function bodyOverflow() {
if (document.body.style.overflow === "hidden") {
  document.body.style.overflow = "visible";
} else {
  document.body.style.overflow = "hidden";
}
}
function toggleClassOpen(){
  var element = document.getElementById("navbarSupportedContent-primary");

  if (element.classList) {
    element.classList.toggle("open");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("open");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("open");
      element.className = classes.join(" ");
  }
}
function toggleClassOverlay(){
  var element = document.body;

  if (element.classList) {
    element.classList.toggle("overlay-show");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("overlay-show");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("overlay-show");
      element.className = classes.join(" ");
  }
}
function toggleClassClose(){
  var element = document.getElementById("navbar-toggler-primary");

  if (element.classList) {
    element.classList.toggle("close");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("close");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("close");
      element.className = classes.join(" ");
  }
}

function toggle(){
  toggleClassOpen();
  toggleClassOverlay();
  toggleClassClose();
  bodyOverflow();
}
