// Can also be included with a regular script tag
import Typed from 'typed.js';
import SmoothScroll from 'smooth-scroll';
import "@fancyapps/fancybox/dist/jquery.fancybox.min.js"
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import "animate.css/animate.css";
import "jquery/dist/jquery";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import StickyBar from "./StickyBar";
import FancyContainer from "./FancyContainer";

var options = {
  strings: ["Mobile Developer . Machine Learning . Content Creator", "Mobile Developer . Machine Learning . Content Creator", "Mobile Developer . Machine Learning . Content Creator"],
  typeSpeed: 80,
  showCursor: false,
  loop: true,
  fadeOut: true,
};

var typed = new Typed('#title', options);
var scroll = new SmoothScroll('a[href*="#"]');
var stickyBar = new StickyBar();
var fancyContainer = new FancyContainer();