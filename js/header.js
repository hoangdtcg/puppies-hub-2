(function ($) {

    var navbar = $('.navbar .header-section');
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        // Scroll down
        if(st > 160) {
            navbar.fadeIn();
            navbar.removeClass('navbar-light bg-transparent').addClass('nav-fixed');
        }
        // Reached top
        else {
            navbar.removeClass('nav-fixed').addClass('navbar-light bg-transparent');
        }
        lastScrollTop = st;
    });

})(jQuery);
