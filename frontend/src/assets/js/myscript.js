export default function () {

  const images = document.querySelectorAll('.image-portfolio');

  const navbar = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const navCollapse = document.querySelector('.navbar-collapse');

  const main = document.querySelector('main');

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

    function handleTopMargin() {
        const navHeight = navbar.offsetHeight;
        main.style.setProperty('margin-top', navHeight + 'px');
    }

    handleTopMargin();
    window.addEventListener('resize', handleTopMargin);

    function handleCloseNav() {
        navCollapse.classList.remove('show');
    }

    navLinks.forEach(link => link.addEventListener('click', handleCloseNav));
};