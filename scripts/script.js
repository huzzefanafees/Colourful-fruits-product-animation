// This block of code will be executed once the document is ready.
$(document).ready(function () {
  // Function to handle the 'slide.bs.carousel' event of the carousel
  $('#carousel').on('slide.bs.carousel', function (e) {
    var index = e.to + 1;
    // Highlight the corresponding navigation link based on the current slide index
    var $navLinks = $('.navbar-nav .nav-link');
    $navLinks.removeClass('active');
    $navLinks.eq(index - 1).addClass('active');

    // Define an array of button colors for each slide
    var buttonColors = ['linear-gradient(225.35deg, #FFEE57 0%, #FFB930 97.53%)', 'linear-gradient(225.35deg, #CEB7B4 0%, #B57049 97.53%)', 'linear-gradient(225.35deg, #FBC9C9 0%, #CF3939 97.53%)', 'linear-gradient(225.35deg, #DCB7F2 0%, #814C62 97.53%)', 'linear-gradient(225.35deg, #F2DBAF 0%, #9C9344 97.53%)'];
    var buttonColor = buttonColors[index - 1];

    // Set the background color of the carousel container and buttons to match the current slide
    $('.carousel-container').css('background', buttonColor);
    $('.btn-color').css('background', buttonColor);
  });

  // Function to handle the 'slid.bs.carousel' event of the carousel
  $('#carousel').on('slid.bs.carousel', function (e) {
    var $active = $('.carousel-item.active');
    var $next = $(e.relatedTarget);
    var direction = e.direction;

    // Add classes to create slide animations for the carousel items
    if (direction === 'left') {
      $active.addClass('next');
      $next.addClass('previous');
    } else if (direction === 'right') {
      $active.addClass('previous');
      $next.addClass('next');
    }

    // Remove 'active' class from all carousel items and add it to the next item
    $('.carousel-item').removeClass('active');
    $next.addClass('active');
  });
});

// Function to change the active slide of the carousel programmatically
function changeCarousel(index) {
  $('#carousel').carousel(index - 1);
}

// This block of code will be executed once the document is ready.
$(document).ready(function () {
  var carouselItems = $('.carousel-item');

  // Function to animate the left and right sections of the carousel items
  function animateSections($prev, $next) {
    // Animation for the left section
    $prev.find('.left-section').addClass('active');
    $next.find('.left-section').addClass('next');

    // Animation for the right section
    $prev.find('.right-section').addClass('active');
    $next.find('.right-section').addClass('next');
  }

  // Function to remove animation classes from carousel items
  function removeAnimationClasses() {
    $('.left-section, .right-section').removeClass('active next');
  }

  // Set initial state on page load
  var $initialItem = $('.carousel-item').first();
  animateSections($(), $initialItem);
  setTimeout(function () {
    removeAnimationClasses();
  }, 1000); // Duration of the animation in milliseconds

  // Update border color when carousel slides
  $('#carousel').on('slide.bs.carousel', function (e) {
    var $prevItem = $(e.relatedTarget);
    var $nextItem = $(e.target);

    // Animate the sections of the previous and next carousel items
    animateSections($prevItem, $nextItem);

    setTimeout(function () {
      removeAnimationClasses();
    }, 1000); // Duration of the animation in milliseconds
  });
});
