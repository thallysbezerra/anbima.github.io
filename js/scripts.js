$( document ).ready(function() {
    $("header").addClass("animated fadeInDown");
});

/* Tasty Burger Menu */
var count = 0;
$(".burgerMenu").click(function() {
    count++;
    //even odd click detect 
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    // on odd clicks do this
    if (isEven(count) === false) {
        $(".burgerMenu").addClass("showMenu");
		$(".linksMenu").addClass("showMenu");
		$(".navMenu").removeClass("bounceOutUp");
		$(".navMenu").addClass("animated bounceInDown");
    }
    // on even clicks do this
    else if (isEven(count) === true) {
        $(".burgerMenu").removeClass("showMenu");
    	$(".navMenu").removeClass("bounceInDown");
        $(".navMenu").addClass("bounceOutUp");
    }
});