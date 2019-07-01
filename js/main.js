(function ($) {
    $(document).ready(function () {

        //.hide .navbar
        $(".navscroll").hide();
        $(function () {
            $(window).scroll(function () {

                if($(this).scrollTop() > 100){
                    $('.navscroll').fadeIn();
                }else{
                    $('.navscroll').fadeOut();
                }
            });
        });
    });
}(jQuery));





// next page arrow
// $(document).ready(function(){
//     $('.films').slick({ 
        // slidesToShow: 6,
        // slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 90000,
        // arrows: false,
        // dots: false,
        // pauseOnHover: false,
        // responsive: [ {
        //     breakpoint: 994,
        //     settings: {
        //         slidesToShow: 4
        //     }
        // }, {
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow:3
        //     }
        // }, {
        //     breakpoint: 520,
        //     settings: {
        //         slidesToShow: 2
        //     }
        // }]
        $('.films').slick({
            slidesToShow: 6,
            slidesToScroll: 3, 
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 994,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
    // });
});
 