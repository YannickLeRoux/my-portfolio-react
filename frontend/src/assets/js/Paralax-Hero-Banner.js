export default function() {
    // transformer en es6
    const jumboHeight = document.querySelector('.jumbotron').offsetHeight;
    function parallax(){
        const scrolled = document.window.scrollTop();
        document.querySelector('.jumbotron').style.backgroundPosition = 'center ' + -(scrolled * 0.2) + 'px';
        console.log(jumboHeight-scrolled);
    }

    document.window.scroll(function(e){

        parallax();

    });

}