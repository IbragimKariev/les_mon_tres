$(function() {

    //BEGIN
    $(".accordion__title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);

        // if (!$this.hasClass("accordion-active")) {
        //     $(".accordion__content").slideUp(400);
        //     $(".accordion__title").removeClass("accordion-active");
        //     $('.accordion__arrow').removeClass('accordion__rotate');
        // }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END

});

$(document).ready(function () {
    $('.mobile-menu').click(function(event) {
        $('.mobile-menu').toggleClass('open');
        $('.navbar-mobile').toggleClass('open-nav');

    });
    $('.open-filter').click(function(event) {
        $('.filter-items').show();
        $('.bg-black').show();
    });
    $('#close-filter').click(function(event) {
        $('.filter-items').hide();
        $('.bg-black').hide();
    });

    $('.open-sort').click(function(event) {
        $('.sort-block').show();
        $('.bg-black').show();
    });
    $('#close-sort').click(function(event) {
        $('.sort-block').hide();
        $('.bg-black').hide();
    });
    $('.tablet-menu').click(function(event) {
        $('.tablet-menu').toggleClass('open');
        $('#navigation').toggleClass('open-nav');
        $('.bg-black').toggleClass('d-block');
    });
});

$(".navigation li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
        $(this).children("ul").stop().slideDown(300);
    } else {
        $(this).children("ul").stop().slideUp(300);
    }
});
// product Gallery and Zoom

// activation carousel plugin
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
    }
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,

    thumbs: {
        swiper: galleryThumbs
    },
});
// change carousel item height
// gallery-top
let productCarouselTopWidth = $('.gallery-top').outerWidth();
$('.gallery-top').css('height', productCarouselTopWidth);

// gallery-thumbs
let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
$('.gallery-thumbs').css('height', productCarouselThumbsItemWith);

$(function() {
    // Owl Carousel
    var owl = $(".slider-more-products");
    owl.owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<img src='assets/images/icons/sliderarrow.svg'>","<img src='assets/images/icons/sliderarrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
