// Lazy Loading

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        for(var i = 0; i < lazyloadImages.length; i++) {
            if(lazyloadImages[i].offsetTop < (window.innerHeight + scrollTop)) {
                lazyloadImages[i].src = lazyloadImages[i].dataset.src;
                lazyloadImages[i].classList.remove('lazy');
            }
        }
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});


function bodyOverflow() {
if (document.body.style.overflow === "hidden") {
  document.body.style.overflow = "visible";
} else {
  document.body.style.overflow = "hidden";
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
  toggleClassOverlay();
  toggleClassClose();
  bodyOverflow();
}
