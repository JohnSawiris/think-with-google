document.addEventListener('DOMContentLoaded', function() {
  var navBtn = document.querySelector('.nav-bar-btn');
  var closeBtn = document.querySelector('.close-btn');
  var navLinks = document.querySelector('.nav-links');
  var body = document.getElementsByTagName('body')[0];

  function show() {
    navLinks.style.width = '400px';
    navLinks.style.opacity = 1;
    navLinks.style.display = 'block';
    closeBtn.style.display = 'block';
  }

  function hide() {
    navLinks.style.width = 0;
    navLinks.style.opacity = 0;
    closeBtn.style.display = 'none';
  }

  //Events
  navBtn.addEventListener('click', function() {
      show();
  });//NavBtn click end

  closeBtn.addEventListener('click', function() {
    hide();
  });//CloseBtn click end
  window.addEventListener('resize', function() {
    if(window.innerWidth > 990) {
      navLinks.style.opacity = 1;
      navLinks.style.width = "auto";
    } else if (window.innerWidth < 990) {
      hide();
    }
  });
});//DoMContentLoaded end
