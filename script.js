// Typing Effect and Progress Bar animations

const phrases = [
    "Full-Stack Developer",
    "DevOps Enthusiast",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast"
  ];
  let currentPhraseIndex = 0;

  function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          deleteEffect(element, text, speed);
        }, 1000);
      }
    }
    type();
  }

  function deleteEffect(element, text, speed) {
    let i = text.length;
    function erase() {
      if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(erase, speed);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeEffect(element, phrases[currentPhraseIndex], speed);
      }
    }
    erase();
  }

  const typingElement = document.querySelector(".dynamic-text");
  typeEffect(typingElement, phrases[currentPhraseIndex], 60);

  // Scroll to activate progress bars
  const skillsSection = document.querySelector('#skills');
  const progressBars = document.querySelectorAll('.progress-bar');

  function animateProgressBars() {
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }

  function handleScroll() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
      animateProgressBars();
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Navbar link activation on scroll
  // Navbar link activation on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
let currentSection = '';

// Loop through each section
sections.forEach(section => {
    // Get the distance of the section from the top of the viewport
    const sectionTop = section.offsetTop - 100; // Adjust offset for better UX
    if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id'); // Get the id of the current section
    }
});

// Remove active class from all links and add to the current section link
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
    }
});
}

window.addEventListener('scroll', activateNavLink); // Call the function on scroll

  window.addEventListener('scroll', activateNavLink);

  // Close the mobile navbar when a link is clicked
  $('.navbar-nav .nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Close the mobile navbar when clicking outside of it
  $(document).on('click', function (event) {
    var clickOver = $(event.target);
    var opened = $('.navbar-collapse').hasClass('show');
    if (opened === true && !clickOver.hasClass('navbar-toggler')) {
      $('.navbar-collapse').collapse('hide');
    }
  });
  //page load
  window.onload = function () {
// Scroll to the top of the page when the page is loaded
window.scrollTo(0, 0);
window.location.hash = ""; // Clear any hash in the URL
};
//scroll top
$(document).ready(function(){
$(window).scroll(function () {
    if ($(this).scrollTop() > 2300) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});
});