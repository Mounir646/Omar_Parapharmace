// subtle 3D tilt — desktop / fine pointer only
  var canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canTilt) {
    var hero = document.getElementById('heroTilt');
    if (hero) {
      hero.addEventListener('mousemove', function(e){
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        hero.style.transform = 'perspective(1400px) rotateY(' + (x*10) + 'deg) rotateX(' + (-y*10) + 'deg)';
      });
      hero.addEventListener('mouseleave', function(){
        hero.style.transform = 'perspective(1400px) rotateY(0deg) rotateX(0deg)';
      });
    }
    document.querySelectorAll('.card-media').forEach(function(media){
      media.addEventListener('mousemove', function(e){
        var r = media.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        media.querySelector('img').style.transform = 'scale(1.06) rotateY(' + (x*8) + 'deg) rotateX(' + (-y*8) + 'deg)';
      });
      media.addEventListener('mouseleave', function(){
        media.querySelector('img').style.transform = 'scale(1) rotateY(0) rotateX(0)';
      });
    });
  }

  // reveal on scroll — single orchestrated pass
  var revealEls = document.querySelectorAll('[data-reveal]');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function(el){ io.observe(el); });