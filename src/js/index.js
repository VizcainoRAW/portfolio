window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-wrapper');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });