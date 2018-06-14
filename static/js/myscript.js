const images = document.querySelectorAll('.image-portfolio');

const laptop = document.querySelector('#laptop-index');
const jumbo = document.querySelector('.jumbotron');

const navbar = document.querySelector('nav');

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


function handleImgOver() {
    const img = this.querySelector('img');
    const overlay = this.querySelector('.overlay');

    img.classList.add('img-hover');
    overlay.classList.add('overlay-hover');

}

function handleImgLeave() {
    const img = this.querySelector('img');
    const overlay = this.querySelector('.overlay');

    overlay.classList.remove('overlay-hover');
    img.classList.remove('img-hover');
}


images.forEach(image => image.addEventListener('mouseover', handleImgOver));
images.forEach(image => image.addEventListener('mouseleave', handleImgLeave));


function handleScrollDown() {
    if (window.scrollY > 120) {
        navbar.style.setProperty('transform','translateY(-100%)');
    } else {
        navbar.style.setProperty('transform','translateY(0)');
    }
}



window.addEventListener('scroll', handleScrollDown);