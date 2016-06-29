//Slider effects
$( document ).ready(function() {
    
    $("header").addClass("fadeInDown");

    setTimeout(function(){
        $('.figureProfile').addClass("zoomInUp");
    },500);
    setTimeout(function(){
        $('.namePerson').addClass("bounceInLeft");
    },1000);
    setTimeout(function(){
        $('.functionPerson').addClass("bounceInLeft");
    },1500);
    setTimeout(function(){
        $('.infoPerson > p').addClass("bounceInLeft");
    },2000);

});

// Tasty Burger Menu
var count = 0;
$(".burgerMenu").click(function() {
    count++;
    //even odd click detect 
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    // on odd clicks do this
    if (isEven(count) === false) {
        $("header").addClass("fixedMenu");
        $(".burgerMenu").addClass("showMenu");
        $(".linksMenu").addClass("showMenu");
        $(".navMenu").removeClass("bounceOutUp");
        $(".navMenu").addClass("bounceInDown");
        $(".bgShade").removeClass("fadeOut");
        $(".bgShade").addClass("fadeIn");
    }
    // on even clicks do this
    else if (isEven(count) === true) {
        $("header").removeClass("fixedMenu"); 
        $(".burgerMenu").removeClass("showMenu");
        $(".navMenu").removeClass("bounceInDown");
        $(".navMenu").addClass("bounceOutUp");
        $(".bgShade").removeClass("fadeIn");
        $(".bgShade").addClass("fadeOut");
    }
});

// Animation on header
var $anchor = $('html, body');
$('.anchor').click(function() {
    $("header").removeClass("fixedMenu");
    $(".burgerMenu").removeClass("showMenu");
    $(".navMenu").removeClass("bounceInDown");
    $(".navMenu").addClass("bounceOutUp");
    $(".bgShade").removeClass("fadeIn");
    $(".bgShade").addClass("fadeOut");
    count++;
    $anchor.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// Burger menu without one extra click
$('.linkHeader').click(function() {
    count++;
});

// Anchor to header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".linkHeader").addClass("show");
    } else {
        $(".linkHeader").removeClass("show");
    }
});