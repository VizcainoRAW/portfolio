window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-wrapper');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function toggleMenu() {
    console.log("touched")
    var navWrapper = document.querySelector('.nav-wrapper');
    navWrapper.classList.toggle('active');
  }

  document.addEventListener('DOMContentLoaded', function() {
    openJob(event, 'firtsJob');
  });

  function openJob(evt, jobId) {
    var i, tabcontent, tablinks;
    var topIndicator=0;
  
    tabcontent = document.getElementsByClassName("job");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(jobId).style.display = "block";
    evt.currentTarget.className += " active";
  
    for (i = 0; i < tablinks.length; i++) {
      if (tabcontent[i].id == jobId) {
        break;
      }
      topIndicator++;
    }
  
    var indicator = document.getElementsByClassName("MuiTabs-indicator");
    indicator[0].style.top = (topIndicator * tablinks[1].offsetHeight) + "px";
    indicator[0].style.height = tablinks[0].offsetHeight + "px";
  }