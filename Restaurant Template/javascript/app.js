$(document).ready(function(){
    $('.food-slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        autoplay: true,
    });
});