document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // console.log($navbarBurgers)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;

        const $target = document.getElementById(target);
        // console.log($target + ' : ' + target)
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  };

  const navBarLinks = document.querySelectorAll('div.navbar-item > a');
  if (navBarLinks.length > 0) {
    navBarLinks.forEach(el => {
      el.addEventListener('click', e => {
        const navBarBurger = document.querySelector('a.navbar-burger');
        const myNavbar = document.querySelector('div#my-navbar');
        navBarBurger.classList.remove('is-active');
        myNavbar.classList.remove('is-active');

        const target = e.currentTarget;
        currentTarget = target.dataset.href
        if (currentTarget === 'home-page') return window.scrollTo(0, 0)
        const curHref = document.querySelector(`#${target.dataset.href}`);
        curHref.scrollIntoView();
      });
    });
  };

  // console.log(document.querySelectorAll('section'))

});