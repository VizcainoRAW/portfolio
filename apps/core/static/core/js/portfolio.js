document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-wrapper');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

  openJob(event, 1)
  });
    
  document.getElementById("copyButton").addEventListener("click", function() {
    var mail = "ivanandres1305@gmail.com";
    navigator.clipboard.writeText(mail)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
    this.innerText = "¡Mail Copied!";
  });
  
});

function toggleMenu() {
  var navWrapper = document.querySelector('.nav-wrapper');
  navWrapper.classList.toggle('active');
}

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
  
}