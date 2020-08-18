class StickyBar {
    constructor() {
        $(window).scroll(function () {
            $(window).scroll(function() {
                var self = this;
                console.log(this)
                clearTimeout($.data(self, 'scrollTimer'));
                $.data(self, 'scrollTimer', setTimeout(function() {
                    $('.navbar__fixed').removeClass('navbar__fixed--visible');
                }, 2000));
                $('.navbar__fixed').mouseenter(function() {
                    clearTimeout($.data(self, 'scrollTimer')); 
                })
                if ($(window).scrollTop() > 1000) {
                    $('.navbar__fixed').addClass('navbar__fixed--visible');
                }
                if ($(window).scrollTop() < 1001) {
                    $('.navbar__fixed').removeClass('navbar__fixed--visible');
                }
            })
        });
    }
}

export default StickyBar;