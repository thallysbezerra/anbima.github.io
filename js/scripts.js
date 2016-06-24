
$( document ).ready(function() {
    
    // Top with fadeInDown
    $("header").addClass("fadeInDown"); 

    // imgProfile with zoomInUp
    setTimeout(function(){
        $('.figureProfile').addClass("zoomInUp");
    },500);

    // h1.namePerson with bounceInLeft
    setTimeout(function(){
        $('.namePerson').addClass("bounceInLeft");
    },1000);

    // h2.functionPerson with bounceInLeft
    setTimeout(function(){
        $('.functionPerson').addClass("bounceInLeft");
    },1500);

    // h2.functionPerson with bounceInLeft
    setTimeout(function(){
        $('.infoPerson > p').addClass("bounceInLeft");
    },2000);

});

$( document ).on("tap",function() {

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