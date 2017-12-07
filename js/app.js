document.addEventListener('DOMContentLoaded', function() {
  var navBtn = document.querySelector('.nav-bar-btn');
  var closeBtn = document.querySelector('.close-btn');
  var navLinks = document.querySelector('.nav-links');
  //Events
  navBtn.addEventListener('click', function() {
      navLinks.style.width = '42.6%';
      navLinks.style.display = 'block';
      closeBtn.style.display = 'block';
      this.classList.toggle('click');

  });//NavBtn click end

  closeBtn.addEventListener('click', function() {
    navLinks.style.width = '0';
    this.style.display = 'none';
    navBtn.classList.toggle('click');
  });//CloseBtn click end
});//DoMContentLoaded end
