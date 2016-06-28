$( document ).ready(function() {
    
    $("header").addClass("fadeInDown"); // Top with fadeInDown

    setTimeout(function(){
        $('.figureProfile').addClass("zoomInUp"); // imgProfile with zoomInUp
    },500);
    setTimeout(function(){
        $('.namePerson').addClass("bounceInLeft"); // h1.namePerson with bounceInLeft
    },1000);
    setTimeout(function(){
        $('.functionPerson').addClass("bounceInLeft"); // h2.functionPerson with bounceInLeft
    },1500);
    setTimeout(function(){
        $('.infoPerson > p').addClass("bounceInLeft"); // h2.functionPerson with bounceInLeft
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
        $("header").addClass("fixedMenu"); // Fixed menu on top
        $(".burgerMenu").addClass("showMenu"); // X button on menu
        $(".linksMenu").addClass("showMenu"); // Open menu links
        $(".navMenu").removeClass("bounceOutUp"); // Effect bounceOutUp on nav
        $(".navMenu").addClass("bounceInDown"); // Effect bounceInDown on nav
        $(".bgShade").removeClass("fadeOut"); // Cancel fffect fadeOut on shade
        $(".bgShade").addClass("fadeIn"); // Start Effect fadeIn on shade
    }
    // on even clicks do this
    else if (isEven(count) === true) {
        $("header").removeClass("fixedMenu"); // Remove fixed menu on top
        $(".burgerMenu").removeClass("showMenu"); // Burger button on menu
        $(".navMenu").removeClass("bounceInDown"); // Effect bounceInDown on nav
        $(".navMenu").addClass("bounceOutUp"); // Effect bounceOutUp on nav
        $(".bgShade").removeClass("fadeIn"); // Cancel effect fadeIn on shade
        $(".bgShade").addClass("fadeOut"); // Start effect fadeOut on shade
    }
});

var $anchor = $('html, body');
$('.anchor').click(function() {
    $("header").removeClass("fixedMenu"); // Remove fixed menu on top
    $(".burgerMenu").removeClass("showMenu"); // Burger button on menu
    $(".navMenu").removeClass("bounceInDown"); // Effect bounceInDown on nav
    $(".navMenu").addClass("bounceOutUp"); // Effect bounceOutUp on nav
    $(".bgShade").removeClass("fadeIn"); // Cancel effect fadeIn on shade
    $(".bgShade").addClass("fadeOut"); // Start effect fadeOut on shade
    count++;
    $anchor.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$(window).scroll(function() {
    if ($(scroll).scrollTop() > 100) {
        $(".linkHeader").stop().animate({
            opacity: 1
        }, 250);
    } else {
        $(".linkHeader").stop().animate({
            opacity: 0
        }, 250);
    }
});