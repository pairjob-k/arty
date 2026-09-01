(function(){
  "use strict";

  /* ---- header solidify ---- */
  var header = document.getElementById("siteHeader");
  var heroSentinel = document.querySelector("[data-hero-sentinel]");
  if (header && heroSentinel){
    var headerObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        header.classList.toggle("is-solid", !entry.isIntersecting || entry.intersectionRatio < 0.7);
      });
    }, { threshold: [0, 0.7] });
    headerObserver.observe(heroSentinel);
  } else if (header){
    header.classList.add("is-solid");
  }

  /* ---- mobile menu ---- */
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu){
    menuBtn.addEventListener("click", function(){
      var open = mobileMenu.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        mobileMenu.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- generic scroll reveal ---- */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length){
    var revealObserver = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22 });
    revealTargets.forEach(function(el){ revealObserver.observe(el); });
  }
})();
