$('#menu_btn').click(function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('show');

});


$('.testimonials').slick({
    dots: true,
    infinite: false,
    vertical: true,
    appendDots: '.slick-dots',
    appendArrows: '.slick-arrows',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-up'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-down'></i></button>"
});


