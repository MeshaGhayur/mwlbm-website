function bodyOverflow(){"hidden"===document.body.style.overflow?document.body.style.overflow="visible":document.body.style.overflow="hidden"}function toggleClassOverlay(){var e=document.body;if(e.classList)e.classList.toggle("overlay-show");else{var o=e.className.split(" "),s=o.indexOf("overlay-show");s>=0?o.splice(s,1):o.push("overlay-show"),e.className=o.join(" ")}}function toggleClassClose(){var e=document.getElementById("navbar-toggler-primary");if(e.classList)e.classList.toggle("close");else{var o=e.className.split(" "),s=o.indexOf("close");s>=0?o.splice(s,1):o.push("close"),e.className=o.join(" ")}}function toggle(){toggleClassOverlay(),toggleClassClose(),bodyOverflow()}document.addEventListener("DOMContentLoaded",function(){var e;if("IntersectionObserver"in window){e=document.querySelectorAll(".lazy");var o=new IntersectionObserver(function(e,s){e.forEach(function(e){if(e.isIntersecting){var s=e.target;s.src=s.dataset.src,s.classList.remove("lazy"),o.unobserve(s)}})});e.forEach(function(e){o.observe(e)})}else{var s;function t(){s&&clearTimeout(s),s=setTimeout(function(){for(var o=window.pageYOffset,s=0;s<e.length;s++)e[s].offsetTop<window.innerHeight+o&&(e[s].src=e[s].dataset.src,e[s].classList.remove("lazy"));0==e.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t))},20)}e=document.querySelectorAll(".lazy"),document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationChange",t)}});

/* curator-feed-default-feed-layout */
(function(){
var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
i.src = "https://cdn.curator.io/published/47678fa4-f8d1-4575-88b8-4333745c7716.js";
e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();


    $(document).ready(function() {
      var feed = document.getElementById("insta-feed");
        if (navigator.userAgent.match(/msie|trident/i)) {
          feed.style.display = "none";
        }
      });
