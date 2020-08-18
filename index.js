// Can also be included with a regular script tag
import Typed from 'typed.js';
import SmoothScroll from 'smooth-scroll';
import "@fancyapps/fancybox/dist/jquery.fancybox.min.js"
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import "animate.css/animate.css";
import "jquery/dist/jquery";

var options = {
  strings: ["Mobile Developer . Machine Learning . Content Creator", "Mobile Developer . Machine Learning . Content Creator", "Mobile Developer . Machine Learning . Content Creator"],
  typeSpeed: 80,
  showCursor: false,
  loop: true,
  fadeOut: true,
};

var typed = new Typed('#title', options);
var scroll = new SmoothScroll('a[href*="#"]');