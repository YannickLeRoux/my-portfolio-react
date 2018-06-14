
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.jumbotron').css('background-position', 'center ' + -(scrolled * 0.2) + 'px');
    console.log(jumboHeight-scrolled);
}

$(window).scroll(function(e){
    
    parallax();
    
});